import { color } from "@/styles/utils.styled";
import React, { useState } from "react";
import styled from "styled-components";

const TagInput = ({ tags, setTags }) => {
  const allTags = ["react", "javascript", "python"];
  const [currentTag, setCurrentTag] = useState("");
  const [tagSuggestions, setTagSuggestions] = useState([]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setCurrentTag(value);

    if (value.trim() !== "") {
      const suggestions = allTags.filter((tag) => {
        if (tag.toLowerCase().includes(value.toLowerCase())) {
          return tag;
        }
      });
      setTagSuggestions(suggestions);
    } else {
      setTagSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && currentTag.trim() !== "") {
      tags.length < 3 && setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
      setTagSuggestions([]);
    }
  };

  const handleBlur = () => {
    if (currentTag.trim() !== "") {
      tags.length < 3 && setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
      setTagSuggestions([]);
    }
  };

  const handleSuggestionTagClick = (tag) => {
    console.log(tag);
    console.log("fuck");
    tags.length < 3 && setTags([...tags, tag]);

    setCurrentTag("");
    setTagSuggestions([]);
  };

  const handleRemoveTag = (tagToRemve) => {
    setTags(tags.filter((tag) => tag !== tagToRemve));
  };

  return (
    <InputContainer>
      <label>Tag</label>
      <InnerContainer>
        <InputGroup>
          {tags.length > 0 && (
            <Tags>
              {tags.map((tag) => (
                <Tag key={tag}>
                  {tag}
                  <span onClick={() => handleRemoveTag(tag)}>&#x2715;</span>
                </Tag>
              ))}
            </Tags>
          )}
          <input
            type="text"
            placeholder="Tag"
            value={currentTag}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
          />
          {tags.length === 0 && <span>Optional</span>}
        </InputGroup>
      </InnerContainer>

      {tagSuggestions.length > 0 && (
        <SuggestionBox length={tagSuggestions.length}>
          <ul>
            {tagSuggestions.map((tag) => (
              <li key={tag} onClick={() => handleSuggestionTagClick(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        </SuggestionBox>
      )}
    </InputContainer>
  );
};

export default TagInput;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  > label {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${() => color("tertiary", 700)};
    font-weight: 400;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  border: 1px solid
    ${({ $status }) =>
      $status === "error" ? color("primary", 900) : color("primary", 200)};

  transition: all 0.3s ease-in;
  border-radius: 4px;
`;

const InputGroup = styled.div`
  height: 40px;
  width: 100%;
  position: relative;
  background: ${({ $disabled }) => ($disabled ? color("tertiary", 800) : null)};

  color: ${() => color("primary", 200)};
  display: flex;
  align-items: center;
  padding: 4px;

  &:focus,
  &:active,
  &:hover {
    input {
      ::placeholder {
        color: transparent;
      }
    }
  }

  > span:first-child {
    padding-left: 8px;
  }

  > span:last-child {
    padding-right: 8px;
  }

  > input {
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 12px;
    color: ${() => color("secondary", 100)};
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${() => color("primary", 200)};

  span {
    padding-left: 5px;
    cursor: pointer;
  }
`;

const SuggestionBox = styled.div`
  animation: fadeIn 0.3s linear;
  min-height: 30px;
  max-height: 120px;
  overflow: auto;
  width: 100%;
  padding: 12px 10px;
  position: absolute;
  top: 56px;
  z-index: 999;
  background: #fff;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
  border-bottom: 1px solid #999;

  ul {
    /* position: absolute; */

    li {
      border-radius: 3px;
      padding: 12px 10px;
      cursor: pointer;

      :hover {
        background: #e9f3ff;
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }
`;
