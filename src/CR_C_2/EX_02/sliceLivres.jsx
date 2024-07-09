import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const ints = {
  Ldb: [
    {
      Titre: "Robotique",
      nbpages: "196",
      Auteur: "SABBAI",
      photo: "photo1.jpg",
    },
    { Titre: "Réseaux", nbpages: "59", Auteur: "Tanger", photo: "photo2.jpg" },
    {
      Titre: "Dév Informatique",
      nbpages: "88",
      Auteur: "MEKOUAR",
      photo: "photo3.jpg",
    },
    {
      Titre: "Informatique",
      nbpages: "125",
      Auteur: "HASSOUNI",
      photo: "photo4.jpg",
    },
  ],
};
const sliceLivres = createSlice({
  name: "livres",
  initialState: ints,
  reducers: {
    Ajouter: (state, action) => {
      state.Ldb = [...state.Ldb, action.payload];
    },
    Supprimer: (state, action) => {
      state.Ldb = [...state.Ldb.filter((et) => et.Titre !== action.payload)];
    },
  },
});
export default sliceLivres.reducer;
export const { Ajouter, Supprimer } = sliceLivres.actions;
