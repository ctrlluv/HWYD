import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dateSelected: null,
    dateIdSelected: null,
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setDateSelected: (state, action) => {
            state.dateSelected = action.payload
        },
        setDateIdSelected: () => {},
    },
})

export const {setDateIdSelected, setDateSelected} = calendarSlice.actions

export default calendarSlice.reducer