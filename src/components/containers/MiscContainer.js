import React from "react";

// Styles
import * as S from "./containers.styles";

const MiscContainer = ({ numOfApplications }) => {
  return (
    <S.IndividualMortgageContainer>
      {numOfApplications === 0 ? (
        <S.TextContainer>
          <S.MiscTitleContainer>
            It looks like you don't have any aplications yet.
          </S.MiscTitleContainer>
          <div style={{ fontWeight: "bold", paddingTop: "1rem" }}>
            Select a product below to get started.
          </div>
        </S.TextContainer>
      ) : numOfApplications === 1 ? (
        <S.TextContainer>
          <S.MiscTitleContainer>
            If there are new mortgage products available with <b> lower </b>{" "}
            rates, you’ll be the <b>first </b> to know.
          </S.MiscTitleContainer>
        </S.TextContainer>
      ) : (
        <S.TextContainer>
          <S.MiscTitleContainer style={{ paddingBottom: "8px" }}>
            <b>Congratulations!</b> You’ve already applied to the <b>lowest</b>{" "}
            mortgage rates in Canada!
          </S.MiscTitleContainer>
          <S.MiscTitleContainer>
            If there are new mortgage products available with <b> lower </b>{" "}
            rates, you’ll be the <b>first </b> to know.
          </S.MiscTitleContainer>
        </S.TextContainer>
      )}
    </S.IndividualMortgageContainer>
  );
};

export default MiscContainer;
