export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm border-b border-border/50">
      <span className="text-base font-semibold text-text">FormCraft</span>
      <span className="text-sm text-muted cursor-pointer hover:text-primary">제출 결과</span>
    </header>
  );
}
