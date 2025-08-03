import { DateInputWrapper, DateInputLabel, closeIconStyle } from './DateInput.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useClearInput } from '../../hooks/useClearInput';

export default function DateInput ({ name, placeholder, label, value, disabled, onChange }) {
  const {
    isClearInputIconVisible,
    handleOnChange,
    handleClearButtonClick
  } = useClearInput(onChange);
  
  return (
    <div>
      {label && <DateInputLabel htmlFor={name}>{label}</DateInputLabel>}
      <DateInputWrapper>
        <input 
          id={name} 
          name={name} 
          placeholder={placeholder} 
          value={value} 
          disabled={disabled}
          onChange={handleOnChange} 
          type="date"/>
        {isClearInputIconVisible && 
          <FontAwesomeIcon 
            icon={faTimes} 
            style={closeIconStyle} 
            onClick={handleClearButtonClick} 
            size={"sm"}/>}
      </DateInputWrapper>
    </div>
  )
}
