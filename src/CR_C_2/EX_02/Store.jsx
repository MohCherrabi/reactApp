import sliceLivres from "./sliceLivres";
import {configureStore} from "@reduxjs/toolkit";
const store = configureStore(
    {
        reducer:{
            livres:sliceLivres
        }
    }
)
export default store;