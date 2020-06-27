import React from "react";
import { findUniversityById } from "../../back-end-mocks/helpers";
import { HeaderContainer, TextWrapper, HeaderTitle } from "./university.styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { items } from "../../back-end-mocks/university";

const University = ({ match }) => {
  const university = findUniversityById(match.params.id);
  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${university[0].imgUrl})`,
      }}
    >
      <TextWrapper>
        <HeaderTitle>{university[0].name}</HeaderTitle>
        <div style={{ marginTop: "40px" }}>
          <ReactSearchAutocomplete
            placeholder="find your note"
            items={items}
            autoFocus
            onSelect={() => {}}
          />
        </div>
      </TextWrapper>
    </HeaderContainer>
  );
};

export default University;
