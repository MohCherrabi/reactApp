// json-server --watch db.json --port 3030 => pour creaer une server de json (cette ficher dont dossier 'src')
import { Link, Route, Routes } from "react-router-dom";
import Afficher from "./Afficher";
import Rechercher from "./Recherche";
import Ajouter from "./Ajouter";
import Modifier from "./Modifier";
export default function AppRouter(){
    return(
        <div>
            <ul>
                <li><Link to='/afficher'>Afficher</Link></li>
                <li><Link to='/Recherche'>Recherche</Link></li>
                <li><Link to='/Ajouter'>Ajouter</Link></li>
            </ul>
            <Routes>
                <Route path="/Modifier/:id" element={<Modifier/>}/>
                <Route path="/afficher" element={<Afficher/>}/>
                <Route path="/Recherche" element={<Rechercher/>}/>
                <Route path="/Ajouter" element={<Ajouter/>}/>
            </Routes>
        </div>
    )
    
}