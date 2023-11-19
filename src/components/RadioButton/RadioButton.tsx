import React, { FC, InputHTMLAttributes, useState, memo } from 'react';

import { HandleChangeProps } from '../TextField/types';
import styles from './RadioButton.module.scss';

export interface RadioOption {
  id: string;
  value: string;
  label: string;
}

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  options: RadioOption[];
  name: string;
  handleChange?: (params: HandleChangeProps) => void;
}

const RadioButton: FC<RadioButtonProps> = ({
  options,
  handleChange,
  label,
  name,
  ...rest
}) => {
  const [value, setValue] = useState(options[0].value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    setValue(inputValue);
    handleChange?.({ name, value: inputValue });
  };

  return (
    <div className={styles.radio}>
      <span className={styles.label}>{label}:</span>
      {options.map(({ id, label, ...option }) => (
        <div key={id} className={styles.container}>
          <label htmlFor={id}>{label}</label>
          <input
            id={id}
            type='radio'
            onChange={handleInputChange}
            checked={value === option.value}
            {...option}
            {...rest}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(RadioButton);
