import { FieldTypeButtons } from './FieldTypeButtons';

export function FormEditor() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider">Form Editor</p>
      <FieldTypeButtons />
    </div>
  );
}
