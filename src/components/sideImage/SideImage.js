import React from "react";

// Antd
import { Tooltip } from "antd";

// Styles
import * as S from "./SideImage.styles";

const SideImage = ({ isHome }) => {
  return (
    <S.SideImageContainer>
      <Tooltip title="Images courtesy of Damian Orellana.">
        <S.Image isHome={isHome} />
      </Tooltip>
    </S.SideImageContainer>
  );
};

export default SideImage;
