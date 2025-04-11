import { create } from 'zustand';

interface DataStore {
  pageDefaultData: any;
  setPageDefaultData: (data: any) => void;

  pageInfo: any;
  setPageInfo: (info: any) => void;
}

const useDataStore = create<DataStore>((set) => ({
  pageDefaultData: null,
  setPageDefaultData: (data) => set({ pageDefaultData: data }),

  pageInfo: null,
  setPageInfo: (info) => set({ pageInfo: info }),
}));

export default useDataStore;