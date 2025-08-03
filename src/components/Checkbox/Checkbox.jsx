import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { CheckboxInputLabel, CheckboxInputWrapper } from './Checkbox.styles';
import { primaryColor, uncheckedColor } from '../../styles/globals';

export default function Checkbox ({ name, label, checked, disabled, onChange }) {
  const handleOnChange = () => {
    if (disabled) return;
    
    if (onChange) {
      onChange({
        target: { checked: !checked, name }
      });
    }
  }

  return (
    <CheckboxInputWrapper>
      <input
        id={name}
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
      />
      <span
        onClick={handleOnChange}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer', marginRight: 8 }}
        aria-disabled={disabled}
        role="checkbox"
        aria-checked={checked}
      >
        <FontAwesomeIcon 
          icon={checked ? faCheckSquare : faSquare} 
          size="2xl" 
          style={{ color: checked ? primaryColor : uncheckedColor, backgroundColor: checked ? '#fff' : 'transparent' }} 
        />
      </span>
      {label && <CheckboxInputLabel htmlFor={name}>{label}</CheckboxInputLabel>}
    </CheckboxInputWrapper>
  )
}
