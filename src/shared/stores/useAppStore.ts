import { create } from 'zustand';

interface AppStore {
  view: 'builder' | 'result';
  submittedData: Record<string, string | string[]>;
  setView: (view: 'builder' | 'result') => void;
  setSubmittedData: (data: Record<string, string | string[]>) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  view: 'builder',
  submittedData: {},
  setView: (view) => set({ view }),
  setSubmittedData: (data) => set({ submittedData: data }),
}));