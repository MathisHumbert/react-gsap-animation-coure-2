import { useRef } from 'react';
import styled from 'styled-components';

import MenuItems from './MenuItems';
import projects from './projects';

const StyledProjectsContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .project__wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .project__image--outer {
    pointer-events: none;
    position: absolute;
    width: 28vw;
    height: 42vw;
    left: 50%;
    overflow: hidden;
    background-color: #000;
    visibility: hidden;
    top: 20vh;
    z-index: 1;
    border-radius: 300px;

    .project__image--inner {
      position: absolute;
      opacity: 0.8;
      top: -10%;
      left: 0;
      width: 100%;
      height: 115%;
      background-size: cover;
    }
  }
`;

const StyledBackground = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  will-change: background-color;
  background-color: #b5b5b2;
  z-index: -1;
`;

export default function Menu({ isMenuOpen }) {
  const innerRef = useRef();
  const outerRef = useRef();
  const backgroundRef = useRef();
  const projectsRef = useRef();

  return (
    <>
      {isMenuOpen && (
        <StyledProjectsContainer>
          <div className='project__wrapper' ref={projectsRef}>
            {projects.map((project) => (
              <MenuItems
                key={project.id}
                name={project.name}
                bgcolor={project.color}
                src={project.image}
                innerRef={innerRef}
                outerRef={outerRef}
                backgroundRef={backgroundRef}
                projectsRef={projectsRef}
              />
            ))}
          </div>
          <div ref={outerRef} className='project__image--outer'>
            <div ref={innerRef} className='project__image--inner'></div>
          </div>
          <StyledBackground ref={backgroundRef} />
        </StyledProjectsContainer>
      )}
    </>
  );
}
