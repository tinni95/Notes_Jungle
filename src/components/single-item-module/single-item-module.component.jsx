import React from "react";
import {
  ItemContainer,
  IconContainer,
  ItemTitle,
  TitleCodeContainer,
  ItemCode,
} from "./single-item-module.styles";
import { ReactComponent as ModuleIcon } from "../../assets/directory.svg";

const ItemModule = ({ title, code }) => (
  <ItemContainer>
    <IconContainer>
      <ModuleIcon />
    </IconContainer>
    <TitleCodeContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemCode>{code}</ItemCode>
    </TitleCodeContainer>
  </ItemContainer>
);

export default ItemModule;
