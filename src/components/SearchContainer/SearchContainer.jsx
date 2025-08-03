import React from 'react';
import { StyledSearchContainer, Stack, ErrorMessage } from './SearchContainer.styles';
import SearchInput from '../SearchInput/SearchInput';
import Button from '../Button/Button';

export default function SearchContainer({ form, placeholder, buttonLabel, error, loading, updateField, onSearch, extraFields }) {
  return (
    <StyledSearchContainer>
      <Stack>
        <SearchInput 
          name={"keyword"}
          placeholder={placeholder}
          value={form.keyword}
          onChange={value => updateField('keyword', value)}
          validation={{ required: false, minLength: 3 }}
          disabled={loading}
        />
        <Button variant={"primary"} size={"small"} onClick={onSearch}>{buttonLabel}</Button>
      </Stack>
      {extraFields && extraFields.map((field, index) => (
        <React.Fragment key={index}>{field}</React.Fragment>
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledSearchContainer>
  )
}
