import {createSlice, Slice} from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name:'modal',
    initialState:false,
    reducers: {
        showModal(state, action) {
           state.initialState = !state.initialState
        }
    }
})

export const {showModal} = modalSlice.actions;

export default modalSlice.reducer;