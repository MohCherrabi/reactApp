import { configureStore } from "@reduxjs/toolkit";
import etudiantSlice from './ListEtudiant';
const StoreEtu = configureStore(
    {
        reducer:{
            etudiants:etudiantSlice
        }
    }
)
export default StoreEtu;