import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  background-size: cover;
  height: 550px;
  text-align: center;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  text-align: center;
  min-width: 500px;
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 50px;
  }
`;

const titleStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue,
    Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
  font-weight: Bold;
  font-size: 60px;
  color: white;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 80px;
`;

export const HeaderTitle = styled.div`
  ${titleStyle}
  font-size: 60px;
`;

export const HeaderText = styled.div`
  ${titleStyle}
  font-weight:bold;
  margin-top: 20px;
  font-size: 20px;
`;
