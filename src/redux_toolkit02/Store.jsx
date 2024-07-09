import {configureStore} from "@reduxjs/toolkit";
import GroupsSlice from './Groups';
const Store = configureStore(
    {
        reducer:{
            groups:GroupsSlice
        }
    }
)
export default Store;
