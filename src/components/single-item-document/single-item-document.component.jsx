import React from "react";
import {
  ItemContainer,
  IconContainer,
  ItemTitle,
} from "./single-item-document.styles";
import { ReactComponent as DocIcon } from "../../assets/document.svg";

const ItemDocument = ({ title }) => (
  <ItemContainer>
    <IconContainer>
      <DocIcon />
    </IconContainer>
    <ItemTitle>{title}</ItemTitle>
  </ItemContainer>
);

export default ItemDocument;
