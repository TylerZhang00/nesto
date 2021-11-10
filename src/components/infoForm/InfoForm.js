import React from "react";
import { useNavigate } from "react-router-dom";

// Hooks
import usePutApplication from "../../hooks/UsePutApplication";

// Styles
import * as S from "./InfoForm.styles";

const InfoForm = ({ currentApplication }) => {
  const navigate = useNavigate();
  const { updateMortgageApplication } = usePutApplication();

  // 1: Create user input object,
  // 2: Spread & update applications object
  // 3: Send update request to server
  // 4: Navigate to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = {
      applicants: [
        {
          firstName: e.target[0].value,
          lastName: e.target[1].value,
          email: e.target[2].value,
          phone: e.target[3].value,
        },
      ],
    };
    currentApplication = {
      ...currentApplication,
      ...userInput,
    };
    updateMortgageApplication(currentApplication);
    navigate({ pathname: "/" });
  };

  return (
    <S.InfoFormContainer>
      <form onSubmit={handleSubmit}>
        <S.Label htmlFor="fname">First Name</S.Label>
        <S.UserInput
          id="fname"
          name="firstname"
          placeholder="Your name"
          required="required"
          type="text"
        ></S.UserInput>
        <S.Label htmlFor="lname">Last Name</S.Label>
        <S.UserInput
          id="lname"
          name="lastname"
          placeholder="Your last name"
          required="required"
          type="text"
        ></S.UserInput>
        <S.Label htmlFor="mail">Email</S.Label>
        <S.UserInput
          id="mail"
          name="email"
          placeholder="Your email address"
          required="required"
          type="text"
        ></S.UserInput>
        <S.Label htmlFor="number">Phone</S.Label>
        <S.UserInput
          id="number"
          name="phonenumber"
          placeholder="Your phone number"
          required="required"
          type="text"
        ></S.UserInput>
        <S.SubmitInput type="submit" value="Save Application"></S.SubmitInput>
      </form>
    </S.InfoFormContainer>
  );
};

export default InfoForm;
