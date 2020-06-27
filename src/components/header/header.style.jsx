import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 10px 10px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 50px;
  width: 50px;
  padding: 25px 0;
  margin-left: 20px;

  @media screen and (max-width: 800px) {
    padding: 0;
    width: 50px;
    margin: 0;
  }
`;

export const OptionContainer = styled.div`
  padding: 20px;
  padding-right: 40px;
  width: 50%;
  height: 100%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    padding: 5px;
    padding-top: 15px;
    font-size: 10px;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
