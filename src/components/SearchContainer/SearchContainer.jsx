import React from 'react';
import { StyledSearchContainer, Stack, ErrorMessage, SearchButton } from './SearchContainer.styles';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';

export default function SearchContainer({ form, fieldName, placeholder, buttonLabel, error, loading, updateField, onSearch, additionalFields }) {
  return (
    <StyledSearchContainer>
      <div>
        <Stack>
          <SearchInput 
            name={fieldName}
            placeholder={placeholder}
            value={form[fieldName]}
            onChange={value => updateField(fieldName, value)}
            validation={{ required: false, minLength: 3 }}
            disabled={loading}
          />
        </Stack>
        <Stack>
          {additionalFields && additionalFields.map((field, index) => (
            <React.Fragment key={index}>{field}</React.Fragment>
          ))}
        </Stack>
      </div>
      <SearchButton>
        <Button variant={"primary"} size={"small"} onClick={onSearch}>{buttonLabel}</Button>
      </SearchButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledSearchContainer>
  )
}
