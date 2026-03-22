import type { FormField } from '@/shared/types/form';
import { useFormStore } from '@/shared/stores/useFormStore';
import { Badge } from '@/shared/ui/Badge';
import { Input } from '@/shared/ui/Input';
import { Toggle } from '@/shared/ui/Toggle';

interface FieldCardProps {
  field: FormField;
}

export function FieldCard({ field }: FieldCardProps) {
  const { updateField, removeField, addOption, removeOption, updateOption } = useFormStore();

  return (
    <div className="bg-white border border-border/10 rounded-xl shadow-sm px-4 py-4 flex gap-3">
      {/* 드래그 핸들 */}
      <div className="flex items-center text-[#C7C7CC] cursor-grab text-xl select-none">⠿</div>

      <div className="flex-1 flex flex-col gap-4">
        {/* 상단: 뱃지 + 필수 토글 + 삭제 */}
        <div className="flex items-center justify-between">
          <Badge type={field.type} />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted">필수</span>
              <Toggle
                checked={field.required}
                onChange={(v) => updateField(field.id, { required: v })}
              />
            </div>
            <button
              onClick={() => removeField(field.id)}
              className="text-muted hover:text-error text-sm cursor-pointer"
            >
              🗑
            </button>
          </div>
        </div>

        {/* Label + Placeholder */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-muted">Label</span>
            <Input
              value={field.label}
              onChange={(e) => updateField(field.id, { label: e.target.value })}
              placeholder="질문을 입력하세요"
            />
          </div>
          {(field.type === 'text' || field.type === 'textarea') && (
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-[11px] font-semibold text-muted">Placeholder</span>
              <Input
                value={field.placeholder}
                onChange={(e) => updateField(field.id, { placeholder: e.target.value })}
                placeholder="안내 텍스트"
              />
            </div>
          )}
        </div>

        {/* 옵션 리스트 (select, checkbox, radio) */}
        {['select', 'checkbox', 'radio'].includes(field.type) && (
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-muted">Options</span>
            {field.options.map((opt) => (
              <div key={opt.id} className="flex gap-2 items-center">
                <Input
                  className="flex-1"
                  value={opt.value}
                  onChange={(e) => updateOption(field.id, opt.id, e.target.value)}
                  placeholder="옵션 입력"
                />
                <button
                  onClick={() => removeOption(field.id, opt.id)}
                  className="text-muted hover:text-error text-xs cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={() => addOption(field.id)}
              className="border-2 border-dashed border-border/30 rounded-md py-2 text-xs text-primary font-medium cursor-pointer hover:border-primary/50"
            >
              + add option
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
