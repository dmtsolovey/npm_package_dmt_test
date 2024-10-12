'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

function Button({ label, onClick, type = 'button', style }: ButtonProps) {
  return (
      <button type={type} style={style} onClick={onClick}>
        {label} !!!
      </button>
  );
}

export default Button;