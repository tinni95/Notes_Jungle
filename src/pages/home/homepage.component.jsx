import React from "react";
import {
  HeaderText,
  TextWrapper,
  HeaderContainer,
  HeaderTitle,
} from "./homepage.style";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const items = [
  {
    id: 0,
    name: "Cobol",
  },
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "Basic",
  },
  {
    id: 3,
    name: "PHP",
  },
  {
    id: 4,
    name: "Java",
  },
];

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
        />
      </div>
    </TextWrapper>
  </HeaderContainer>
);

export default Home;
