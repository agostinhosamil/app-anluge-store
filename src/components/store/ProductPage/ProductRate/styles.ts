import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const HeadWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    -webkit-border-radius: 50%;

    img {
      width: 45px;
      height: 45px;
      border-radius: inherit;
      -webkit-border-radius: inherit;
    }
  }

  data {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-left: 15px;

    strong {
      font-weight: 600;
      font-size: 19px;
      color: #404040;
    }

    div.rate-stats-data {
      width: 100%;
      display: flex;
      flex-direction: row;

      div.rate-star-rating-element-wrapper {
        display: inline-flex;
        align-items: center;
      }

      span {
        display: inline-flex;
        padding-left: 20px;
        margin-left: 12px;
        position: relative;
        color: #b0b0b0;

        &:before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          -webkit-border-radius: 50%;
          background-color: #b0b0b0;
          position: absolute;
          left: 0px;
          top: calc(50% - 4px);
        }
      }
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px;
  display: block;

  p {
    width: 100%;
    display: block;
    padding: 15px 0px;
    color: #7c7c7c;
    margin: 0px;
  }
`;

export const RateMediasContainer = styled.div``;

export const RateMediasList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

export const RateMediasListItem = styled.div``;

type RateMediaImageProps = {
  $src: string;
  $size?: "large" | "normal";
};

export const RateMediaImage = styled.div.attrs<RateMediaImageProps>(
  (props) => ({
    style: {
      backgroundImage: `url(${props.$src})`,
    },
  }),
)`
  width: ${(props) => (props.$size === "large" ? 100 : 50)}%;
  height: ${(props) => (props.$size === "large" ? 170 : 110)}px;
  background-color: #bfbfbf;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  border-radius: 12px;
  -webkit-border-radius: 12px;
  border: 3px solid #ffffff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }
`;
