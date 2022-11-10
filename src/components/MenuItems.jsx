import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledProjectItem = styled.a`
  position: relative;
  margin-bottom: 1rem;
  font-family: 'italiana', serif;
  cursor: pointer;
  color: #fff;
  will-change: transform;
  text-decoration: none;

  &:hover {
    z-index: 2;
  }

  .project__item-text {
    pointer-events: none;
    display: block;
    line-height: 1;
    position: relative;
    font-size: 2rem;
    font-family: 'italiana', serif;

    @media screen and (min-width: 53em) {
      font-size: 7.5vw;
    }
  }

  .word {
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }

  .clone {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }
`;

export default function MenuItems({ name, bgcolor, src }) {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    const getAllProjectsItems = gsap.utils.toArray('.project__item');
    gsap.set(getAllProjectsItems, { opacity: 0, y: 200 });

    gsap.to(getAllProjectsItems, { opacity: 1, y: 0, stagger: 0.1 });

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <StyledProjectItem
      href=''
      className='project__item'
      data-color={bgcolor}
      data-image={src}
    >
      <span className='project__item-text'>{name}</span>
    </StyledProjectItem>
  );
}
