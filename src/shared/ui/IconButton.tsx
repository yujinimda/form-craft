import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/shared/lib/cn';

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export function IconButton({ children, className, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn('p-1 text-muted hover:text-error transition-colors cursor-pointer', className)}
      {...props}
    >
      {children}
    </button>
  );
}
