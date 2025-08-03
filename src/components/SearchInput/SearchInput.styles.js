import styled from 'styled-components';
import { borderColor } from '../../styles/globals';

export const SearchInputWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid ${borderColor};
  padding: 6px 12px;
  margin-right: 24px;
  display: inline-block;
  width: 500px;

  input {
    width: 430px;
  }
`;

export const searchIconStyle = {
  marginRight: '8px'
};

export const closeIconStyle = {
  marginLeft: '8px',
  cursor: 'pointer',
};


