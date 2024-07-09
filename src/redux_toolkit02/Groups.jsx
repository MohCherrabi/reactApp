import { createSlice } from "@reduxjs/toolkit";
const intSGroup = {
  db: [
    {
      id: 1,
      nom: "FS201",
    },
    {
      id: 6,
      nom: "FS202",
    },
    {
      id: 5,
      nom: "FS203",
    },
    {
      id: 4,
      nom: "FS204",
    },
    {
      id: 3,
      nom: "FS205",
    },
    {
      id: 2,
      nom: "FS206",
    },
  ],
};
const GroupsSlice = createSlice({
  name: "groups",
  initialState: intSGroup,
  reducers: {
    AddGroup: (state, action) => {
      state.db = [...state.db, action.payload];
    },
    DeleteGroupe: (state, action) => {
      state.db = [...state.db.filter((e) => e.id !== action.payload)];
    },
    UpdateGroup: (state, action) => {
      state.db.map((groupe) => {
        if (groupe.id == action.payload.id) groupe.nom = action.payload.nom;
      });
    },
  },
});
export default GroupsSlice.reducer;
export const { AddGroup, DeleteGroupe, UpdateGroup} = GroupsSlice.actions;
