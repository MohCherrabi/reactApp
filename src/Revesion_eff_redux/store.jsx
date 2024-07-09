import { configureStore } from "@reduxjs/toolkit";
import PersonneSlice from "./personneSlice";

const Store = configureStore(
    {
        reducer:{
            personnes:PersonneSlice
        }
    }
)
export default Store;