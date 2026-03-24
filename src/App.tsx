import { useState } from 'react';
import { Header } from '@/shared/ui/Header';
import { FormEditor } from '@/features/builder/ui/FormEditor';
import { PreviewPanel } from '@/features/preview/ui/PreviewPanel';
import { ResultView } from '@/features/result/ui/ResultView';
import { useAppStore } from '@/shared/stores/useAppStore';

export default function App() {
  const view = useAppStore((s) => s.view);
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');

  if (view === 'result') return <ResultView />;

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* 모바일 탭 */}
      <div className="flex md:hidden border-b border-border/30 pt-14">
        <button
          onClick={() => setTab('edit')}
          className={`flex-1 py-3 text-sm font-medium cursor-pointer ${tab === 'edit' ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
        >
          편집
        </button>
        <button
          onClick={() => setTab('preview')}
          className={`flex-1 py-3 text-sm font-medium cursor-pointer ${tab === 'preview' ? 'text-primary border-b-2 border-primary' : 'text-muted'}`}
        >
          미리보기
        </button>
      </div>

      {/* 데스크톱: 2-column / 모바일: 탭 전환 */}
      <main className="flex pt-14 md:pt-14">
        <div
          className={`w-full md:w-[60%] md:border-r border-border/10 px-6 md:px-8 py-6 ${tab !== 'edit' ? 'hidden md:block' : ''}`}
        >
          <FormEditor />
        </div>
        <div
          className={`w-full md:w-[40%] px-6 md:px-8 py-6 ${tab !== 'preview' ? 'hidden md:block' : ''}`}
        >
          <PreviewPanel />
        </div>
      </main>
    </div>
  );
}
