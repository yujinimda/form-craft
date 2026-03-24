import { useState } from 'react';
import { useFormStore } from '@/shared/stores/useFormStore';
import { useAppStore } from '@/shared/stores/useAppStore';

export function PreviewPanel() {
  const { title, fields } = useFormStore();

  // 각 필드별 입력값 저장
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  // 에러 상태
  const [errors, setErrors] = useState<Record<string, string>>({});
  // 제출 완료 여부
  const { setView, setSubmittedData } = useAppStore();

  const updateValue = (id: string, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    // 입력하면 에러 해제
    setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  // 체크박스 토글
  const toggleCheckbox = (fieldId: string, optionValue: string) => {
    const current = (values[fieldId] as string[]) || [];
    const next = current.includes(optionValue)
      ? current.filter((v) => v !== optionValue)
      : [...current, optionValue];
    updateValue(fieldId, next);
  };

  // 유효성 검사
  const validate = () => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (!field.required) return;
      const val = values[field.id];
      if (!val || (Array.isArray(val) && val.length === 0) || val === '') {
        newErrors[field.id] = '필수 항목입니다';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmittedData(values);
      setView('result');
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-muted uppercase tracking-wider">미리보기</p>
        <div className="flex gap-2">
          <span className="size-3 rounded-full bg-red-400/40" />
          <span className="size-3 rounded-full bg-orange-400/40" />
          <span className="size-3 rounded-full bg-blue-400/40" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[500px] flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-medium text-text">{title || '새 폼'}</h2>

          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label className="text-[13px] text-muted">
                {field.label || '질문을 입력하세요'}
                {field.required && <span className="text-error font-semibold ml-1">*</span>}
              </label>

              {field.type === 'text' && (
                <input
                  className={`bg-surface rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted outline-none ${errors[field.id] ? 'ring-1 ring-error' : ''}`}
                  placeholder={field.placeholder}
                  value={(values[field.id] as string) || ''}
                  onChange={(e) => updateValue(field.id, e.target.value)}
                />
              )}

              {field.type === 'textarea' && (
                <textarea
                  className={`bg-surface rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted outline-none resize-none h-24 ${errors[field.id] ? 'ring-1 ring-error' : ''}`}
                  placeholder={field.placeholder}
                  value={(values[field.id] as string) || ''}
                  onChange={(e) => updateValue(field.id, e.target.value)}
                />
              )}

              {field.type === 'select' && (
                <select
                  className={`bg-surface rounded-lg px-4 py-3 text-sm text-text outline-none ${errors[field.id] ? 'ring-1 ring-error' : ''}`}
                  value={(values[field.id] as string) || ''}
                  onChange={(e) => updateValue(field.id, e.target.value)}
                >
                  <option value="">선택하세요</option>
                  {field.options.map((opt) => (
                    <option key={opt.id} value={opt.value}>
                      {opt.value || '옵션'}
                    </option>
                  ))}
                </select>
              )}

              {field.type === 'checkbox' && (
                <div
                  className={`flex flex-col gap-3 ${errors[field.id] ? 'ring-1 ring-error rounded-lg p-2' : ''}`}
                >
                  {field.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="size-5 accent-primary"
                        checked={((values[field.id] as string[]) || []).includes(opt.value)}
                        onChange={() => toggleCheckbox(field.id, opt.value)}
                      />
                      <span className="text-sm text-muted">{opt.value || '옵션'}</span>
                    </label>
                  ))}
                </div>
              )}

              {field.type === 'radio' && (
                <div
                  className={`flex flex-col gap-3 ${errors[field.id] ? 'ring-1 ring-error rounded-lg p-2' : ''}`}
                >
                  {field.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={field.id}
                        className="size-5 accent-primary"
                        checked={(values[field.id] as string) === opt.value}
                        onChange={() => updateValue(field.id, opt.value)}
                      />
                      <span className="text-sm text-muted">{opt.value || '옵션'}</span>
                    </label>
                  ))}
                </div>
              )}

              {errors[field.id] && <span className="text-xs text-error">{errors[field.id]}</span>}
            </div>
          ))}
        </div>

        <div className="pt-8">
          <button
            onClick={handleSubmit}
            className="w-full h-11 bg-primary text-white text-sm rounded-full hover:bg-primary-hover cursor-pointer"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
