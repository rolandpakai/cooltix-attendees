import styled from 'styled-components';
import { borderColor, secondaryColor } from '../../styles/globals';

export const DateInputWrapper = styled.div`
  border-radius: 20px;
  border: 1px solid ${borderColor};
  padding: 6px 12px 6px 12px;
  display: inline-block;
  width: 220px;
  
  input {
    width: 180px;
  }
`;

export const DateInputLabel = styled.label`
  display: block;
  color: ${secondaryColor};
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  margin: 16px;
`;

export const closeIconStyle = {
  cursor: 'pointer',
};
