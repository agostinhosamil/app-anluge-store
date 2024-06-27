import styled from 'styled-components'
import { animatedBackground, PlaceHolder } from '~/components/styled'

type StarWrapperProps = {
  $starRatingAverage: number
  $starIndex: number
  $size: 'default' | 'small' | 'large' | 'x-large'
}

const starRatingSizes = {
  default: 24,
  small: 15,
  large: 35,
  'x-large': 47
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
`

export const ImageWrapper = styled(PlaceHolder)`
  border-radius: 8px;
  -webkit-border-radius: 8px;
  width: 100%;
  height: 320px;
  padding: 60px;
  text-align: center;

  img {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
    width: 100%;
    height: unset;
  }

  @media (max-width: 500px) {
    padding: 25px;
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

  div:nth-child(1) {
    margin-right: 15px;
  }

  div {
    width: 100%;
    margin: 0px 0px 9px;
    display: -webkit-box;
    width: 100%;
    border-radius: 6px;
    ${animatedBackground}
    height: 25px;
  }
`

export const Name = styled.h5`
  width: 100%;
  margin: 9px 0px;
  display: -webkit-box;
  width: 100%;
  border-radius: 6px;
  ${animatedBackground}
  height: 45px;
`

export const Description = styled.p`
  width: 100%;
  margin: 0px 0px 9px;
  display: -webkit-box;
  width: 100%;
  border-radius: 6px;
  ${animatedBackground}
  height: 85px;
`

export const AsideContainer = styled.div`
  width: 50px;
  height: auto;
  padding: 40px 0px;

  @media (min-width: 2000px) {
    margin-left: -7px;
  }

  @media (max-width: 1400px) {
    position: absolute;
    right: 5px;
    top: 40px;
  }

  @media (max-width: 1100px) and (min-width: 1000px) {
    position: unset;
    right: unset;
    top: unset;
  }

  @media (max-width: 870px) {
    position: absolute;
    right: 5px;
    top: 40px;
  }

  @media (max-width: 690px) {
    position: unset;
    right: unset;
    top: unset;
  }

  @media (max-width: 760px) {
    width: 35px;
  }
`

export const AsideBody = styled.div`
  width: 100%;

  ul {
    width: 100%;
    list-style: none;

    li {
      width: 100%;
      margin: 0px 0px 20px;
      list-style-type: none;

      @media (max-width: 760px) {
        margin: 0px 0px 8px;
      }

      div {
        width: 50px;
        height: 50px;
        border: 0px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        outline: 0px;
        box-shadow: 1px 1px 9px 0px rgb(0 0 0 / 17%);
        ${animatedBackground};

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

  h3 {
    width: 50%;
    margin: 9px 0px;
    display: -webkit-box;
    width: 100%;
    border-radius: 6px;
    ${animatedBackground}
    height: 35px;
  }

  i {
    display: block;
    font-size: 17px;
    font-weight: 800;
    color: #464646;
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

export const StarRating = styled.div``
