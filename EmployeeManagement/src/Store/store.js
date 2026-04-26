import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './features/popup/popupSlice'
import employeeReducer from './features/empolyee/employeeSlice'
export const store = configureStore({
  reducer: {
    popupReducer,
    employeeReducer,
  
  },
})