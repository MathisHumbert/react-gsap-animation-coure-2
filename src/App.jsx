import { useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledMainWrapper>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </StyledMainWrapper>
  );
}

export default App;
