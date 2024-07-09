import stagaireSlice from "./stagaireSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore(
    {
        reducer :{
            stagaires:stagaireSlice
        }
    }
)
export default store;