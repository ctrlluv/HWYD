import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value:(''),
}

export const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addMemory: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {addMemory} = diarySlice.actions

export default diarySlice.reducer