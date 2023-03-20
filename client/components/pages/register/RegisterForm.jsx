import React from "react";
import Link from "next/link";
import styled from "styled-components";

import AuthContainer from "../_molecules/auth/AuthContainer";
import AuthTitle from "../_molecules/auth/AuthTitle";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

const RegisterForm = () => {
  return (
    <>
      <AuthContainer>
        <FormElement>
          <AuthTitle
            title="Register"
            subText="Register with Taskify to get started"
          />
          <>
            <div>
              <InputField
                placeholder="John Doe"
                label="Name"
                id="name"
                type="text"
              />
              <InputField
                placeholder="johndoe@example.com"
                label="Email address"
                id="email"
                type="email"
              />
            </div>
            <InputField
              placeholder="Password"
              label="Password"
              id="password"
              type="password"
            />
            <InputField
              placeholder="Confirm Password"
              label="Confirm Password"
              id="confirm_password"
              type="password"
            />
          </>
          <Options>
            Already a member ?{" "}
            <Link href="/login">
              <strong>Login</strong>
            </Link>
          </Options>
          <>
            <Button fullWidth>Register</Button>
          </>
        </FormElement>
      </AuthContainer>
    </>
  );
};

export default RegisterForm;

const FormElement = styled.form`
  > div:nth-child(2) {
    display: flex;
    gap: 24px;
  }
`;

const Options = styled.div`
  text-align: right;
  width: 100%;
`;
