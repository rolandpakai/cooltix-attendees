
import styled from "styled-components";
import { headerHeight } from '../../styles/layout';
import { primaryColor } from '../../styles/globals';

export const StyledMainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
    padding: 0 24px 0 24px;
  height: ${headerHeight}px;
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

