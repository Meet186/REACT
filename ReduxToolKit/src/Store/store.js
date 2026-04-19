import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Store/Features/counter/counterSlice'
import userReducer from '../Store/Features/counter/Users/userSlice'
export const store = configureStore({
  reducer: {
    counter : counterReducer,
    userReducer,
  },
})