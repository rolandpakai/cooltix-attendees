import styled from "styled-components";
import { sidebarWidth } from '../styles/layout';
import { MEDIA } from '../styles/layout';

export const StyledLayout = styled.div`
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
  overflow: auto;
  background-color: #ebf2fa;
`;

export const SidebarContainer = styled.div`
  width: ${sidebarWidth}px;
  background-color: #fff;
  height: 100vh;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    display: none;
  }
`;
