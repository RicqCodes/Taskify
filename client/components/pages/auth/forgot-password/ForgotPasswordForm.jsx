import styled from "styled-components";
import Link from "next/link";

import { useForgotPasswordMutation } from "@/redux/api/childApi/authApi";

import AuthContainer from "../../_molecules/auth/AuthContainer";
import AuthTitle from "../../_molecules/auth/AuthTitle";
import InputField from "@/components/common/InputField";
import Button from "@/components/common/Button";
import useFormValidation from "@/utils/hooks/useFormValidation";
import { validation } from "../validation";
import { FluidTitle } from "@/styles/element.styled";
import { toast } from "react-hot-toast";

const ForgotPasswordForm = () => {
  const initialData = {
    email: "",
  };

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

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

    await toast.promise(forgotPassword(formData).unwrap(), {
      loading: "Generating email...",
      success: (res) => {
        return res.message;
      },
      error: (err) => {
        return err.message;
      },
    });
  };

  return (
    <>
      <AuthContainer>
        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <FluidTitle>Forgot password?</FluidTitle>
          <Message>
            Input the email address to your account and we will send you a
            password reset link.
          </Message>
          <InputField
            type="email"
            id="email"
            label="Email address"
            placeholder="johndoe@example.com"
            onBlur={(e) => handleBlur(e)}
            onChange={(e) => handleChange(e)}
            helperText={errors.email}
            status={checkIsValid("email")}
          />
          <Button $fullWidth type="submit">
            {/* {loading ? <Loader /> : "Send password reset link"} */}
            Send password reset link
          </Button>
          <div style={{ textAlign: "center" }}>
            <small>
              <strong>Remember password?</strong>
              <Link href="/login"> Sign in here</Link>
            </small>
          </div>
        </form>
      </AuthContainer>
    </>
  );
};

export default ForgotPasswordForm;

const FormElement = styled.form``;

const Message = styled.span`
  color: #4b4b4b;
`;
