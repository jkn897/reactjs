import create from 'zustand';
import { persist } from 'zustand/middleware';

let appStore = (set) => ({
    doOpen: true,
    updateOpen: (doOpen) => set((state) => ({ doOpen: doOpen })),
});

appStore = persist(appStore, { name: 'my_app_store' });
export const useAppStore = create(appStore);