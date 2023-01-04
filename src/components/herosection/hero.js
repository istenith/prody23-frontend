import React, {useState} from 'react'
import { default as logo } from '../../photos/photo2.svg';
import { Alert } from '@coreui/react';
import Video from '../../videos/video3.mp4' 
import { HeroBg,HeroH1, VideoBg, HeroContainer, HeroP, HeroContent,HeroBtnWrapper, ArrowForward, ArrowRight } from './heroelements';
import { Button } from '../buttonelement';
const Hero = () => {
    const [hover, setHover]= useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src= {Video} type= 'video/mp4'/>
        </HeroBg>
        <HeroContent>
            {/* <HeroLogo>

            </HeroLogo> */}
            <HeroH1>Prodyogyiki</HeroH1>
        <HeroP>
            20th - 25th February
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary= 'true'
            dark='true '
            >
                Get started {hover ? <ArrowForward/> : <ArrowRight
                />}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  ) 
}

export default Hero;
