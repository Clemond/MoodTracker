import { create } from "zustand";

interface ICurrentDateStore {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  resetCurrentDate: () => void;
}

export const useCurrentDateStore = create<ICurrentDateStore>((set) => ({
  currentDate: new Date(),
  setCurrentDate: (date: Date) => set({ currentDate: date }),
  resetCurrentDate: () => set({ currentDate: new Date() })
}));
