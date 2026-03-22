import { useFormStore } from '@/shared/stores/useFormStore';
import { Button } from '@/shared/ui/Button';
import type { FieldType } from '@/shared/types/form';

const fieldTypes: { type: FieldType; label: string }[] = [
  { type: 'text', label: 'Text' },
  { type: 'textarea', label: 'Textarea' },
  { type: 'select', label: 'Select' },
  { type: 'checkbox', label: 'Checkbox' },
  { type: 'radio', label: 'Radio' },
];

export function FieldTypeButtons() {
  const addField = useFormStore((s) => s.addField);

  return (
    <div className="flex gap-2 flex-wrap">
      {fieldTypes.map(({ type, label }) => (
        <Button key={type} variant="ghost" size="sm" onClick={() => addField(type)}>
          {label}
        </Button>
      ))}
    </div>
  );
}
