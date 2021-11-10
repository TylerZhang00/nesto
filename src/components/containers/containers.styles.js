import styled from "styled-components";
import { Button as ButtonBase } from "antd";

export const IndividualMortgageContainer = styled.div`
  min-height: 180px;
  height: 23%;
  width: ${(props) => (props.editing ? "auto" : "85%")};
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 12px 1rem;
  padding: 1.5rem 2rem;
  border-radius: 24px;
  background: ${(props) =>
    props.variable ? `#3D66B0` : props.fixed ? `#FF817B` : `#f5f3f3`};
  color: ${(props) =>
    props.variable ? `#F5F3F3` : props.fixed ? `#F5F3F3` : `#212243`};
`;

export const TextContainer = styled.div`
  width: 100%;
  font-size: 18px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const InterestText = styled.div`
  padding-top: 1rem;
  font-size: 32px;
  font-weight: bold;
  @media screen and (max-width: 600px) {
    padding-top: 4px;
  }
`;

export const ProductText = styled.div`
  padding-bottom: 1rem;
  font-size: 14px;
  font-weight: bold;
`;

export const LenderText = styled.div`
  font-size: 14px;
  /* font-weight: bold; */
`;

export const NextButton = styled(ButtonBase)`
  display: flex;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 0;
  width: 125px;
  height: 35px;
  padding: 8px 20px;
  margin: 0 1rem 1rem 0;
  color: ${(props) => (!props.apply ? "#212243" : "#ffffff")};
  border: none;
  border-radius: 30px;
  background: ${(props) => (!props.apply ? "#FFFF95" : "#f9423a")};
  font-size: 14px;
  font-weight: bold;
  align-self: center;
  z-index: 1;

  &:hover {
    opacity: 1;
    background: ${(props) => (!props.apply ? "#212243" : "#FFFFFF")};
    color: ${(props) => (!props.apply ? "#FFFF95" : "#f9423a")};
    border-color: ${(props) => (!props.apply ? "#212243" : "#f9423a")};
  }
  &:focus {
    background: ${(props) => (!props.apply ? "#212243" : "#FFFFFF")};
    color: ${(props) => (!props.apply ? "#FFFF95" : "#f9423a")};
    border-color: ${(props) => (!props.apply ? "#212243" : "#f9423a")};
  }
  @media screen and (max-width: 600px) {
    width: 80px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const VerifiedIconContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  cursor: help;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  padding: 8px 1rem;
`;

export const ModalBody = styled.div`
  font-size: 14px;
  padding: 0px 1rem;
`;

export const MiscTitleContainer = styled.div`
  width: 45%;
  @media screen and (max-height: 1000px) {
    width: auto;
  }
`;

export const ButtonText = styled.div`
  display: flex;
  margin-right: 8px;
  @media screen and (max-width: 600px) {
    display: none;
    margin-right: none;
  }
`;
