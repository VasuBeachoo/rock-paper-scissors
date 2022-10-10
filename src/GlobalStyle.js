import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Scissors-dark: hsl(39, 89%, 41%);
    --Scissors-light: hsl(40, 84%, 53%);
    --Paper-dark: hsl(230, 89%, 58%);
    --Paper-light: hsl(230, 89%, 65%);
    --Rock-dark: hsl(349, 71%, 42%);
    --Rock-light: hsl(349, 70%, 56%);
    --Lizard-dark: hsl(261, 73%, 60%);
    --Lizard-light: hsl(261, 72%, 63%);
    --Spock-dark: hsl(189, 59%, 53%);
    --Spock-light: hsl(189, 58%, 57%);
    --Dark-text: hsl(229, 25%, 31%);
    --Score-text: hsl(229, 64%, 46%);
    --Header-outline: hsl(217, 16%, 45%);
    --Bg-blue: hsl(214, 47%, 23%);
    --Bg-purple: hsl(237, 49%, 15%);
    --White: hsl(0, 0%, 100%);
    --Light-gray: hsl(0, 0%, 94%);
    --Gray: hsl(0, 0%, 80%);
    --Winner-bg-inner: hsl(214, 47%, 24%);
    --Winner-bg-middle: hsl(214, 47%, 22%);
    --Winner-bg-outer: hsl(214, 47%, 20%);
    /* --Winner-bg-inner: #204060;
    --Winner-bg-middle: #324268;
    --Winner-bg-outer: #283864; */
  }

  * {
    box-sizing: border-box;
    font-family: "Barlow Semi Condensed", sans-serif;
  }

  body {
    background: radial-gradient(circle, var(--Bg-blue), var(--Bg-purple));
    margin: 0;
  }
`;

export default GlobalStyle;
