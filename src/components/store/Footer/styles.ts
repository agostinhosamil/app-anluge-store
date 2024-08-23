import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: auto;
  padding: 60px 80px;
  background-color: #01223a;
  color: #ffffff;
  transition: all 0.2s ease-in-out;

  * {
    color: inherit;
  }

  div.company-tax-data {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    padding: 56px 0px 0px;
    border-top: 1px solid rgb(255 255 255 / 20%);
    margin-top: 62px;

    span {
      text-align: center;
      font-weight: 300;
      font-size: 10px;
      display: block;
      width: 100%;
      letter-spacing: 2px;
    }

    @media (max-width: 576px) {
      margin-top: 26px;
    }
  }

  @media (max-width: 991px) {
    padding: 30px 0px 60px;
  }
`

export const ServiceDetails = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 10% 60px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    li {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0px 13px;

      div {
        width: 60px;
        height: 60px;
        margin-right: 14px;

        i {
          display: block;
          width: inherit;
          height: inherit;
          background-color: #000000;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          border-radius: 9px;
          -webkit-border-radius: 9px;
        }
      }

      data {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: -6px;

        span {
          color: #808080;
          font-size: 11px;
        }
      }
    }
  }

  @media (max-width: 960px) {
    padding: 80px 30px;
  }

  @media (max-width: 750px) {
    padding: 30px;
    background-color: #f4f4f4;

    ul {
      flex-wrap: wrap;

      li {
        width: 50%;
        padding: 20px;
      }
    }
  }

  @media (max-width: 650px) {
    ul li {
      width: 100%;
      padding: 20px 0px;
    }
  }

  @media (max-width: 330px) {
    ul li {
      flex-direction: column;

      div {
        margin: 0px 0px 24px;
      }

      data {
        margin: 0px;
        text-align: center;
      }
    }
  }
`

export const NewsletterFormContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 520px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0px 120px;

  h1 {
    font-weight: 300;
    line-height: 39px;
    color: rgb(255 255 255 / 80%);
  }

  p {
    font-size: 15px;
    font-weight: 300;
    color: rgb(255 255 255 / 34%);
    padding: 20px 0px 25px;
    margin: 0px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;

      input {
        width: 100%;
        padding: 13px 25px;
        border: 1px solid rgb(255 255 255 / 11%);
        outline: 0px;
        background-color: rgb(255 255 255 / 8%);
        color: #ffffff;
        border-radius: 4px;
        -webkit-border-radius: 4px;
        font-weight: 300;
      }

      button {
        margin-left: 17px;
        white-space: nowrap;
        background-color: #ffffff;
        color: #000;
        padding: 7px 23px;
        border: 1px solid #cecece;
        border-radius: 4px;
        font-weight: 300;

        &:active {
          transform: scale(0.9);
        }
      }

      @media (max-width: 481px) {
        flex-direction: column;

        button {
          margin: 12px 0px 0px;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    padding-bottom: 80px;
  }
`

export const CompanyDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -30px;

  i {
    display: block;
    padding: 0px 0px 30px;
  }

  p {
    width: 100%;
    display: block;
    font-weight: 300;
    margin: 0px;
    padding: 6px 0px;
    color: rgb(255 255 255 / 86%);
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 25px 0px 0px;

    li {
      margin: 4px 12px;

      a {
        display: block;
        font-size: 25px;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.4);
        }
      }
    }

    @media (max-width: 991px) {
      padding-bottom: 30px;
      margin-left: -12px;
    }
  }
`

export const FooterMenuListsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 15px;
  }

  ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    li {
      width: 100%;
      margin: 15px 0px;

      a {
        font-weight: 300;
        color: rgb(255 255 255 / 88%);

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 576px) {
      flex-direction: row;
      padding-bottom: 5px;
      flex-wrap: wrap;

      li {
        width: unset;
        margin: 0px 15px 15px 0px;
      }
    }
  }

  ol {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px 0px 11px;
    flex-wrap: wrap;

    li {
      display: inline-block;
      margin-left: 25px;
      position: relative;

      &:before {
        content: '';
        display: block;
        width: 1px;
        height: 8px;
        background-color: rgb(255 255 255 / 47%);
        left: -15px;
        position: absolute;
        top: calc(50% - 2px);
      }

      &:nth-child(1) {
        margin-left: unset;

        &:before {
          content: unset;
        }
      }

      a {
        font-size: 10px;
        font-weight: 400;
        color: rgb(255 255 255 / 88%);
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
