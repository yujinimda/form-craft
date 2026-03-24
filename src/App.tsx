import { Header } from '@/shared/ui/Header';
import { FormEditor } from '@/features/builder/ui/FormEditor';
import { PreviewPanel } from '@/features/preview/ui/PreviewPanel';
import { ResultView } from '@/features/result/ui/ResultView';
import { useAppStore } from '@/shared/stores/useAppStore';

export default function App() {
  const view = useAppStore((s) => s.view);

  if (view === 'result') return <ResultView />;

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="flex pt-14">
        <div className="w-[60%] border-r border-border/10 px-8 py-6">
          <FormEditor />
        </div>
        <div className="w-[40%] px-8 py-6">
          <PreviewPanel />
        </div>
      </main>
    </div>
  );
}
