import React from "react";

// Components
import Mortgages from "../../components/mortgages/Mortgages";
import SideImage from "../../components/sideImage/SideImage";

// Styles
import * as S from "./Home.styles";

const Home = () => {
  return (
    <S.HomeContainer>
      <Mortgages />
      <SideImage isHome={true} />
    </S.HomeContainer>
  );
};

export default Home;
