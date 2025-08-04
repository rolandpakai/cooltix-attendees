import styled from 'styled-components';
import { MEDIA } from '../../styles/layout';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 16px;
    gap: 8px;
  }
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    font-size: 16px;
  }
`;
