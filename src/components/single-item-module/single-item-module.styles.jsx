import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;
export const IconContainer = styled.div`
  width: 15px;
  height: 15px;
`;

export const ItemTitle = styled.a`
  padding-left: 6px;
  padding-top: 2.5px;
`;

export const ItemCode = styled.a`
  padding-left: 6px;
  padding-top: 2.5px;
  font-weight: bold;
`;

export const TitleCodeContainer = styled.div``;
