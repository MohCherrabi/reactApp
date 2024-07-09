import { Route, Routes } from "react-router-dom";
import Afficher from "./afficher";
import Ajouter from "./ajouter";
import Supprimer from "./supprimer";
import ModifierElem from "./modfiier";

export default function RoutesP(props){



    
    return<Routes>
        <Route element={<Ajouter table={props.table}/>} path="/Ajouter"/>
        <Route element={<Afficher table={props.table}/>} path="/"/>
        <Route element={<Supprimer table={props.table}/>} path="/Supprimer/:id"/>
        <Route element={<ModifierElem table={props.table}/>} path="/Modifier/:id"/>

    </Routes>
}