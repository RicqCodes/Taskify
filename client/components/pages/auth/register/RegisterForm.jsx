import { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import AuthHeader from "../../_molecules/auth/AuthHeader";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "../validation";

import { useRegisterMutation } from "@/utils/redux/api/childApi/authApi";
import { toast } from "react-hot-toast";

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState(true);

  const [register, { isLoading }] = useRegisterMutation();

  const initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const {
    formData,
    errors,
    handleBlur,
    handleChange,
    checkIsValid,
    validateOnSubmit,
  } = useFormValidation(initialData, validation);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call API to register account
    const registerAccount = validateOnSubmit() && register(formData);

    // Use Promise Toast to show users account is being created
    toast.promise(registerAccount, {
      loading: "Creating your account...",
      success: <b>Account created</b>,
      error: <b>Could not create account.</b>,
    });
  };

  return (
    <>
      <AuthContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
          <AuthHeader title="Let's get you started" />
          <InputField
            type="text"
            id="name"
            label="Name"
            placeholder="Enter your name"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.name}
            status={checkIsValid("name")}
            maxLength="50"
          />
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
            endAdornment={
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
          <InputField
            type={passwordType ? "password" : "text"}
            id="confirmPassword"
            label="Confirm Password"
            placeholder="Enter Confirm Password"
            endAdornment={
              passwordType ? (
                <AiOutlineEye onClick={() => setPasswordType(false)} />
              ) : (
                <AiOutlineEyeInvisible onClick={() => setPasswordType(true)} />
              )
            }
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.confirmPassword}
            status={checkIsValid("confirmPassword")}
          />
          <Button type="submit" $fullWidth>
            Register
          </Button>
          <div style={{ textAlign: "center" }}>
            <small>
              By continuing, you’re agreeing to our
              <strong> Terms of services</strong> and
              <strong> Privacy policy</strong>
              <br />
              <br />
            </small>
            <small>
              <strong>Already have an account? </strong>
              <Link href="/login">Sign In here</Link>
            </small>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};

export default SignUpForm;
