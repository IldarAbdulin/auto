import * as React from 'react';
import { Input } from './input';

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      value = value.replace(/[^0-9+]/g, '');

      if (value.includes('+')) {
        value = '+' + value.replace(/\+/g, '').replace(/[^0-9]/g, '');
      }

      e.target.value = value;
      onChange?.(e);
    };

    return (
      <Input
        ref={ref}
        type="text"
        inputMode="numeric"
        pattern="^\+?[0-9]*$"
        placeholder="+996"
        className={`bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-600 text-sm sm:text-base ${className}`}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
