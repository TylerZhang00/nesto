import React from "react";

// Components
import InputForm from "../../components/inputForm/InputForm";
import SideImage from "../../components/sideImage/SideImage.js";

// Styles
import * as S from "./Form.styles";

const Form = () => {
  return (
    <S.FormContainer>
      <InputForm />
      <SideImage />
    </S.FormContainer>
  );
};

export default Form;
