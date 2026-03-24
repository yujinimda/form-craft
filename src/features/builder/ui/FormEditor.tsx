import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useFormStore } from '@/shared/stores/useFormStore';
import { FieldTypeButtons } from './FieldTypeButtons';
import { SortableFieldCard } from './SortableFieldCard';
import type { DragEndEvent } from '@dnd-kit/core';

export function FormEditor() {
  const fields = useFormStore((s) => s.fields);
  const reorderFields = useFormStore((s) => s.reorderFields);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      reorderFields(String(active.id), String(over.id));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xs font-semibold text-muted uppercase tracking-wider">Form Editor</p>
      <FieldTypeButtons />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-3">
            {fields.map((field) => (
              <SortableFieldCard key={field.id} field={field} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
