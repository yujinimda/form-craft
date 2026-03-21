import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover rounded-full',
  outline: 'bg-white border border-[#D1D5DB] text-text hover:bg-[#F9FAFB] rounded-xl',
  ghost:
    'bg-white border border-border/20 shadow-sm text-text hover:border-primary hover:text-primary rounded-full',
};

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-6 text-sm',
};

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
