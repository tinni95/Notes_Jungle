import styled, { css } from "styled-components";

export const PDFContainer = styled.div`
  flex: 2;
  overflow: scroll;
  padding: 20px;
  margin-right: 10px;
  height: 700px;
`;

export const DetailsTab = styled.div`
  flex: 0.8;
  overflow: scroll;
  height: 100vh;
  background-color: white;
  border: 1px solid #f2f3f5;
  padding: 10px;
`;

export const DetailsBar = styled.div`
  flex: 0.05;
  overflow: scroll;
  height: 100vh;
  background-color: white;
  border: 1px solid #f2f3f5;
  padding: 10px;
`;

export const LinearGradient = styled.div`
  height: 1px;
  background: linear-gradient(to right, #ebebeb, #fffdfd);
`;

export const SubTitle = styled.p`
  color: #969798;
`;

export const Title = styled.p`
  font-size: 18px;
  color: #3965ba;
`;

export const MainTitle = styled.h1`
  font-size: 26px;
  margin-top: 30px;
`;

export const CloseButton = styled.img`
  position: relative;
  height: 22px;
  float: right;
  cursor: pointer;
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
`;

export const OpenButton = styled.img`
  position: relative;
  height: 22px;
  float: right;
  cursor: pointer;
`;
