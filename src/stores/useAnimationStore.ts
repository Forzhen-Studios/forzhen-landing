import { create } from "zustand";

type AnimationState = {
  exit: boolean;
  setExit: (exit: boolean) => void;
};

const useAnimationStore = create<AnimationState>((set) => ({
  exit: false,
  setExit: (exit: boolean) => set({ exit }),
}));

export default useAnimationStore;
