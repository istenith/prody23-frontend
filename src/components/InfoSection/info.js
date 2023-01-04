import React from 'react'
import { Button } from '../buttonelement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './infoelements'
const Info = ({lightBg, id, imgStart, topLine, lightText,headline, darkText, description, buttonLabel, img, topLine2, topLine3, alt}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg }id={id}>
        <InfoWrapper>
          <InfoRow imgStart= {imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine style={{textAlign: 'center'}}>
                  {topLine}
                </TopLine>
                <TopLine style={{textAlign: 'center'}}>
                  {topLine2}
                </TopLine >
                <TopLine style={{textAlign: 'center'}}>
                  {topLine3}
                </TopLine>
                <Heading lightText= {lightText}>
                {headline}</Heading>
                <Subtitle darkText= {darkText}><div style={{padding: '8px'}}>{description}</div></Subtitle>
                
              </TextWrapper>
            </Column1> 
            <Column2>
            {/* <ImgWrap>
            <Img src={img} alt={alt}/>
            </ImgWrap> */}
            </Column2>
          </InfoRow>
        </InfoWrapper>

      </InfoContainer>
    </>
  )
}

export default Info
