import styled from "styled-components";
import { Button as ButtonBase } from "antd";

export const InputFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0rem 4rem;
`;

export const NameContainer = styled.div`
  width: 90%;
  padding: 2rem 1rem 2px 1rem;
  font-size: 36px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const SubTitleContainer = styled.div`
  width: 90%;
  padding: 4px 2px 2px 1rem;
  font-size: 18px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const BackButton = styled(ButtonBase)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  width: 150px;
  height: 50px;
  padding: 8px 20px;
  margin: 8px 1rem;
  color: #212243;
  border: none;
  border-radius: 30px;
  background: #ffff95;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;

  &:hover {
    opacity: 1;
    background: #212243;
    color: #ffff95;
    border-color: #212243;
  }
  &:focus {
    background: #212243;
    color: #ffff95;
    border-color: #212243;
  }
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 35px;
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

export const SelectedApplicationContainer = styled.div`
  height: 20%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;
