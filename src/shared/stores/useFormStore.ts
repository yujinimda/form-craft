import { create } from 'zustand';
import type { FieldType, FormField } from '@/shared/types/form';

interface FormStore {
  title: string;
  fields: FormField[];
  setTitle: (title: string) => void;
  addField: (type: FieldType) => void;
  removeField: (id: string) => void;
  updateField: (id: string, partial: Partial<FormField>) => void;
  reorderFields: (activeId: string, overId: string) => void;
  addOption: (fieldId: string) => void;
  removeOption: (fieldId: string, optionId: string) => void;
  updateOption: (fieldId: string, optionId: string, value: string) => void;
}

// 고유 ID 생성
const uid = () => crypto.randomUUID();

export const useFormStore = create<FormStore>((set) => ({
  title: '새 폼',
  fields: [],

  // 폼 제목 변경
  setTitle: (title) => set({ title }),

  // 필드 추가
  addField: (type) =>
    set((s) => ({
      fields: [
        ...s.fields,
        {
          id: uid(),
          type,
          label: '',
          placeholder: '',
          required: false,
          options: ['select', 'checkbox', 'radio'].includes(type)
            ? [{ id: uid(), value: '' }]
            : [],
        },
      ],
    })),

  // 필드 삭제
  removeField: (id) =>
    set((s) => ({ fields: s.fields.filter((f) => f.id !== id) })),

  // 필드 속성 수정
  updateField: (id, partial) =>
    set((s) => ({
      fields: s.fields.map((f) => (f.id === id ? { ...f, ...partial } : f)),
    })),

  // 드래그앤드롭 순서 변경 
  reorderFields: (activeId, overId) =>
    set((s) => {
      const oldIdx = s.fields.findIndex((f) => f.id === activeId);
      const newIdx = s.fields.findIndex((f) => f.id === overId);
      if (oldIdx === -1 || newIdx === -1 || oldIdx === newIdx) return s;
      const next = [...s.fields];
      const [moved] = next.splice(oldIdx, 1); 
      next.splice(newIdx, 0, moved);
      return { fields: next };
    }),

  // 옵션 추가 (select, checkbox, radio)
  addOption: (fieldId) =>
    set((s) => ({
      fields: s.fields.map((f) =>
        f.id === fieldId
          ? { ...f, options: [...f.options, { id: uid(), value: '' }] }
          : f,
      ),
    })),

  // 옵션 삭제
  removeOption: (fieldId, optionId) =>
    set((s) => ({
      fields: s.fields.map((f) =>
        f.id === fieldId
          ? { ...f, options: f.options.filter((o) => o.id !== optionId) }
          : f,
      ),
    })),

  // 옵션 값 수정
  updateOption: (fieldId, optionId, value) =>
    set((s) => ({
      fields: s.fields.map((f) =>
        f.id === fieldId
          ? { ...f, options: f.options.map((o) => (o.id === optionId ? { ...o, value } : o)) }
          : f,
      ),
    })),
}));