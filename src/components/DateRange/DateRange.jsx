import { StyledDateRange, Separator } from './DateRange.styles';
import DateInput from '../DateInput/DateInput';

export default function DateRange ({ from, until, loading, onChange }) {
  return (
    <StyledDateRange>
      <DateInput 
        name={from.name} 
        label={from.label}
        placeholder={from.placeholder}
        value={from.value}
        onChange={value => onChange(from.name, value)}
        validation={{ required: false, idDate: true }}
        disabled={loading}
      />
      <Separator>
        -
      </Separator>
      <DateInput 
        name={until.name} 
        label={until.label}
        placeholder={until.placeholder}
        value={until.value}
        onChange={value => onChange(until.name, value)}
        validation={{ required: false, idDate: true }}
        disabled={loading}
      />
    </StyledDateRange>
  )
}
