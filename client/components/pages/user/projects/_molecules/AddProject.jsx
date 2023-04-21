import React, { useState } from "react";
import styled from "styled-components";

import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "@/components/pages/auth/validation";
import InputField from "@/components/common/InputField";
import Modal from "@/components/common/Modal";

import { color } from "@/styles/utils.styled";
import Button from "@/components/common/Button";
import TagInput from "./TagInput";
import { useCreateProjectMutation } from "@/redux/api/childApi/userApi";
import { toast } from "react-hot-toast";
import CreateProjectSuccess from "./CreateProjectSuccess";

const AddProject = ({ isOpen, setIsOpen }) => {
  const [tags, setTags] = useState([]);
  const [successfulModal, setSuccessfulModal] = useState(false);

  const [createProject, { isSuccess }] = useCreateProjectMutation();

  const initialData = {
    project_name: "",
    project_description: "",
    due_date: "",
    priority: "",
    status: "",
  };

  const {
    formData,
    errors,
    handleBlur,
    handleChange,
    checkIsValid,
    validateOnSubmit,
    setFormData,
  } = useFormValidation(initialData, validation);

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateOnSubmit()) {
      return;
    }

    setTimeout(() => {
      setIsOpen(false);
    }, 4000);

    await toast.promise(createProject({ ...formData, tags }).unwrap(), {
      loading: "Creating project, wait a moment...",
      success: (data) => {
        setSuccessfulModal(true);
        return data.message;
      },
      error: (err) => err.message,
    });
  };

  return (
    <AddProjectContainer>
      <AddProjectHeader>
        <Title>
          <h4>Create a new Project</h4>
        </Title>
      </AddProjectHeader>
      <FormContainer
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.preventDefault();
        }}
      >
        <div>
          <InputField
            type="text"
            id="project_name"
            label="Project Name"
            placeholder="Enter a project name"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.project_name}
            status={checkIsValid("project_name")}
            autoComplete="off"
          />
          <InputField
            textarea
            placeholder="Enter a short description"
            id="project_description"
            label="Project Description"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.project_description}
            status={checkIsValid("project_description")}
            autoComplete="off"
          />
          <DatePriority>
            <InputField
              type="date"
              id="due_date"
              label="Due Date"
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
              helperText={errors.due_date}
              status={checkIsValid("due_date")}
              autoComplete="off"
            />
            <InputGroup>
              <label>Priority</label>
              <div>
                <select id="priority" onChange={(e) => handleChange(e)}>
                  <option defaultValue>select priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </InputGroup>
          </DatePriority>
          <InputField
            type="text"
            id="team_member"
            label="Team member"
            placeholder="Enter a team member"
            endAdornment="Optional"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                team_member: e.target.value,
              }))
            }
            status={checkIsValid("team_member")}
            autoComplete="off"
          />
          <Optional>
            <InputGroup>
              <label>Status</label>
              <div>
                <select id="status" onChange={(e) => handleChange(e)}>
                  <option defaultValue>Select Status</option>
                  <option value="0">Not Started</option>
                  <option value="1">In Progress</option>
                  <option value="2">Completed</option>
                </select>
              </div>
            </InputGroup>
            <TagInput tags={tags} setTags={setTags} />
          </Optional>
        </div>
        <Button type="submit" noBack>
          Create
        </Button>
      </FormContainer>
      {successfulModal && isSuccess && (
        <Modal
          ModalContent={CreateProjectSuccess}
          setIsOpen={setSuccessfulModal}
        />
      )}
    </AddProjectContainer>
  );
};

export default AddProject;

const AddProjectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const AddProjectHeader = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
const DatePriority = styled.div`
  display: flex;
  gap: 18px;
`;

const Optional = styled(DatePriority)``;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  > label {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${() => color("tertiary", 700)};
    font-weight: 400;
  }

  > div {
    height: 40px;
    width: 100%;
    background: ${({ $disabled }) =>
      $disabled ? color("tertiary", 800) : null};
    border-radius: 4px;
    border: 1px solid
      ${({ $status }) =>
        $status === "error" ? color("primary", 900) : color("primary", 200)};
    border: none;
    color: ${() => color("primary", 200)};
    display: flex;
    align-items: center;

    &:focus,
    &:active,
    &:hover {
      border: none;
    }

    > span:first-child {
      padding-left: 8px;
    }

    > span:last-child {
      padding-right: 8px;
    }

    > select {
      /* styling */
      background-color: white;
      border: 1px solid ${() => color("primary", 200)};
      width: 100%;
      height: 100%;
      border-radius: 4px;
      display: inline-block;
      font: inherit;
      line-height: 1.5em;
      padding: 0.5em 3.5em 0.5em 1em;

      /* reset */
      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
    }
  }

  select:focus {
    background-image: linear-gradient(45deg, green 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, green 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
      calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;
