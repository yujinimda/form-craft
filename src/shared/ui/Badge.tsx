import { cn } from '@/shared/lib/cn';

const badgeStyles = {
  text: 'bg-[#EDF4FF] text-[#0071E3]',
  textarea: 'bg-[#E8F5E9] text-[#2E7D32]',
  select: 'bg-[#FFF3E0] text-[#E65100]',
  checkbox: 'bg-[#EDF4FF] text-[#0071E3]',
  radio: 'bg-[#F3E8FF] text-[#7C3AED]',
};

interface BadgeProps {
  type: keyof typeof badgeStyles;
  className?: string;
}

const labels: Record<keyof typeof badgeStyles, string> = {
  text: 'TEXT FIELD',
  textarea: 'TEXTAREA',
  select: 'SELECT MENU',
  checkbox: 'CHECKBOX GROUP',
  radio: 'RADIO GROUP',
};

export function Badge({ type, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-tight',
        badgeStyles[type],
        className,
      )}
    >
      {labels[type]}
    </span>
  );
}
