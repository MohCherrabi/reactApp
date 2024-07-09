import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  dbEtudiant: [
    { id: 101, nomg: "FS201", Nom: "ALIOUI Ahlam", moyG: 14.5 },
    { id: 102, nomg: "FS202", Nom: "OUAFI BADR", moyG: 13 },
    { id: 103, nomg: "FS205", Nom: "RAJJI SALOUA", moyG: 15 },
    { id: 104, nomg: "FS206", Nom: "MOUFID RAJAE", moyG: 17 },
    { id: 105, nomg: "FS201", Nom: "NAJJI KHALID", moyG: 15.5 },
    { id: 106, nomg: "FS203", Nom: "NAOUI ALI", moyG: 16 },
    { id: 107, nomg: "FS201", Nom: "MARDI OUAFAE", moyG: 18 },
    { id: 108, nomg: "FS202", Nom: "KHALDI OUALID", moyG: 17 },
  ],
};
const etudiantSlice=createSlice({
    name: "etudiants",
    initialState:initialState,
    reducers:{
    }

})
export default etudiantSlice.reducer;