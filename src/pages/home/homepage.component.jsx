import React from "react";
import {
  HeaderText,
  TextWrapper,
  HeaderContainer,
  HeaderTitle,
} from "./homepage.style";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { items } from "../../back-end-mocks/university";
const handleOnSelect = (item) => {
  // the item selected
  console.log(item);
};

const Home = () => (
  <HeaderContainer>
    <TextWrapper>
      <HeaderTitle>Notes Jungle</HeaderTitle>
      <HeaderText>
        The internet source for freely-downloadable notes Powered from students
        in UK universities.
      </HeaderText>
      <div style={{ marginTop: "20px" }}>
        <ReactSearchAutocomplete
          placeholder="find your university"
          items={items}
          autoFocus
          onSelect={handleOnSelect}
        />
      </div>
    </TextWrapper>
  </HeaderContainer>
);

export default Home;
