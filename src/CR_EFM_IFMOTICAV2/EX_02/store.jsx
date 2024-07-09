import sliceStagaire from './sliceLivres';
import {configureStore} from "@reduxjs/toolkit"
const Store = configureStore(
    {
        reducer:{
            stagaires:sliceStagaire
        }
    }
)
export default Store