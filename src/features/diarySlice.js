import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value:[],
}

export const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        addMemory: (state, action) => {
            state.value = action.payload
        },
        removeMemory: (state, action) => {}
    }
})

export const {addMemory, removeMemory} = diarySlice.actions

export default diarySlice.reducer