import { create } from 'zustand'

const useGlobalStore = create((set) => ({
    variables:{
        test: 'Hello World',
    },
    functions: {
    }
  
}))

export default useGlobalStore;