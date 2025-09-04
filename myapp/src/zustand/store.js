import { create } from 'zustand';

const usePageStore = create((set) => ({
    page: 'main',
    
    toPage: (page) => {
        set({page: page})
    }
}))

export default usePageStore