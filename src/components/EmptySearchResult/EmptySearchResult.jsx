import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown  } from '@fortawesome/free-regular-svg-icons';
import { EmptySearchResultContainer, fontAwesomeIconStyle } from './EmptySearchResult.styles';

export default function EmptySearchResult() {
  return (
    <EmptySearchResultContainer>
      <FontAwesomeIcon icon={faFaceFrown} size={"6x"} style={fontAwesomeIconStyle} />
    </EmptySearchResultContainer>
  );
}