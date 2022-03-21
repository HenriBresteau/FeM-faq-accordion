import { createGlobalStyle } from "styled-components";
import Kumbh from "./fonts/KumbhSans-Regular.ttf";
import KumbhBold from "./fonts/KumbhSans-Bold.ttf";

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Kumbh Sans';
  src: url(${Kumbh}) format('truetype');
}
@font-face {
  font-family: 'Kumbh Sans Bold';
  src: url(${KumbhBold}) format('truetype');
}
:root{
--minWidth: 375px;
--maxWidth: 1440px;

--DarkBlue:hsl(238, 29%, 16%);
--SoftRed: hsl(14, 88%, 65%);

--bg-Violet: hsl(273, 75%, 66%);
--bg-Blue: hsl(240, 73%, 65%);

--h2-blue: hsl(237, 12%, 33%);
--h2-gray: hsl(240, 6%, 50%);

--divider: hsl(240, 5%, 91%);

--font-size: 12px;

--ff:'Kumbh Sans', sans-serif;
--ff-Bold:'Kumbh Sans Bold', sans-serif;
--fw-normal:400;
--fw-bold:700;
}

*{
  box-sizing:border-box;
  font-family:var(--ff)}
;

body{
  margin: 0;
  padding: 0;
  background: linear-gradient(to top, var(--bg-Blue),var(--bg-Violet));
  h1{
    font-size: 2.5rem;
    font-family: var(--ff-Bold);
    font-weight: var(--fw-bold);
  }
  h2{
    color:var(--h2-gray);
    font-size: 1rem;
    font-weight:var(--fw-normal);
  }
  .App{
    display: flex;
    height:100vh;
    justify-content: center;
    align-items: center;
  }
}
`;
