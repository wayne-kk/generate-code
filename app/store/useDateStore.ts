import { create } from 'zustand';

interface DataStore {
  data: any; // 存储数据的类型
  setData: (data: any) => void; // 设置数据的方法
}

const useDataStore = create<DataStore>((set) => ({
  data: null, // 初始化数据为 null
  setData: (data) => set({ data }), // 设置数据
}));

export default useDataStore;