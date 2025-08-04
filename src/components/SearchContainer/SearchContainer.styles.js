import styled from 'styled-components';
import { MEDIA } from '../../styles/layout';

export const StyledSearchContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  margin-bottom: 16px;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    grid-template-columns: auto;
  }
`;

export const SearchButton = styled.div`
  display: flex;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    margin-top: 16px;
  }
`;

export const Stack = styled.div`
  display: flex;
`;

export const ErrorMessage = styled.div`
  color: #d32f2f;
  background: #fff0f0;
  border-radius: 6px;
  padding: 8px 16px;
  margin-top: 16px;
  margin-right: 28px;
  font-size: 15px;
  font-weight: 500;
  min-height: 22px;
`;