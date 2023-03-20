import styled from "styled-components";

import AuthContainer from "../_molecules/auth/AuthContainer";
import AuthTitle from "../_molecules/auth/AuthTitle";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

const ForgetPassword = () => {
  return (
    <>
      <AuthContainer>
        <FormElement>
          <AuthTitle
            title="Forgot password"
            subText="Don't fret! Input your email for password reset link."
          />
          <>
            <InputField
              placeholder="browynlouis2@gmail.com"
              label="Email address"
              id="email"
              type="email"
            />
          </>
          <>
            <Button fullWidth>Send password reset email</Button>
          </>
        </FormElement>
      </AuthContainer>
    </>
  );
};

export default ForgetPassword;

const FormElement = styled.form``;
