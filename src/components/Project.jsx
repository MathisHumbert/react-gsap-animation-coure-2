import styled from 'styled-components';

import backgroundOne from '../images/5.jpg';
import backgroundTwo from '../images/1.jpg';

const StyledProject = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 35% 15% 1fr;
  grid-template-areas:
    'project-img-left . project-title'
    'project-img-left project-img-right project-img-right';
  background-color: #e1dfdd;
  z-index: -4;

  .project__title {
    grid-area: project-title;
    text-align: right;
    padding: 0 2vw 2vw 0;
    font-family: 'Italiana', serif;
    font-weight: 400;
  }

  .project__title--main {
    font-size: clamp(2rem, 10vw, 9rem);
    display: block;
    line-height: 0.9;
  }

  .project__title--sub {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1;
    margin-right: 0.5vw;
  }

  .project__img {
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 40vh;
  }

  .project__img--left {
    grid-area: project-img-left;
    grid-column-end: 3;
    border-radius: 0 30vh 30vh 0;
    height: 60vh;
  }

  .project__img--right {
    grid-area: project-img-right;
    border-radius: 40vh 0 0 40vh;
    height: 80vh;
  }
`;

export default function Project() {
  return (
    <StyledProject>
      <h2 className='project__title'>
        <span className='project__title--main'></span>
        <span className='project__title--sub'></span>
      </h2>
      <div
        className='project__img project__img--left invert'
        style={{ backgroundImage: `url(${backgroundOne})` }}
      ></div>
      <div
        className='project__img project__img--right invert'
        style={{ backgroundImage: `url(${backgroundTwo})` }}
      ></div>
    </StyledProject>
  );
}
