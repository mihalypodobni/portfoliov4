import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 30px;
    height:100vh;
    position: relative;
    z-index: 1;
`

export const HeroBg=styled.div`
    position: absolute;
    top:15%;
    right:0;
    bottom:0;
    left:60%;
    width:20%;
    height:70%;
    overflow:hidden;
`

//PLACEHOLDER FOR VIDEO BG
export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
`

export const ImgBg = styled.img`
    width:100%;
    height:100%;
    position:relative;
    -o-object-fit:cover;
    object-fit:cover;
`

export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:absolute;
padding: 8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`

export const HeroH1 = styled.h1` //Hero main text
    color:#000;
    font-size:70px;
    text-align:center;

    @media screen and (max-widh:768px){
        font-size:40px;
    }

    @media screen and (max-widh:480px){
        font-size:32px;
    }
`

export const HeroP = styled.p` //Hero sub text
    margin-top:24px;
    color: #000;
    font-size: 24px;
    text-align:center;
    max-width:600px;

    @media screen and (max-widh:768px){
        font-size:24px;
    }

    @media screen and (max-widh:480px){
        font-size:18px;
    }
`

