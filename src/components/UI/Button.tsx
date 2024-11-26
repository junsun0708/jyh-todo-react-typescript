import type { ComponentPropsWithoutRef, ReactNode } from '../../types/common';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = 'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 flex items-center justify-center gap-2';
  
  const variantStyles = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/50 before:content-["✨"]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500/50 before:content-["📝"]',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-500/50 before:content-["🗑️"]',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={twMerge(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        'before:font-emoji',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}; 