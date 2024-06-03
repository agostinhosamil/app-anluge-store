import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ol`
  width: 100%;
  padding-bottom: 10px;
`;

export const ViewListButtonWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px 0px 15px;
  margin: 0px;

  li {
    display: inline-flex;
    padding-left: 14px;
    border-left: 1px solid #a0a0a0;
    margin-left: 14px;

    &:nth-child(1) {
      border-left: unset;
      margin-left: unset;
      padding-left: unset;
    }

    button {
      background-color: transparent;
      border: 0px;
      outline: 0px;
      color: #303030;
      font-size: 14px;
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
