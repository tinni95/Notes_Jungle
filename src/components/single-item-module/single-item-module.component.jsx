import React from "react";
import {
  ItemContainer,
  IconContainer,
  ItemTitle,
} from "./single-item-module.styles";
import { ReactComponent as DocIcon } from "../../assets/logo.svg";

const ItemModule = ({ title }) => (
  <ItemContainer>
    <IconContainer>
      <DocIcon />
    </IconContainer>
    <ItemTitle>{title}</ItemTitle>
  </ItemContainer>
);

export default ItemModule;
