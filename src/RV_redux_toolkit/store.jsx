import { configureStore } from "@reduxjs/toolkit";
import ClientSlice from "./ClientSlice";
const Store = configureStore(
    {
        reducer:{
            clients:ClientSlice
        }
    }
)
export default Store