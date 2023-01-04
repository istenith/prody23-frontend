import styled from 'styled-components'
export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) =>(lightBg ? 'red' :'black')};

@media screen and (max-width: 768px) {
padding: 100px 0;
width:100%;
`
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const InfoRow= styled.div`
display: grid:
grid-auto-columns: minmax(auto, lfr);
align-items: center;
grid-template-areas: ${({imgStart})=> (imgStart ? `'col2
col1'`: `'col1 col2'`)};
@media screen and (max-width: 768px) {
grid-template-areas: ${({imgStart})=>(imgStart ? `'col1'
'col2'`: `'col1 col1' 'col2 col2'`)}`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2= styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-ares: col2;
`
export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
export const TopLine = styled.p`
background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
font-size: 24px;
Line-height: 29px;
font-weight: 160000;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1`
background: radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
padding:5px;
text-align: center;
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
};
color: ${({lightText })=> (lightText ? '#f7f8fa': '010606')
};
@media screen and (max-width: 480px) {
font-size: 32px;
}
`
export const Subtitle = styled.p`
background: linear-gradient(110.53deg, #FFFFFF -265.46%, #14101D 96.75%);
box-shadow: 4px 6px 30px rgba(19, 36, 46, 0.25);
border-radius: 10px;
text-align: justify;
height: 100%

width: 1281px;
margin-bottom: 35px;
font-size: 19px;
Line-height: 25px;
color: ${({darkText})=> (darkText ? '#010606': "#fff")};
@media only screen and (max-width: 800px) {
    float: none;
    width: 100%;
    }
`
export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
export const ImgWrap =styled.div`
max-width: 555px;
height: 100%;
`
export const Img =styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right : 0;
`;