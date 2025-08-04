import React from 'react';
import { StyledSearchContainer, Stack, ErrorMessage } from './SearchContainer.styles';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';

export default function SearchContainer({ form, fieldName, placeholder, buttonLabel, error, loading, updateField, onSearch, additionalFields }) {
  return (
    <StyledSearchContainer>
      <Stack>
        <SearchInput 
          name={fieldName}
          placeholder={placeholder}
          value={form[fieldName]}
          onChange={value => updateField(fieldName, value)}
          validation={{ required: false, minLength: 3 }}
          disabled={loading}
        />
        <Button variant={"primary"} size={"small"} onClick={onSearch}>{buttonLabel}</Button>
      </Stack>
      {additionalFields && additionalFields.map((field, index) => (
        <React.Fragment key={index}>{field}</React.Fragment>
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledSearchContainer>
  )
}
