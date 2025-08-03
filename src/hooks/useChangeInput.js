import { useState } from 'react';

export const useInputChange = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [isClearInputIconVisible, setIsClearInputIconVisible] = useState(false);

  const handleOnChange = (event) => {
    const { value } = event.target;

    if (value !== '') {
        setValue(value);
        setIsClearInputIconVisible(true);
    } else {
      setIsClearInputIconVisible(false);
    }
  };

  const handleClearButtonClick = () => {
    setValue('');
    setIsClearInputIconVisible(false);
  };

  return {
    value,
    isClearInputIconVisible,
    handleOnChange,
    handleClearButtonClick,
  };
}