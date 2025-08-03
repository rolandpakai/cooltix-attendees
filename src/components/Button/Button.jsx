

import { StyledButton, fontAwesomeIconStyle } from './Button.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

/**
 * Props:
 * - color: 'primary' | 'secondary'
 * - disabled: boolean
 * - loading: boolean
 * - size: 'small' | 'medium' | 'large'
 * - variant: 'contained' | 'outlined' | 'text'
 * - children: React.ReactNode
 * - ...rest: other button props
 */
export default function Button ({
  color = 'primary',
  disabled = false,
  loading = false,
  size = 'medium',
  variant = 'contained',
  icon,
  children,
  ...rest
}) {
  return (
    <StyledButton
      $color={color}
      disabled={disabled || loading}
      $size={size}
      $variant={variant}
      {...rest}
    >
      {loading && (
        <FontAwesomeIcon icon={faSpinner} size={"sm"} style={fontAwesomeIconStyle} spin />
      )}
      {!loading && icon && <FontAwesomeIcon icon={icon} style={fontAwesomeIconStyle} />}
      {children}
    </StyledButton>
  )
}
