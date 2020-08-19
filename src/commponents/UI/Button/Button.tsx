import React, { FC, FormEvent } from 'react';

interface Props {
  onClick: (event: FormEvent) => void;
  className: string;
}
export const Button: FC<Props> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
