import React from "react";
import { findUniversityById } from "../../back-end-mocks/helpers";
import {
  HeaderContainer,
  TextWrapper,
  HeaderTitle,
  ItemListContainer,
} from "./university.styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { items, notes, modules } from "../../back-end-mocks/university";
import ItemList from "../../components/item-list/item-list";
import { listItemsType } from "../../constants/list-item-types";

const University = ({ match }) => {
  const university = findUniversityById(match.params.id);
  return (
    <>
      <HeaderContainer
        style={{
          backgroundImage: `url(${university[0].imgUrl})`,
        }}
      >
        <TextWrapper>
          <HeaderTitle>{university[0].name}</HeaderTitle>
          <div style={{ marginTop: "40px" }}>
            <ReactSearchAutocomplete
              placeholder="Search a course in this university and find notes about it"
              items={items}
              autoFocus
              onSelect={() => {}}
            />
          </div>
        </TextWrapper>
      </HeaderContainer>
      <ItemListContainer>
        <ItemList
          title={"MOST POPULAR MODULES"}
          items={notes}
          type={listItemsType.DOCUMENT}
        />
        <ItemList
          title={"MOST POPULAR DOCUMENTS"}
          items={modules}
          type={listItemsType.MODULE}
        />
      </ItemListContainer>
    </>
  );
};

export default University;
