import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://i.ibb.co/d5CMMPG/Mask-Min-X2.png");
  background-size: cover;
  height: 550px;
  text-align: center;
  background-position: left;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 50%;
  text-align: left;
`;

const titleStyle = css`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue,
    Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
  font-weight: Bold;
  font-size: 60px;
  color: white;
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
