import { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import AuthHeader from "../../_molecules/auth/AuthHeader";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "../validation";

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState(true);
  const initialData = {
    email: "",
    password: "",
  };

  const {
    formData,
    errors,
    handleBlur,
    handleChange,
    checkIsValid,
    validateOnSubmit,
  } = useFormValidation(initialData, validation);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AuthContainer>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <AuthHeader title="Welcome Back!" />
          <InputField
            type="email"
            id="email"
            label="Email address"
            placeholder="Email address"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.email}
            status={checkIsValid("email")}
          />
          <InputField
            type={passwordType ? "password" : "text"}
            id="password"
            label="Password"
            placeholder="Enter Password"
            endIcon={
              passwordType ? (
                <AiOutlineEye onClick={() => setPasswordType(false)} />
              ) : (
                <AiOutlineEyeInvisible onClick={() => setPasswordType(true)} />
              )
            }
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.password}
            status={checkIsValid("password")}
          />
          <Link href="/forgot-password">
            <small>
              <strong>Forgot password?</strong>
            </small>
          </Link>
          <Button type="button" $fullWidth>
            Log In
          </Button>
          <div style={{ textAlign: "center" }}>
            <small>
              <strong>New to Taskify? </strong>
              <Link href="/register">Sign Up here</Link>
            </small>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};

export default LoginForm;
