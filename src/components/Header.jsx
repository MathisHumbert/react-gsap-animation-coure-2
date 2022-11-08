import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 10;
  padding: 0 4vw;

  .header__outer {
    max-width: 1417px;
    margin: 0 auto;

    .header__inner {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        width: 30px;
        fill: #fff;
      }
    }
  }

  .header__hamburger {
    cursor: pointer;
    display: block;

    span {
      height: 3px;
      width: 30px;
      margin: 6px;
      display: block;
      background: #fff;
    }
  }
`;

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const topRef = useRef();
  const bottomRef = useRef();

  // store the timeline in a ref
  const hamburgerTl = useRef();

  useEffect(() => {
    hamburgerTl.current = gsap
      .timeline({
        defaults: {
          duration: 0.3,
          ease: 'power2.out',
        },
      })
      .fromTo(topRef.current, { y: 0 }, { y: 4.5 })
      .fromTo(bottomRef.current, { y: 0 }, { y: -4.5 }, 0)
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  useEffect(() => {
    // toggle the direction of our line
    hamburgerTl.current.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <div className='header__outer'>
        <div className='header__inner'>
          <svg viewBox='0 0 23 22' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.90442 13.2909C5.86904 13.1708 8.22826 11.7644 11.4262 11.1744C9.02685 13.2143 6.40303 14.1635 5.00124 15.748C4.04212 16.8321 3.95224 17.9418 4.86955 18.7534C5.78685 19.565 6.87742 19.3405 7.83654 18.2564C9.23833 16.672 9.86076 13.9521 11.5192 11.4054C11.3137 14.4942 10.2102 17.0858 10.3303 19.0504C10.4265 20.6221 11.1032 21.3695 12.282 21.2974C13.5393 21.2205 14.12 20.3962 14.0238 18.8245C13.9037 16.8599 12.5711 14.4173 11.8335 11.3861C13.9472 13.7021 14.813 16.2521 16.3975 17.6539C17.565 18.6868 18.5962 18.7815 19.4077 17.8642C20.2931 16.8635 20.152 15.8467 18.9059 14.8186C17.3311 13.574 14.6016 12.7944 11.9763 11.1408C15.0651 11.3463 17.8139 12.4402 19.7 12.3248C21.2717 12.2287 22.019 11.552 21.947 10.3732C21.87 9.11584 21.0457 8.53522 19.4741 8.63135C17.588 8.7467 15.0668 10.0841 11.9571 10.8264C14.2827 8.86999 17.123 7.59196 18.3772 6.17431C19.4935 5.08061 19.5096 4.05421 18.5923 3.24265C17.5916 2.3573 16.5748 2.49837 15.5467 3.74443C14.1449 5.32887 13.5963 7.96543 11.7855 10.6003C12.1481 7.50185 13.1635 4.75787 13.0481 2.87183C12.952 1.30014 12.2753 0.552742 11.0179 0.629645C9.83913 0.701742 9.25851 1.52604 9.35464 3.09774C9.46999 4.98377 10.886 7.50017 11.4711 10.6195C9.5147 8.29395 8.40345 5.60115 6.97619 4.18975C5.80871 3.15685 4.7823 3.14076 3.97074 4.05806C3.15918 4.97536 3.22647 6.07555 4.46772 7.02505C5.88538 8.27928 8.69352 9.05408 11.407 10.8601C8.30853 10.4974 5.64314 9.47728 3.67851 9.59744C2.10682 9.69357 1.35942 10.3703 1.43632 11.6277C1.50842 12.8064 2.33272 13.3871 3.90442 13.2909Z'></path>
          </svg>
          <div
            className='header__hamburger'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span ref={topRef}></span>
            <span ref={bottomRef}></span>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
