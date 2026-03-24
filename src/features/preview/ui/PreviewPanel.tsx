import { useFormStore } from '@/shared/stores/useFormStore';

export function PreviewPanel() {
  const { title, fields } = useFormStore();

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
                  className="bg-surface rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted outline-none"
                  placeholder={field.placeholder}
                />
              )}

              {field.type === 'textarea' && (
                <textarea
                  className="bg-surface rounded-lg px-4 py-3 text-sm text-text placeholder:text-muted outline-none resize-none h-24"
                  placeholder={field.placeholder}
                />
              )}

              {field.type === 'select' && (
                <select className="bg-surface rounded-lg px-4 py-3 text-sm text-text outline-none">
                  <option value="">선택하세요</option>
                  {field.options.map((opt) => (
                    <option key={opt.id} value={opt.value}>
                      {opt.value || '옵션'}
                    </option>
                  ))}
                </select>
              )}

              {field.type === 'checkbox' && (
                <div className="flex flex-col gap-3">
                  {field.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="size-5 rounded border-border accent-primary"
                      />
                      <span className="text-sm text-muted">{opt.value || '옵션'}</span>
                    </label>
                  ))}
                </div>
              )}

              {field.type === 'radio' && (
                <div className="flex flex-col gap-3">
                  {field.options.map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3">
                      <input type="radio" name={field.id} className="size-5 accent-primary" />
                      <span className="text-sm text-muted">{opt.value || '옵션'}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="pt-8">
          <button className="w-full h-11 bg-primary text-white text-sm rounded-full hover:bg-primary-hover cursor-pointer">
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
