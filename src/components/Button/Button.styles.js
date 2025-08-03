import styled, { css, keyframes } from 'styled-components';
import { primaryColor, secondaryColor } from '../../styles/globals';

export const fontAwesomeIconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: '8px',
};

const buttonSizeStyles = {
  small: { height: '40px', fontSize: '14px', fontWeight: 700 },
  medium: { height: '46px', fontSize: '15px', fontWeight: 700 },
  large: { height: '52px', fontSize: '16px', fontWeight: 700 },
};

const spinner = keyframes`
  100% { transform: rotate(360deg); }
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
  min-width: 80px;
  padding: 10px 32px 10px 32px;
  font-weight: ${({ $size }) => buttonSizeStyles[$size || 'medium'].fontWeight};
  height: ${({ $size }) => buttonSizeStyles[$size || 'medium'].height};
  font-size: ${({ $size }) => buttonSizeStyles[$size || 'medium'].fontSize};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  ${({ $color, $variant }) => {
    const main = $color === 'secondary' ? secondaryColor : primaryColor;
    if ($variant === 'outlined') {
      return css`
        background: transparent;
        color: ${main};
        border: 2px solid ${main};
        &:hover:not(:disabled) {
          background: ${main}10;
          border-color: ${main};
        }
      `;
    }
    if ($variant === 'text') {
      return css`
        background: transparent;
        color: ${main};
        border: none;
        &:hover:not(:disabled) {
          background: ${main}10;
          color: ${main};
        }
      `;
    }
    // contained
    return css`
      background: ${main};
      color: #fff;
      border: none;
      box-shadow: 0 8px 16px 0 ${primaryColor}44;
      &:hover:not(:disabled) {
        background: ${main}cc;
        box-shadow: 0 4px 16px 0 ${primaryColor}44;
      }
    `;
  }}
`;


export const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #fff;
  border-top: 2px solid #888;
  border-radius: 50%;
  margin-right: 0.5em;
  animation: ${spinner} 0.8s linear infinite;
`;
