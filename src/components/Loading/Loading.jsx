import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoadingContainer, fontAwesomeIconStyle } from './Loading.styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <FontAwesomeIcon icon={faSpinner} size={"6x"} style={fontAwesomeIconStyle} spin />
    </LoadingContainer>
  );
}