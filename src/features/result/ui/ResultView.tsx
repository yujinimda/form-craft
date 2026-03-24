import { useFormStore } from '@/shared/stores/useFormStore';
import { useAppStore } from '@/shared/stores/useAppStore';

export function ResultView() {
  const fields = useFormStore((s) => s.fields);
  const { submittedData, setView, setSubmittedData } = useAppStore();

  const handleNewResponse = () => {
    setSubmittedData({});
    setView('builder');
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm max-w-[520px] w-full px-9 py-10">
        {/* 성공 헤더 */}
        <div className="flex flex-col items-center">
          <div className="size-12 rounded-full bg-success/10 flex items-center justify-center text-success text-2xl">
            ✓
          </div>
          <h1 className="text-xl font-medium text-text mt-4">제출 완료</h1>
          <p className="text-[13px] text-muted mt-1">응답이 성공적으로 기록되었습니다.</p>
        </div>

        {/* key-value 테이블 */}
        <div className="mt-8">
          {fields.map((field) => (
            <div
              key={field.id}
              className="flex items-center justify-between py-3 border-b border-[#F0F0F0]"
            >
              <span className="text-[13px] text-muted">{field.label || '(라벨 없음)'}</span>
              <div className="text-[13px] text-text text-right">
                {Array.isArray(submittedData[field.id]) ? (
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {(submittedData[field.id] as string[]).map((v) => (
                      <span key={v} className="bg-surface px-3 py-1 rounded-full text-xs">
                        {v}
                      </span>
                    ))}
                  </div>
                ) : (
                  submittedData[field.id] || '-'
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 버튼 */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <button
            onClick={handleNewResponse}
            className="h-11 rounded-xl border border-[#D1D5DB] text-sm text-text hover:bg-[#F9FAFB] cursor-pointer"
          >
            새 응답 작성
          </button>
          <button
            onClick={() => setView('builder')}
            className="h-11 rounded-xl bg-primary text-sm text-white hover:bg-primary-hover cursor-pointer"
          >
            폼으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
