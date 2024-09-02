import  { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  body, #root {
     min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color:#36454F;
  }
`;

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const colors = {
  timberwolf: "#DAD7CD",
  sage: "#A3B18A",
  fernGreen: "#588157",
  hunterGreen: "#3A5A40",
  brunswickGreen: "#344E41",
  lightGreen: "#ace1af",
  
  redCardBack: "#a62120",
  bodyColor: "#0f0f0f",
  footerColor: "#b50014",
  buttonBgForRed: "#fff",
  headerColor: "rgba(181, 0, 20, 1)",
  lineBelow: "rgba(37, 37, 37, 1)  ",
};

