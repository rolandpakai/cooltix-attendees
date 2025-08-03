import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StatusIconContainer, StatusIconLabel } from './StatusIcon.styles';

export default function StatusIcon({ label, ...rest }) {
  return (
    <StatusIconContainer>
      <FontAwesomeIcon {...rest} />
      <StatusIconLabel>{label}</StatusIconLabel>
    </StatusIconContainer>
  );
}