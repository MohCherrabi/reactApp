import {createSlice} from '@reduxjs/toolkit';
const intit = {db:[]}
const stagaireSlice = createSlice(
    {
        name:'stagaires',
        initialState:intit,
        reducers:{
            Add:(state, action)=>{
                state.db = [...state.db,action.payload]
            }
        }
    }
)
export default stagaireSlice.reducer
export const {Add} = stagaireSlice.actions
