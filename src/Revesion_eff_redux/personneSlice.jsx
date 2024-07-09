import { createSlice } from "@reduxjs/toolkit"

const initi = {
    data:[
        {
        id:1,
        nom:"John",
        prenom:"Doe"
    },
    {
        id:2,
        nom:"mohamed",
        prenom:"cherrabi"
    }
]
}

const PersonneSlice = createSlice(
    {
        name:'personnes',
        initialState:initi,
        reducers:{
            Add : (state, action)=>{
                state.data = [...state.data,action.payload];
            },
            Supprimer : (state, action)=>{
                state.data = [...state.data.filter((el)=>el.id !== action.payload)];
            },
            Enregister : (state, action)=>{
                const index = state.data.findIndex((per)=>per.id == action.payload.id)
                state.data.splice(index, 1,action.payload)
            }

        }
    }
)
export default PersonneSlice.reducer
export const {Add, Supprimer, Enregister} = PersonneSlice.actions