import React from 'react';
import './Button.scss';

interface Props {
  children?: React.ReactElement | string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

export const Button = ({ handleClick, fullWidth, children, type = 'button' }: Props) => {
  return (
    <button className={`button ${fullWidth ? 'button--full-width' : ''}`} type={type} onClick={handleClick}>{children}</button>
  );
}

export default Button;
