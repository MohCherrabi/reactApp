import { createSlice } from "@reduxjs/toolkit";
const initStat = {
    dbEtudiant : [
    {Id : "Etudiant 1", Nom :"ELOUAFI ANASS", Filière :"DD WEB FULL STACK "},
    {Id : "Etudiant 2", Nom :"ETARAFI OUFAE", Filière : "DD OPTION MOBILE "},
    {Id : "Etudiant 3", Nom :"ELSABIR HAMZA", Filière : "DD WEB DESIGNER"}]
}

const sliceStagaire = createSlice({
    name:'stagaires',
    initialState:initStat,
    reducers:{
        Ajouter:(state,action) => {
            state.dbEtudiant = [...state.dbEtudiant,action.payload]
        },
        Supprimer:(state, action)=>{
            state.dbEtudiant = [...state.dbEtudiant.filter((tb)=>{
                return tb.Id !== action.payload
            })]
        }
    }
})
export default sliceStagaire.reducer
export const {Ajouter, Supprimer} = sliceStagaire.actions