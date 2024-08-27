import styled from 'styled-components'

export const Container = styled.li`
  width: 360px /* calc(100% / 3) */;
  height: 220px;
  padding: 8px;
  margin-right: 12px;

  a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
  }

  /* @media (min-width: 2000px) {
    width: 25%;
  }

  @media (min-width: 2800px) {
    width: 20%;
  }

  @media (min-width: 3500px) {
    width: calc(100% / 6);
  }

  @media (min-width: 4500px) {
    width: calc(100% / 7);
  }

  @media (min-width: 5500px) {
    width: calc(100% / 8);
  }

  @media (min-width: 6500px) {
    width: calc(100% / 9);
  }

  @media (max-width: 1100px) {
    width: 50%;
  }

  @media (max-width: 690px) {
    width: 100%;
  } */
`

export const CategoryCardBody = styled.div`
  width: 360px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background.v100};
  border-radius: 8px;
  -webkit-border-radius: 8px;
`

export const CategoryDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    background-image: linear-gradient(359deg, rgb(0 0 0 / 80%), transparent);
    background-image: -webkit-linear-gradient(
      89deg,
      rgb(0 0 0 / 80%),
      transparent
    );
    border-radius: 8px;
    -webkit-border-radius: 8px;
  }

  div {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-repeat: no-repeat;
    height: 100%;
    background-position: center;
    background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    border-radius: 8px;
  }

  data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    z-index: 1;

    h1,
    p {
      width: 100%;
      color: #ffffff;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    h1 {
      font-size: 17px;
      line-height: 16px;
      -webkit-line-clamp: 2;
    }

    p {
      font-size: 13px;
      font-weight: 300;
      line-height: 12px;
      margin: 0px;
      padding: 12px 0px 0px;
      -webkit-line-clamp: 4;
      max-height: 60px;
    }
  }
`
