import Link from "next/link";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

import AuthContainer from "../_molecules/auth/AuthContainer";
import AuthTitle from "../_molecules/auth/AuthTitle";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";
import { color } from "@/styles/utils.styled";

const LoginForm = () => {
  return (
    <>
      <AuthContainer>
        <FormElement>
          <AuthTitle
            title="Login"
            subText="Login to continue from where you stopped!"
          />
          <>
            <InputField
              placeholder="johndoe@example.com"
              label="Email address"
              id="email"
              type="email"
            />
            <InputField
              placeholder="Password"
              label="Password"
              id="password"
              type="password"
            />
          </>

          <Options>
            <small>
              Not registered?
              <Link href="/register"> Register</Link>
            </small>
            <Link href="/forgot-password">
              <small>Forgot password?</small>
            </Link>
          </Options>

          <>
            <Button fullWidth>Login</Button>
          </>
        </FormElement>
      </AuthContainer>
    </>
  );
};

export default LoginForm;

const FormElement = styled.form``;

const Options = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a:last-child {
    small {
      color: ${() => color("primary", 900)};
    }
  }
`;
