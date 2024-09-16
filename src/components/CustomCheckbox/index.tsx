import React, { ReactElement } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from './custom_checkbox.module.scss';

type TCustomCheckbox = {
  name: string;
  id: string;
  register: UseFormRegisterReturn;
  children: ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomCheckbox = ({ name, id, register, children, onChange }: TCustomCheckbox) => {
  return (
    <div className={styles.customCheckboxContainer} data-testid={`custom-checkbox-${name}`}>
      <div className={styles.checkboxContainer}>
        <input name={name} id={id} type='checkbox' {...register} onChangeCapture={onChange} />
        <span className={styles.customCheckbox} />
      </div>
      {children}
    </div>
  );
};

export default CustomCheckbox;
