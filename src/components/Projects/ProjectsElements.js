import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: auto;
    margin-top:50px;
    background: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

/*     @media screen and (max-width:768px){
        height:1100px;
    }
    
    @media screen and (max-width:480px){
        height:1300px;
    } */
`

export const ProjectsWrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    align-items:center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    width:100%;

    border:2px solid black;
    max-height: 340px;
    padding: 30px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    background: #fff;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`

export const ProjectsImage = styled.img`
    height:160px;
    width:160px;
    margin-bottom:10px;
`

export const ProjectsH1 = styled.h1`
font-size: 2rem;
color: #000;

@media screen and (max-width:480px){
    font-size:2rem;
}
`

export const ProjectsP=styled.p`
        font-size:1rem;
        text-align: left;
`