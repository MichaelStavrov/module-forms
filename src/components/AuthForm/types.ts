import { HTMLInputTypeAttribute, ReactNode } from 'react';
import { RadioOption } from '../RadioButton/RadioButton';

export interface FieldParams {
  type: HTMLInputTypeAttribute;
  name: string;
  label: string;
  placeholder: string;
  initialValue?: string;
  autoFocus?: boolean;
  radioOptions?: RadioOption[];
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
}

export type AuthFormType = 'signIn' | 'signUp';
