import React from "react";
import { ItemTitle, ItemListContainer } from "./item-list.styles";
import { listItemsType } from "../../constants/list-item-types";
import ItemModule from "../single-item-module/single-item-module.component";
import ItemDocument from "../single-item-document/single-item-document.component";

const ItemList = ({ title, items, type }) => {
  switch (type) {
    case listItemsType.MODULE:
      return (
        <>
          <ItemTitle>{title}</ItemTitle>
          <ItemListContainer>
            {items.map(({ title, code }) => {
              return <ItemModule key={code} title={title} code={code} />;
            })}
          </ItemListContainer>
        </>
      );
    case listItemsType.DOCUMENT:
      return (
        <>
          <ItemTitle>{title}</ItemTitle>
          <ItemListContainer>
            {items.map(({ title }) => {
              return <ItemDocument key={title} title={title} />;
            })}
          </ItemListContainer>
        </>
      );
  }
};

export default ItemList;
