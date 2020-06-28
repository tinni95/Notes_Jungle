import React from "react";
import {
  HeaderText,
  TextWrapper,
  HeaderContainer,
  HeaderTitle,
} from "./homepage.style";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { items } from "../../back-end-mocks/university";

/**
 * Universities {
 * title
 * id
 * }
 *
 */

const Home = ({ history }) => (
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
          onSelect={(item) => history.push(`/university/${item.id}`)}
        />
      </div>
    </TextWrapper>
  </HeaderContainer>
);

export default Home;
