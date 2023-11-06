import { configureStore } from '@reduxjs/toolkit'
import diarySlice from '../features/diarySlice'
import calendarSlice from '../features/calendarSlice'


export const store = configureStore({
  reducer: {
    diary: diarySlice, 
    calendar: calendarSlice,
  },
})