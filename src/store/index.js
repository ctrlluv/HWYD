import { configureStore } from '@reduxjs/toolkit'
import diarySlice from '../features/diarySlice'
import calendarSlice from '../features/calendarSlice'
import { authApi } from '../services/authApi'
import authSlice from '../features/authSlice'



export const store = configureStore({
  reducer: {
    diary: diarySlice, 
    calendar: calendarSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
})