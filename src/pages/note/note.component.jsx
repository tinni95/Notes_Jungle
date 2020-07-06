import React, { useState } from "react";
import { findNoteById } from "../../back-end-mocks/helpers";
import { PDFReader } from "reactjs-pdf-reader";
import {
  SubTitle,
  LinearGradient,
  PDFContainer,
  DetailsTab,
  Title,
  MainTitle,
  CloseButton,
  DetailsBar,
  OpenButton,
} from "./note.styles";

const NotePage = ({ match }) => {
  const [detailsTab, setDetailsTab] = useState(true);
  const note = findNoteById(match.params.id);
  function toggleDetailsTab() {
    setDetailsTab(!detailsTab);
  }

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        display: "flex",
        background: "#F2F3F5",
      }}
    >
      {detailsTab ? (
        <DetailsTab>
          <CloseButton
            onClick={toggleDetailsTab}
            src="https://img.icons8.com/material-rounded/52/000000/double-right.png"
          />
          <MainTitle>{note.title}</MainTitle>
          <LinearGradient />
          <SubTitle>University</SubTitle>
          <Title>{note.university.name}</Title>
          <LinearGradient />
          <SubTitle>Module</SubTitle>
          <Title>{note.module.title}</Title>
          <LinearGradient />
          <SubTitle>Year</SubTitle>
          <Title>{note.year}</Title>
        </DetailsTab>
      ) : (
        <DetailsBar>
          <OpenButton
            onClick={toggleDetailsTab}
            src="https://img.icons8.com/material-rounded/52/000000/double-right.png"
          />
        </DetailsBar>
      )}
      <PDFContainer>
        <PDFReader url="http://localhost:3000/test.pdf" />
      </PDFContainer>
    </div>
  );
};

export default NotePage;
