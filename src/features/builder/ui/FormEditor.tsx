import { useFormStore } from '@/shared/stores/useFormStore';
import { FieldTypeButtons } from './FieldTypeButtons';
import { FieldCard } from './FieldCard';

export function FormEditor() {
  const fields = useFormStore((s) => s.fields);

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider">Form Editor</p>
      <FieldTypeButtons />
      <div className="flex flex-col gap-3">
        {fields.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </div>
    </div>
  );
}
