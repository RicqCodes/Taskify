import { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import AuthHeader from "../../_molecules/auth/AuthHeader";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";

import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "../validation";

import { useRegisterMutation } from "@/redux/api/childApi/authApi";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import useAuthProtection from "@/utils/hooks/useAuthProtection";

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState(true);
  const router = useRouter();
  const { isAuthenticated } = useAuthProtection();
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call API to register account
    if (!validateOnSubmit()) {
      return;
    }

    useEffect(() => {
      if (isAuthenticated) router.push("/user/dashboard");
    }, [isAuthenticated]);

    // Use Promise Toast to show users account is being created
    await toast.promise(register(formData).unwrap(), {
      loading: "Creating your account...",
      success: (response) => {
        return "Account Created Sucessfully";
      },
      error: (response) => {
        return response.message;
      },
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
