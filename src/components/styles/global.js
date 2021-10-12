import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    margin: 0;
}
@media (max-width: ${({ theme }) => theme.mobile}) {
    body{
        font-size:0.9em;
    }
  }
ul{
    font-family: 'Poppins', sans-serif;
}
li{
    padding: 4px;
    font-family: 'Poppins', sans-serif;
    opacity: 0.6;

}
p{
    opacity: 0.6;
    line-height: 1.5;
}
img{
    max-width: 100%;
}

/* header divider styles */
/* light header*/
.custom-shape-divider-bottom-1633956014 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1633956014 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1633956014 .shape-fill {
    fill: #FFFFFF;
}
/* dark header*/
.custom-shape-divider-bottom-1634048437 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1634048437 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-bottom-1634048437 .shape-fill {
    fill: #000000;
}

/* footer divider styles */
/* light footer */
.custom-shape-divider-top-1633959398 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1633959398 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 42px;
}

.custom-shape-divider-top-1633959398 .shape-fill {
    fill: #FFFFFF;
}
/* dark footer */
.custom-shape-divider-top-dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-dark svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 42px;
}

.custom-shape-divider-top-dark .shape-fill {
    fill: black;
}
`;

export default GlobalStyle;
