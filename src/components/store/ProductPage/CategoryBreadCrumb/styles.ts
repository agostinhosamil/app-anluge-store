import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0px 0px 20px;

  span {
    font-size: 13px;
    color: #a0a0a0;

    i {
      display: inline-block;
      padding: 0px 6px;
    }

    i:nth-child(1) {
      padding: 0px 6px 0px 0px;
    }
  }
`;
