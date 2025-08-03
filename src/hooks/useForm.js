import { useState } from 'react';

export function useForm(initial) {
  const [form, setForm] = useState(initial);

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return {
    form,
    updateField,
  };
}
