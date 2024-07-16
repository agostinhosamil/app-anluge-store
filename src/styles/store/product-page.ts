import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 50px 50px 0px;
  max-width: 1320px;
  margin: auto;
`

export const ProductImageGalleryWrapper = styled.div`
  width: 100%;
`

export const ProductDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 43px;
    font-weight: 600;
    display: block;
    padding: 0px 0px 20px;
  }
`

export const StatsData = styled.div`
  width: 100%;
  display: block;
  padding: 0px 0px 20px;
  display: flex;
  flex-direction: row;

  span {
    display: inline-flex;
    width: 100%;
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid #cdcdcd;
  }
`

export const StarRatingElementContainer = styled.div`
  display: inline-flex;
  align-items: center;
`

export const PriceListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 0px 0px 20px;
`

export const PriceList = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`

export const OldPrice = styled.div`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: row;

  i {
    display: block;
    padding-right: 10px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    margin-top: 5px;
    color: #404040;
  }

  h5 {
    font-size: 26px;
    font-weight: 500;
    color: #404040;
    text-decoration: line-through;
  }
`

export const Price = styled(OldPrice)`
  i {
    font-size: 18px;
    font-weight: 800;
    color: #111111;
  }

  h5 {
    font-size: 42px;
    font-weight: 800;
    color: #111111;
    text-decoration: unset;
  }
`

export const CategoryBreadCrumbWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
`

export const ProductActionsListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 0px 0px 20px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      display: inline-flex;
      padding: 10px 12px 10px 0px;
    }
  }
`

type ActionButtonProps = {
  $color?: 'primary' | 'default'
}

export const ActionButton = styled.button<ActionButtonProps>`
  position: relative;
  display: flex;
  padding: 2px 15px;
  border-radius: 70px;
  -webkit-border-radius: 70px;
  border: 0px;
  outline: 0px;
  color: #ffffff;
  background-color: ${props =>
    props.$color === 'primary' ? '#0170bf' : '#2f363b'};
  align-items: center;
  transition: all 0.3s ease-in-out;

  span,
  i {
    display: inline-flex;
    padding: 8px;
  }

  span {
    display: inline-flex;
  }

  &:hover {
    transform: scale(1.06);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const ProductTagListWrapper = styled.div`
  width: 100%;
  height: auto;
  display: block;
  padding: 0px 0px 10px;

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    li {
      display: inline-flex;
      padding: 7px 14px 7px 0px;

      a {
        display: flex;
        padding: 9px 18px;
        border-radius: 54px;
        -webkit-border-radius: 54px;
        background-color: #efefef;
        font-size: 13px;
        color: #354050;
        font-weight: 400;

        &:hover {
          background-color: #e0e0e0;
        }

        &:active {
          background-color: #a0a0a0;
        }
      }
    }
  }
`

export const ShareOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 27px;
    font-weight: 300;
    color: #303030;
    display: block;
    width: 100%;
    padding-bottom: 10px;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    li {
      margin: 7px 14px 7px 0px;
      display: inline-flex;
      align-items: center;

      a {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        background-color: #e0e0e0;
        transition: all 0.1s ease-in-out;

        img {
          border-radius: inherit;
          -webkit-border-radius: inherit;
          outline: 0px;
          border: 0px;
        }

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`

type TitleProps = {
  $size?: number
}

export const Title = styled.h2<TitleProps>`
  display: block;
  width: 100%;
  padding-bottom: 25px;
  font-size: ${props => (props.$size ? `${props.$size}px` : '35px')};
  font-weight: 600;
  color: #303030;
`

export const ContentWrapper = styled.div`
  width: 100%;
  display: block;
`

export const Content = styled.div`
  width: 100%;
  display: block;
`

export const Paragraph = styled.p`
  width: 100%;
  display: block;
  padding: 0px 14px;
  margin: 0px;
`

export const Summary = styled.div`
  width: 100%;
  height: auto;
  display: block;
  background-color: #f2f2f2;
  padding: 22px;
  border-radius: 8px;
  -webkit-border-radius: 8px;
  margin: 35px 0px;
`
