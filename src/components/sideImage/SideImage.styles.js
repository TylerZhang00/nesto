import styled from "styled-components";

// Assets
import formimage from "../../assets/formimage.png";
import homeimage from "../../assets/homeimage.png";

export const SideImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Image = styled.div`
  background-image: ${(props) =>
    props.isHome ? `url(${homeimage})` : `url(${formimage})`};
  background-size: cover;
  position: fixed;
  width: 40%;
  height: 50%;
  padding: 2rem;
  @media screen and (min-width: 1600px) {
    width: 35%;
  }
  @media screen and (max-height: 500px) {
    display: none;
  }
`;
