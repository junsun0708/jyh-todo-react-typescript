import type { ComponentPropsWithoutRef, ReactNode } from '../../types/common';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends ComponentPropsWithoutRef<'span'> {
  variant?: 'high' | 'medium' | 'low';
  children: ReactNode;
}

export const Badge = ({ variant = 'medium', children, className }: BadgeProps) => {
  const variantStyles = {
    high: 'bg-danger-100 text-danger-800 border-danger-200 before:content-["❗"]',
    medium: 'bg-warning-100 text-warning-800 border-warning-200 before:content-["⚠️"]',
    low: 'bg-success-100 text-success-800 border-success-200 before:content-["✅"]',
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border',
        'before:mr-1 before:font-emoji',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}; 