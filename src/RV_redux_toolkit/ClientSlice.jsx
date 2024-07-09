import { createSlice } from "@reduxjs/toolkit"

const initi = {
    db:[
        {
            id:1,
            name:'John',
            age:18
        },
        {
            id:2,
            name:'John',
            age:18
        },
        {
            id:3,
            name:'John',
            age:18
        },
        {
            id:4,
            name:'John',
            age:18
        },
        {
            id:5,
            name:'John',
            age:18
        }
    ]
}
const ClientSlice = createSlice(
    {
        name:'clients',
        initialState:initi,
        reducers:{
            ADD:(state, action) =>{
                return state.db = [...state.db, action.payload]
            }
        }
    }
)
export default ClientSlice.reducer
export const {ADD} = ClientSlice.actions