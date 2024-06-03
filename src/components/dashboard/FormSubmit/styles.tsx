import styled from 'styled-components'

const formSubmitStylesMap = {
  primary: {
    300: '#0160bf',
    500: '#0156aa',
    700: '#03488e'
  },
  success: {
    300: '#01bf11',
    500: '#0e9e01',
    700: '#0a8e03'
  },
  danger: {
    300: '#bf0101',
    500: '#aa0101',
    700: '#8e0303'
  }
}

export type FormSubmitStyle = keyof typeof formSubmitStylesMap

export type FormSubmitProps = {
  $style: FormSubmitStyle
}

export const Container = styled.div<FormSubmitProps>`
  width: 100%;
  height: auto;
  display: block;
  padding: 7px 0px 0px;

  button {
    background-color: ${props => formSubmitStylesMap[props.$style][300]};
    color: #ffffff;
    border: 0px;
    outline: 0px;
    border-radius: 25px;
    -webkit-border-radius: 25px;
    font-size: 16px;
    padding: 10px 30px;
    width: 100%;
    display: block;
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${props => formSubmitStylesMap[props.$style][500]};
    }

    &:active {
      background-color: ${props => formSubmitStylesMap[props.$style][700]};
      transform: scale(0.98934);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      /* pointer-events: none; */

      &:hover {
        background-color: ${props => formSubmitStylesMap[props.$style][300]};
      }

      &:active {
        background-color: ${props => formSubmitStylesMap[props.$style][300]};
        transform: unset;
      }
    }

    i {
      display: inline-flex;
      margin-right: 8px;
    }
  }
`
