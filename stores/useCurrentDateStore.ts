import { create } from "zustand";

interface ICurrentDateStore {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
  resetCurrentDate: () => void;
  userPickedMonth: number;
  setUserPickedMonth: (month: number) => void;
}

export const useCurrentDateStore = create<ICurrentDateStore>((set) => ({
  currentDate: new Date(),
  setCurrentDate: (date: Date) => set({ currentDate: date }),
  resetCurrentDate: () => set({ currentDate: new Date() }),
  userPickedMonth: 0,
  setUserPickedMonth: (month: number) => set({ userPickedMonth: month })
}));
