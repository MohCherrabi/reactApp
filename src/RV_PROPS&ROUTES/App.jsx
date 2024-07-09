import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Afficher from "./Afficher";
import Supprimer from "./Supprimer";
import Modifier from "./Modifier";
import Rechercher from "./Rechercher";
import Ajouter from "./Ajouter";
export default function App(){
    const [Eta, setEta] = useState([
        {
            id:1,
            prenom:"nabil",
            marie:false,
            age:20
        },
        {
            id:2,
            prenom:"redione",
            marie:true,
            age:25
        },
        {
            id:3,
            prenom:"farid",
            marie:false,
            age:20
        },
        {
            id:4,
            prenom:"mohamed",
            marie:false,
            age:20
        }
    ]);
    return(
        <div>
            <ul>
                <li>
                    <Link to='/'>Afficher</Link>
                </li>
                <li>
                    <Link to='/Ajouter'>Ajouter</Link>
                </li>
                <li>
                    <Link to='/Rechercher'>Rechercher</Link>
                </li>
                
            </ul>
            <Routes>
                <Route path="/" element={<Afficher table={Eta}/>}/>
                <Route path="/Ajouter" element={<Ajouter table={Eta}/>}/>
                <Route path="/Rechercher" element={<Rechercher table={Eta}/>}/>
                <Route path="/Supprimer/:id" element={<Supprimer table={Eta}/>}/>
                <Route path="/Modifier/:id" element={<Modifier table={Eta}/>}/>
            </Routes>
        </div>
    )
}