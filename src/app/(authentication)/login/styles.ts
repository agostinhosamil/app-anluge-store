import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
    height: auto;

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px 0px 0px;

      li {
        margin: 6px;

        a {
          color: #0150bf;
          font-size: 13px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 27px;
  font-weight: 300;
  color: #404040;
  padding: 0px 0px 25px;
`;

export const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 12px;

  button {
    width: 100%;
    padding: 15px 10px;
  }
`;
