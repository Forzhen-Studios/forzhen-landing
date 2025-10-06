import { create } from "zustand";

const useAnimationStore = create((set) => ({
  exit: false,
  setExit: (exit: boolean) => set({ exit }),
}));

export default useAnimationStore;
