
import { Link, Route, Routes } from "react-router-dom";
import Rechercher from "./Rechercher.js";
import AJOUTER_ART from "./Ajouter.js";
import Acculle from "./Acculle.js";
import Autentication from "./Autentification.js";
import Deconnexion from "./Deconnexion.js";
import Supprimer from "./Supprimer.js";
import Modifier from "./Modifier.js";
export default function Home(){
    return(
        <>
            <ul>
                <Routes>
                    <Route path="/" element={<Autentication></Autentication>}/>
                    <Route path="/Deconnexion" element={<Deconnexion></Deconnexion>}/>
                    <Route path="/Ajouter" element={<AJOUTER_ART></AJOUTER_ART>}/>
                    <Route path="/Acculle" element={<Acculle/>}/>
                    <Route path="/Rechercher" element={<Rechercher/>}/>
                    <Route path="/Supprimer/:id" element={<Supprimer/>}/>
                    <Route path="/Modifier/:id" element={<Modifier/>}/>
                </Routes>
            </ul>
        </>
    )
}