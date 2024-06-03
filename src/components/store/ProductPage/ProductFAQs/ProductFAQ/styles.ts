import styled from "styled-components";

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;

  strong {
    display: block;
    border-left: 1px solid #c0c0c0;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    padding: 12px 15px;

    &:hover {
      background-color: #f3f3f3;
    }

    &:active {
      background-color: #e6e6e6;
    }
  }

  p {
    display: block;
    padding: 15px 0px 15px 15px;
    font-size: 14px;
    color: #7c7a7c;
    font-weight: 400;
  }
`;
