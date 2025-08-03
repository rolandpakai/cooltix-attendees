import styled, { keyframes } from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const ViteLogo = styled(Logo)`
`;

export const ReactLogo = styled(Logo)`
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.p`
  color: #888;
`;

export const AnimatedLogo = styled(Logo)`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;
