import { create } from 'zustand';

interface GlobalState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  userInfo: {
    username: string;
    avatar: string;
  } | null;
  setUserInfo: (userInfo: GlobalState['userInfo']) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  userInfo: null,
  setUserInfo: (userInfo) => set({ userInfo }),
}));