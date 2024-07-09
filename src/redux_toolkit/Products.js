import {configureStore} from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';
const intS = {
    db:[
    {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      // {
      //   id: 4,
      //   name: 'Grey Brim',
      //   imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      //   price: 25
      // },
      // {
      //   id: 5,
      //   name: 'Green Beanie',
      //   imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
      //   price: 18
      // },
      // {
      //   id: 6,
      //   name: 'Palm Tree Cap',
      //   imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
      //   price: 14
      // },
      // {
      //   id: 7,
      //   name: 'Red Beanie',
      //   imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
      //   price: 18
      // },
      // {
      //   id: 8,
      //   name: 'Wolf Cap',
      //   imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
      //   price: 14
      // },
      // {
      //   id: 9,
      //   name: 'Blue Snapback',
      //   imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
      //   price: 16
      // },
      // {
      //   id: 10,
      //   name: 'Adidas NMD',
      //   imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
      //   price: 220
      // },
      // {
      //   id: 11,
      //   name: 'Adidas Yeezy',
      //   imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
      //   price: 280
      // },
      // {
      //   id: 12,
      //   name: 'Black Converse',
      //   imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
      //   price: 110
      // },
    ]
    };

const productsSlice = createSlice({
    name:'products',
    initialState: intS,
    reducers:{
        addProduct:(state, action) =>{state.db = [...state.db, action.payload]},
        deleteProduct:(state, action) =>{state.db = [...state.db.filter((e)=>e.id !== action.payload)]}
    }
})
const store = configureStore({
  reducer:{
      products: productsSlice.reducer
  }
})
export default store;
export const {addProduct, deleteProduct} = productsSlice.actions;