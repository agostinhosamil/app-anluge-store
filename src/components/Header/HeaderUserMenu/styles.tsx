import styled from 'styled-components'

type UserCardImageContainerProps = {
  $size?: 'small' | 'default'
}

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  background-color: ${({ theme }) => theme.colors.background.v50};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 16px 8px 2px rgb(0 0 0 / 27%);
  position: absolute;
  top: 100%;
  right: 20px;
  z-index: 8;
  color: ${({ theme }) => theme.colors.background.v800};
  border: 0px;
  outline: 0px;

  @media (max-width: 660px) {
    right: 0px;
    left: 0px;
    width: 100%;
    max-width: unset;
  }
`

export const UserCardContainer = styled.div`
  width: 100%;
  height: auto;
  display: block;

  h3,
  h5 {
    display: block;
    width: 100%;
    height: auto;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
  }

  h3 {
    font-size: 27px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.background.v900};
    padding: 60px 30px 10px;
  }

  h5 {
    font-weight: 300;
    color: ${({ theme }) => theme.colors.background.v700};
    font-size: 12px;
  }
`

export const UserCardImageContainer = styled.div<UserCardImageContainerProps>`
  width: 100%;
  height: ${props => (props.$size === 'small' ? 80 : 120)}px;
  display: flex;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: -${props => (props.$size === 'small' ? 50 : 40)}px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 5px solid #ffffff;

    img {
      border-radius: inherit;
      -webkit-border-radius: inherit;
    }
  }
`

export const UserCardButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 30px 30px;

  div {
    display: inline-flex;
    margin: 7px;

    button,
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      -webkit-border-radius: 50%;
      border: 0px;
      background-color: #444444;
      color: #ffffff;
      font-size: 15px;

      &:hover {
        background-color: #222222;
      }
    }
  }
`

export const UserCardPlaceholderFormFieldsContainer = styled.div`
  width: 100%;
  padding: 0px 30px;

  div.col-md-6 {
    padding: 0px 4px;
  }

  div.mb11 {
    margin-bottom: 11px !important;
  }
`

export const UserCardPlaceholderSubmitButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0px 20px 0px 23px;

  button {
    width: 100%;
    border: 0px;
    background-color: #0150bf;
    color: #ffffff;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    font-size: 16px;
    padding: 8px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    i {
      display: inline-flex;
      margin: 2px 8px 0px 0px;
    }
  }
`

export const UserCardPlaceholderFooter = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  div {
    width: auto;
    display: inline-flex;
    flex-direction: row;
    padding-right: 15px;

    span {
      font-size: 13px;

      a {
        color: #043e94;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;

    li {
      margin: -5px 5px 0px;

      button,
      a {
        font-size: 13px;
        transition: transform 0.2s ease-in-out;
        background-color: transparent;
        border: 0px;
        outline: 0px;
        width: 25px;
        height: 25px;
        margin-top: -4px;

        &:hover {
          transform: scale(1.123);

          &.facebook {
            color: #043e94;
          }

          &.twitter {
            color: #00bfff;
          }

          &.google {
            color: #b73d10;
          }
        }

        &:active {
          transform: scale(0.95293);
        }
      }
    }
  }
`
