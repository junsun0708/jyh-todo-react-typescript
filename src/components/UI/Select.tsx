import type { ComponentPropsWithoutRef } from '../../types/common';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  label?: string;
  options: Option[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={twMerge(
            'w-full rounded-md border border-gray-300 px-3 py-2',
            'focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500',
            error && 'border-danger-500 focus:ring-danger-500/50 focus:border-danger-500',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-danger-500">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select'; 