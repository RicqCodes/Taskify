import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "@/components/common/Button";
import { FluidTitle } from "@/styles/element.styled";

const AuthHeader = ({ title }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <FluidTitle>{title}</FluidTitle>
      </div>
      <Fieldset>
        <legend>Register with email</legend>
      </Fieldset>
    </>
  );
};

AuthHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AuthHeader;

const Fieldset = styled.fieldset`
  border-bottom: none;
  border-right: none;
  border-left: none;
  border-top: 1px solid lightgrey;
  text-align: center;

  legend {
    padding: 0 16px;
  }
`;
