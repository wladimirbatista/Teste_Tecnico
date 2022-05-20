import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;

    :root {
      --grey0: #dddddd;
      --grey1: #f6f6f8;
      --white: #ffffff;
      --redButton: #ec1d51;
      --blueBox: #75879b;
      --navy: #24323b;
    }

    body, input, button {
      font-family: 'Raleway', sans-serif;
      font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6 {   
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
    }

    button {
      font-family: 'Raleway', sans-serif;
      cursor: pointer;
    }
  }
`

export default Reset;