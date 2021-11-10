import React from "react";
import { Link, useLocation } from "react-router-dom";

// Antd
import { ArrowLeftOutlined } from "@ant-design/icons";

// Components
import FixedRateContainer from "../containers/FixedRateContainer";
import VariableRateContainer from "../containers/VariableRateContainer";
import InfoForm from "../infoForm/InfoForm";

// Recoil
import { useRecoilValue } from "recoil";
import { currentApplicationAtom } from "../../atoms/currentApplicationAtom";

// Styles
import * as S from "./InputForm.styles";

const InputForm = () => {
  // Product selected via Link
  const location = useLocation();
  const { productSelected } = location.state;

  // Current application selected via recoil value
  const currentApplication = useRecoilValue(currentApplicationAtom);

  return (
    <S.InputFormContainer>
      <S.NameContainer>Hello, Yiqi</S.NameContainer>
      <S.SubTitleContainer>We'll need some information:</S.SubTitleContainer>
      {/* Form Component */}
      <InfoForm currentApplication={currentApplication} />
      <S.SelectedApplicationContainer>
        <S.SubTitleContainer>Your selected application:</S.SubTitleContainer>
        {/* Render Fixed or Variable component based on location state */}
        {productSelected.type === "FIXED" ? (
          <FixedRateContainer
            applied={true}
            editing={true}
            product={productSelected}
          />
        ) : productSelected.type === "VARIABLE" ? (
          <VariableRateContainer
            applied={true}
            editing={true}
            product={productSelected}
          />
        ) : null}
        <Link to="/">
          <S.BackButton>
            <S.ButtonText>Back</S.ButtonText>
            <ArrowLeftOutlined />{" "}
          </S.BackButton>
        </Link>
      </S.SelectedApplicationContainer>
    </S.InputFormContainer>
  );
};

export default InputForm;
