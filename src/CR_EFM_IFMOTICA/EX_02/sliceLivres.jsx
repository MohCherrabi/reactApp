import { createSlice } from "@reduxjs/toolkit";
const etaIntial = {
  db: [
    { Id: "Livre1", Titre: "Cours React JS ", NombresPages: 196 },
    { Id: "Livre2", Titre: "Cours Symfony ", NombresPages: 123 },
    { Id: "Livre3", Titre: "Angular", NombresPages: 187 },
  ],
};
const listeLivres = createSlice({
  name: "livres",
  initialState: etaIntial,
  reducers: {
    Ajouter:(state, action)=>{
        state.db = [...state.db,action.payload]
    },
    Supprimer:(state, action)=>{
        state.db = [...state.db.filter((tb)=>tb.Id !== action.payload)]
    }
  },
});
export default listeLivres.reducer
export const {Ajouter, Supprimer} = listeLivres.actions


