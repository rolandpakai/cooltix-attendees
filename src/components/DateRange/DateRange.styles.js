import styled from 'styled-components';
import { MEDIA } from '../../styles/layout';

export const StyledDateRange = styled.div`
  display: flex;     
  align-items: flex-end;
  gap: 16px;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Separator = styled.div`
  padding-bottom: 10px;
  font-weight: 600;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    display: none;
  }
`;

