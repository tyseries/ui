import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className }) => {
  const baseStyles = 'px-4 py-2 rounded-full font-semibold outline-none';
  
  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-primary/10 text-primary',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${className || ''}`;

  return (
    <button 
      className={buttonClass.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;