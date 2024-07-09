import { configureStore } from "@reduxjs/toolkit";
import listeLivres from "./sliceLivres";
const store = configureStore(
    {
        reducer:{
            livres:listeLivres,
        }
    }
)
export default store;