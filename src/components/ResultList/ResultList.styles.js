import styled from 'styled-components';
import { secondaryColor, primaryColor, textColor } from '../../styles/globals';
import { MEDIA } from '../../styles/layout';

export const ellipsisIconStyle = {
  color: secondaryColor,
  cursor: 'pointer',
};

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

export const ResultHeaderRow = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 24px;
  margin-bottom: 24px;
  border-radius: 10px;
  background-color: #fff;
`;

export const ResultHeader = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  color: ${secondaryColor};
  width: ${({ width }) => (width ? width : 'auto')};
`;

export const ResultRowContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  @media (max-width: ${MEDIA.iphoneSE}px) {
    display: none;
  }
`;

export const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 24px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 16px;
  border: 1px solid ${({ selected }) => selected ? primaryColor : 'transparent'};
`;

export const ResultDataContainer = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
  flex-direction: row;
  align-items: center;
`;

export const ResultData = styled.div`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '15px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};;
  width: ${({ width }) => (width ? width : 'auto')};
`;

export const LoadMore = styled.div`
  display: flex;
  flex-direction: flex-start;
  margin: 24px 0;
`;

export const TotalRow = styled.div`
  display: flex; 
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: -40px;
  color: ${textColor};
`;

export const GroupBy = styled.div`
  display: flex; 
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  margin: 16px 0 8px 0;
  color: ${secondaryColor};
`;

export const StatusIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  fomt-size: 12px;
`;

export const StyledData = styled.div`
  font-size: 15px;
  font-weight: 500;
`;