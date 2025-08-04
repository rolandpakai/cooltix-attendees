import { useForm } from '../../hooks/useForm';
import { FormContext } from './FormContext';

export function FormProvider({ initialState, children }) {
  const { form, updateField } = useForm(initialState);

  return (
    <FormContext.Provider value={{ form, updateField }}>
      {children}
    </FormContext.Provider>
  );
}
