
import styled from "styled-components";
import { headerHeight, MEDIA } from '../../styles/layout';
import { primaryColor } from '../../styles/globals';

export const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 24px 0 24px;
  height: ${headerHeight}px;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    justify-content: space-between;
  }
`;

export const HeaderButton = styled.div`
  display: flex;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    display: none;
  }
`;
export const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${primaryColor};
  color: ${primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

export const HeaderLogo = styled.div`
  display: none;
  align-items: center;
  height: ${headerHeight}px;

  
  @media (max-width: ${MEDIA.iphoneSE}px) {
    display: flex;;
  }
`;

export const Logo = styled.img`
  height: 48px;
`;

