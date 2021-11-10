import styled from "styled-components";

export const InfoFormContainer = styled.div`
  width: 85%;
  border-radius: 24px;
  background-color: #f5f3f3;
  padding: 1rem 2rem;
  margin-bottom: 8px;
`;

export const UserInput = styled.input`
  width: 100%;
  padding: 6px 1rem;
  margin: 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 12px;
`;

export const SubmitInput = styled.input`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 8px 12px;
  margin: 8px 0;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: bold;

  :hover {
    opacity: 1;
    background-color: #0b8011;
  }
  :focus {
    background-color: #0b8011;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;
