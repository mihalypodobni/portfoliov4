import React from 'react'
import Video from '../../video/video.mp4'
import Background from '../../images/glitch.png'
import {
    HeroContainer,
    HeroBg,
    ImgBg,
    VideoBg,
    HeroContent,
    HeroH1,
} from './HeroElements'

function HeroSection() {
    
    return (
        <HeroContainer id="home">
            <HeroBg>
{/*                  <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg> 
 */}                 <ImgBg src={Background}/>
            </HeroBg>
            <HeroContent>
                <HeroH1> MIHÁLY PODOBNI </HeroH1>
                <HeroH1>CREATIVE DEVELOPER</HeroH1>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
