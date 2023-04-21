import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import AuthHeader from "../../_molecules/auth/AuthHeader";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

import { useLoginMutation } from "@/redux/api/childApi/authApi";
import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "../validation";
import { useRouter } from "next/router";
import useAuthProtection from "@/utils/hooks/useAuthProtection";

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuthProtection();
  const [login, { isLoading }] = useLoginMutation();

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

    if (!validateOnSubmit()) {
      return;
    }

    await toast.promise(login(formData).unwrap(), {
      loading: "Logging you in any second now....",
      success: (response) => {
        return "Logged in successfully!";
      },
      error: (response) => response.message,
    });
  };

  useEffect(() => {
    if (isAuthenticated) router.push("/user/dashboard");
  }, [isAuthenticated]);

  return (
    <>
      <AuthContainer>
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <Link href="/forgot-password">
            <small>
              <strong>Forgot password?</strong>
            </small>
          </Link>
          <Button type="submit" $fullWidth>
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
