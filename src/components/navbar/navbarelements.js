import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav= styled.nav`
background: #000 ;
opacity: 0.85;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
    @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    @media only screen and (max-width: 1000px) {
      width:100%;
      Overflow-x: hidden;
    }
}`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;`

export const NavLogo = styled (LinkR)`
background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon= styled.div`
background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
display: none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
    }`;



export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
   display: none;}`
export const NavItem = styled.li`
 height: 80px;

 `
export const NavLinks = styled(LinkS)`
 background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
  
 &.active {
    border-bottom: 3px solid #01bf71;
 }
 `
 export const NavBtn = styled.nav`
 display: flex;
 align-items:center;
 @media screen and (max-width: 768px){
   display:none;
 }
 }`

 export const NavBtnLink= styled(LinkR)`
 border-radius: 50px;
 background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%);
 white-space: nowrap;
 padding: 10px 22px;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 
 &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
 `
