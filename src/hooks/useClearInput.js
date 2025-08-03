import { useState } from 'react';

export function useClearInput(onChange) {
  const [isClearInputIconVisible, setIsClearInputIconVisible] = useState(false);
  
  const handleOnChange = (event) => {
    const { value } = event.target; 
    onChange(value);

    if (value === '') {
      setIsClearInputIconVisible(false);
    } else {
      setIsClearInputIconVisible(true);
    }
  }

  const handleClearButtonClick = () => {
    onChange('');
    setIsClearInputIconVisible(false);
  };

  return {
    isClearInputIconVisible,
    handleOnChange,
    handleClearButtonClick
  };
}
