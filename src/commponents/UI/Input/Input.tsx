import React, { ChangeEvent, FC } from 'react';

interface Props {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string;
}
export const Input: FC<Props> = ({
  label,
  id,
  name,
  placeholder,
  onChange,
  value,
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
      <span className="helper-text hidden">Helper text</span>
    </div>
  );
};
