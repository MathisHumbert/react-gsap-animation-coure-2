import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Content from './components/Content';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Menu from './components/Menu';
import Project from './components/Project';

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const circleRef = useRef();

  useEffect(() => {
    circleRef.current.moveTo(window.innerWidth / 2, window.innerHeight / 2);

    const onMove = ({ clientX, clientY }) => {
      circleRef.current.moveTo(clientX, clientY);
    };

    window.addEventListener('pointermove', onMove);

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <StyledMainWrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Content />
      <Project />
      <Menu isMenuOpen={isMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
