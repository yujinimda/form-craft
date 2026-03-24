import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FieldCard } from './FieldCard';
import type { FormField } from '@/shared/types/form';

interface SortableFieldCardProps {
  field: FormField;
}

export function SortableFieldCard({ field }: SortableFieldCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: field.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <FieldCard field={field} dragListeners={listeners} />
    </div>
  );
}
