import { configureStore } from '@reduxjs/toolkit'
import locationsSlice from './slices/locationsSlice'

export const store = configureStore({
  reducer: {
    locationsSlice
  },
})