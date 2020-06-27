import React from "react";
import {
  ItemTitle,
  ItemListWrapper,
  ItemListContainer,
  LinearGradient,
} from "./item-list.styles";
import { listItemsType } from "../../constants/list-item-types";
import ItemModule from "../single-item-module/single-item-module.component";
import ItemDocument from "../single-item-document/single-item-document.component";

const ItemList = ({ title, items, type }) => {
  switch (type) {
    case listItemsType.MODULE:
      return (
        <ItemListWrapper>
          <ItemTitle>{title}</ItemTitle>
          <LinearGradient style={{ marginBottom: "10px" }} />
          <ItemListContainer>
            {items.map(({ title, code }) => {
              return (
                <>
                  <ItemModule key={code} title={title} code={code} />
                  <LinearGradient />
                </>
              );
            })}
          </ItemListContainer>
        </ItemListWrapper>
      );
    case listItemsType.DOCUMENT:
      return (
        <ItemListWrapper>
          <ItemTitle>{title}</ItemTitle>
          <LinearGradient style={{ marginBottom: "10px" }} />
          <ItemListContainer>
            {items.map(({ title }) => {
              return (
                <>
                  <ItemDocument key={title} title={title} />
                  <LinearGradient />
                </>
              );
            })}
          </ItemListContainer>
          <LinearGradient />
        </ItemListWrapper>
      );
  }
};

export default ItemList;
