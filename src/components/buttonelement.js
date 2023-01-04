import styled from 'styled-components'
import {Link} from 'react-scroll'
export const Button =styled(Link)`
border-radius: 50px;

background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
white-space: nowrap;
padding: ${({big})=> (big ? '14px 48px': '12px 30px')};
color: ${({dark}) => (dark ? 'black' : 'green')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
&:hover {
transition: all 0.2s ease-in-out;
background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

}`