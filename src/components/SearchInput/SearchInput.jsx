import { SearchInputWrapper, searchIconStyle, closeIconStyle } from './SearchInput.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useClearInput } from '../../hooks/useClearInput';

export default function SearchInput ({ name, placeholder, value, disabled, onChange }) {
  const {
    isClearInputIconVisible,
    handleOnChange,
    handleClearButtonClick
  } = useClearInput(onChange);

  return (
    <SearchInputWrapper>
      <FontAwesomeIcon icon={faSearch} style={searchIconStyle} size={"sm"}/>
      <input 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
        type="text"/>
      {isClearInputIconVisible && 
        <FontAwesomeIcon 
          icon={faTimes} 
          style={closeIconStyle} 
          onClick={handleClearButtonClick} 
          size={"sm"}/>}
    </SearchInputWrapper>
  )
}
