import styled from 'styled-components'

type StarWrapperProps = {
  $starRatingAverage: number
  $starIndex: number
  $size: 'default' | 'small' | 'large' | 'x-large'
}

const starRatingSizes = {
  default: 18,
  small: 12,
  large: 25,
  'x-large': 35
}

export const Container = styled.div`
  width: calc(100% / 5);
  height: auto;
  padding: 12px;
  display: flex;
  flex-direction: row;
  position: relative;

  @media (min-width: 2000px) {
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
    width: 25%;
  }

  @media (max-width: 690px) {
    width: calc(100% / 3);
  }

  @media (max-width: 570px) {
    width: 50%;
  }

  @media (max-width: 410px) {
    width: 100%;
  }

  a {
    width: 100%;
    height: auto;
    display: block;
  }
`

export const ImageWrapper = styled.div`
  background-color: rgb(245 245 245);
  border-radius: 8px;
  -webkit-border-radius: 8px;
  width: 100%;
  /* padding: 60px; */
  text-align: center;
  box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 10%);
  /* background-image: linear-gradient(45deg, #0d4b83, transparent); */

  img {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    width: 100%;
    height: unset;
    border-radius: inherit;
    -webkit-border-radius: inherit;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`

export const StatsData = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    width: 100%;
    display: inline-flex;
    align-items: center;

    span {
      width: 100%;
      display: block;
      text-align: right;
      color: #a0a0a0;
      font-size: 13px;
      padding-left: 15px;
    }
  }
`

export const Name = styled.h5`
  width: 100%;
  margin: 0px;
  padding: 25px 0px 0px;
  font-weight: 400;
  font-size: 15px;
  color: #1e486d;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 120px;
  overflow: hidden;
`

export const Description = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin: 0px 0px 25px;
  padding: 15px 0px;
  max-height: 85px;
  overflow: hidden;
  color: #605d5d;
  font-weight: 300;
`

export const AsideContainer = styled.div`
  width: 35px;
  height: auto;
  padding: 40px 0px;

  @media (min-width: 2000px) {
    margin-left: -7px;
  }

  @media (max-width: 1400px) {
    position: absolute;
    right: 5px;
    top: 20px;
  }

  @media (max-width: 1100px) and (min-width: 1000px) {
    position: unset;
    right: unset;
    top: unset;
  }

  @media (max-width: 870px) {
    position: absolute;
    right: 5px;
    top: 20px;
  }

  @media (max-width: 690px) {
    position: absolute;
    right: 10px;
    top: unset;
  }

  @media (max-width: 760px) {
    width: 35px;
  }

  @media (min-width: 3500px) {
    margin-left: -35px;
  }

  @media (max-width: 410px) {
    width: 50px;
  }
`

export const AsideBody = styled.div`
  width: 100%;

  ul {
    width: 100%;
    list-style: none;

    li {
      width: 100%;
      margin: 0px 0px 10px;
      list-style-type: none;

      @media (max-width: 760px) {
        margin: 0px 0px 8px;
      }

      button {
        width: 40px;
        height: 40px;
        border: 0px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        outline: 0px;
        cursor: pointer;
        background-color: #ffffff;
        box-shadow: 1px 1px 9px 0px rgb(0 0 0 / 17%);
        transition: transform 0.2s ease-in-out;

        i {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          color: #101010;
          font-size: 15px;
        }

        &.color-primary {
          background-color: #1c6fb9;

          i {
            color: #ffffff;
          }
        }

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transform: scale(0.9);
        }

        @media (min-width: 2000px) {
          width: 40px;
          height: 40px;
        }

        @media (max-width: 760px) {
          width: 35px;
          height: 35px;

          i {
            font-size: 17px;
          }
        }

        @media (max-width: 410px) {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`

export const MetaData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 0px;

  span {
    display: block;
    font-size: 14px;
    color: #707070;
    font-weight: 400;
    padding: 0px 12px;
    border-left: 2px solid #ebebeb;
  }
`

export const Price = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;

  h3 {
    font-size: 40px;
    margin-top: -16px;
    color: #111111;
  }

  i {
    display: block;
    font-size: 17px;
    font-weight: 800;
    color: #464646;
  }

  h5 {
    color: #b97777;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 1199px) and (min-width: 1101px) {
    h3 {
      font-size: 30px;
      margin: -8px 0px 0px 5px;
    }
  }

  @media (max-width: 767px) and (min-width: 691px) {
    h3 {
      font-size: 21px;
      margin: 0px 0px 0px 8px;
    }
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 21px;
      margin: 0px 0px 0px 8px;
    }
  }
`

export const StarRatingElementContainer = styled.ol`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
`

export const StarWrapper = styled.li<StarWrapperProps>`
  display: block;
  font-size: ${props => starRatingSizes[props.$size]}px;
  color: ${props =>
    props.$starRatingAverage >= props.$starIndex ? '#dbcf36' : '#68631d'};
`
