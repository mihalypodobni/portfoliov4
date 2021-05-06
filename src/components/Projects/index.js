import React from 'react'
import Img1 from '../../images/asci.png'
import Img2 from '../../images/raster.png'
import Img3 from '../../images/oimachi.png'

import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsImage,
    ProjectsP
}
from './ProjectsElements';


function Projects() {
    return (
        <ProjectsContainer id="Projects">
            <ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard>
                        <ProjectsImage src={Img1}/>
                        <ProjectsH1>Creative portfolio 2021</ProjectsH1>
                        <ProjectsP>Personal portfolio page built in React with Styled Components</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                            <ProjectsImage src={Img2}/>
                            <ProjectsH1>Random Walk through Raster</ProjectsH1>
                            <ProjectsP>JavaSript re-code of Frieder Nake's early computer graphics art</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard>
                            <ProjectsImage src={Img3}/>
                            <ProjectsH1>Imre Kiss - Oimachi</ProjectsH1>
                            <ProjectsP>Music video made by scanning analoge video feedback</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsH1>
            
        </ProjectsContainer>
    )
}

export default Projects
