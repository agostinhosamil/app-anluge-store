import styled from "styled-components";

type ButtonsHeight = "auto" | number;

type BodyProps = {
  $buttonsHeight?: ButtonsHeight;
};

const resolveButtonsHeight = (buttonsHeight: ButtonsHeight): string => {
  if (typeof buttonsHeight === "string") {
    return buttonsHeight;
  }

  return `${buttonsHeight}px`;
};

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`;

export const Body = styled.div<BodyProps>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    padding: 5px;
    width: 50%;

    a,
    button {
      height: ${(props) =>
        resolveButtonsHeight(props.$buttonsHeight || "auto")};
    }
  }
`;

export const ButtonWrapper = styled.div`
  width: 50%;
  padding: 5px;

  a,
  button {
    width: 100%;
    background-color: #d2d2d2;
    padding: 15px 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    color: #222222;
    text-align: center;

    &:hover {
      background-color: #b2b1b1;
      transform: scale(1.028);
    }

    &:active {
      background-color: #acacac;
      transform: scale(0.9723);
    }
  }
`;

export const ButtonElement = styled.button`
  border: 0px;
  outline: 0px;
  cursor: pointer;
`;
