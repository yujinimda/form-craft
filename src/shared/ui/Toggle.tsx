import { cn } from '@/shared/lib/cn';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function Toggle({ checked, onChange, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        'relative h-4 w-8 rounded-full transition-colors cursor-pointer',
        checked ? 'bg-primary-hover' : 'bg-[#E4E2E4]',
        className,
      )}
    >
      <span
        className={cn(
          'absolute top-[2px] size-3 rounded-full bg-white border border-[#D1D5DB] transition-transform',
          checked ? 'translate-x-[16px] border-white' : 'translate-x-[2px]',
        )}
      />
    </button>
  );
}
