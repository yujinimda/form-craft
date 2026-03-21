import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import { cn } from '@/shared/lib/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMsg?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, errorMsg, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <input
          ref={ref}
          className={cn(
            'w-full rounded-md bg-[#E4E2E4] px-3 py-2 text-sm text-text placeholder:text-muted outline-none',
            error && 'ring-1 ring-error',
            className,
          )}
          {...props}
        />
        {error && errorMsg && <span className="text-xs text-error">{errorMsg}</span>}
      </div>
    );
  },
);
