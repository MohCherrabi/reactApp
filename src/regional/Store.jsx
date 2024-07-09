import{configureStore}from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import bibliotique from './bibliotique'

const initState={
    lives:[
        {ISBN:10124,Titre:"HTML 5",Auteur:"SBAII",Prix:450,Genre:"INFORMATIQUE"},
        {ISBN:10125,Titre:"ANALYSE",Auteur:"RAHMANI",Prix:650,Genre:"MATHS"},
        {ISBN:10126,Titre:"ALGEBRE",Auteur:"RAZI",Prix:550,Genre:"MATHS"},
        {ISBN:10130,Titre:"Angular",Auteur:"SOUNI",Prix:850,Genre:"INFORMATIQUE"},
        {ISBN:10145,Titre:"redux",Auteur:"BAKOURI",Prix:920,Genre:"INFORMATIQUE"},
        {ISBN:10147,Titre:"mecanique",Auteur:"NAJJI",Prix:830,Genre:"Physique"},
    ]
}
const bibliotheque=createSlice(
    {
        name:"Bibliotheque",
        initialState:initState,
        reducers:{

        }
    }
)
const store=configureStore({
    reducer:{
        Bibliotheque:bibliotheque.reducer,
    }
})
export default store;