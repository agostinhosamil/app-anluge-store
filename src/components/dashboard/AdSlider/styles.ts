import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 380px;
  background-color: #e2e2e2;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  border-radius: inherit;
  -webkit-border-radius: inherit;
`;

export const ImageElement = styled(ImageWrapper)`
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 0% 0%;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0px;
  left: 0px;
  width: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 30px;

    li {
      width: 24px;
      height: 24px;
      margin: 0px 4px;

      i {
        display: block;
        width: inherit;
        height: inherit;
        border: 3px solid #ffffff;
        border-radius: 50%;
        -webkit-border-radius: 50%;
      }

      i.filled-indicator {
        background-color: #ffffff;
      }
    }
  }
`;
