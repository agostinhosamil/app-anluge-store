import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export const ViewListButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 5px 0px 15px;

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
`;
