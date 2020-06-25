import React from "react";
import {
  HeaderText,
  TextWrapper,
  HeaderContainer,
  HeaderTitle,
} from "./homepage.style";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const Home = () => (
  <HeaderContainer>
    <TextWrapper>
      <HeaderTitle>Notes Jungle</HeaderTitle>
      <HeaderText>
        The internet source for freely-downloadable notes Powered from students
        in UK universities.
      </HeaderText>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={["a", "b"]}
        onChange={(event, newValue) => {}}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Cerca input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </TextWrapper>
  </HeaderContainer>
);

export default Home;
