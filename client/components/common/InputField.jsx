import styled from "styled-components";

import { color } from "@/styles/utils.styled";

const InputField = ({
  label,
  startAdornment,
  endAdornment,
  helperText,
  status,
  bg,
  textarea,
  className,
  ...props
}) => {
  return (
    <>
      <InputGroup
        $disabled={props.disabled}
        $status={status}
        $bg={bg}
        className={className}
      >
        {label && <label htmlFor={props.id}>{label}</label>}
        <div>
          {startAdornment && <span>{startAdornment}</span>}

          {textarea ? <textarea {...props} /> : <input {...props} />}
          {endAdornment && <span>{endAdornment}</span>}
        </div>
        {helperText && <small>{helperText}</small>}
      </InputGroup>
    </>
  );
};

export default InputField;

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

  > small {
    display: flex;
    gap: 8px;
    align-items: center;
    color: ${({ $status }) =>
      $status === "error" ? color("primary", 900) : color("tertiary", 600)};
  }

  > div {
    height: 40px;
    width: 100%;
    background: ${({ $disabled }) =>
      $disabled ? color("tertiary", 800) : null};
    border-radius: 4px;
    border: 1px solid
      ${({ $status }) =>
        $status === "error"
          ? color("primary", 900)
          : color("tertiary", "main")};
    color: ${() => color("primary", 200)};
    display: flex;
    align-items: center;

    &:focus,
    &:active,
    &:hover {
      border: 1px solid ${() => color("primary", "main")};
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
    }

    > textarea {
      width: 100%;
      height: 100%;
      font-size: 16px;
      padding: 12px;
    }
  }
`;
