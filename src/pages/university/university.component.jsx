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

/**
 * University(id) {
 * title
 * modules{
 * code
 * title
 * }
 * notes{
 * title
 * }
 * }
 *
 */

const University = ({ match, history }) => {
  const university = findUniversityById(match.params.id);
  console.log(university);
  return (
    <>
      <HeaderContainer
        style={{
          backgroundImage: `url(${university.imgUrl})`,
        }}
      >
        <TextWrapper>
          <HeaderTitle>{university.name}</HeaderTitle>
          <div style={{ marginTop: "40px" }}>
            <ReactSearchAutocomplete
              placeholder="Search a course in this university and find notes about it"
              items={modules.map((module) => {
                return {
                  name: module.title,
                };
              })}
              autoFocus
              onSelect={(module) => history.push(`/module/${module.id}`)}
            />
          </div>
        </TextWrapper>
      </HeaderContainer>
      <ItemListContainer>
        <ItemList
          title={"MOST POPULAR MODULES"}
          items={modules}
          type={listItemsType.DOCUMENT}
        />
        <ItemList
          onPress={() => console.log("click")}
          title={"MOST POPULAR DOCUMENTS"}
          items={notes}
          type={listItemsType.MODULE}
        />
      </ItemListContainer>
    </>
  );
};

export default University;
