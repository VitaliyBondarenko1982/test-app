import React, { ChangeEvent, FC } from 'react';
import cx from 'classnames';

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string;
  isValid: boolean;
}
export const Input: FC<Props> = ({
  label,
  id,
  name,
  placeholder,
  onChange,
  value,
  isValid,
}) => {
  return (
    <div className="input-field">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="yellow-input"
        id={id}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
      <span className={cx('helper-text', { hidden: isValid })}>{`Field ${name} is required`}</span>
    </div>
  );
};
