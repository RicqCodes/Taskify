import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useResetPasswordMutation } from "@/redux/api/childApi/authApi";
import useFormValidation from "@/utils/hooks/useFormValidation";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import { validation } from "../validation";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";
import { FluidTitle } from "@/styles/element.styled";
import { Loader } from "@/styles/utils.styled";
import { toast } from "react-hot-toast";

const ResetPasswordForm = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();
  const { token, email } = router.query;
  const [passwordType, setPasswordType] = useState(true);
  const initialData = {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateOnSubmit();

    await toast.promise(resetPassword({ token, email, ...formData }).unwrap(), {
      loading: "Resetting your password...",
      success: (res) => res.message,
      error: (err) => err.message,
    });

    router.push("/login");
  };

  return (
    <>
      <AuthContainer>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <FluidTitle style={{ textAlign: "center" }}>
            Reset Password
          </FluidTitle>

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
            placeholder="Confirm Password"
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
            status={checkIsValid("confirm_password")}
          />
          {/* <Button $fullWidth>{loading ? <Loader /> : "Reset Password"}</Button> */}
          <Button $fullWidth>Reset Password</Button>
          <center>
            <strong>
              <Link href="/login">Click here to Login</Link>
            </strong>
          </center>
        </form>
      </AuthContainer>
    </>
  );
};

export default ResetPasswordForm;
