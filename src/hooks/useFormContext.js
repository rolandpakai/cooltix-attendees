import { useContext } from 'react';
import { FormContext } from '../contexts/Form/FormContext';

export function useFormContext() {
  return useContext(FormContext);
}