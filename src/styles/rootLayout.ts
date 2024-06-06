'use client'

// import { Roboto } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }

  ul,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  hr,
  dd,
  dl {
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #ffffff;
  }

  a {
    text-decoration: none;
  }

  button,
  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    cursor: pointer;
    outline: 0px;
  }

  img {
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }

  *:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`
