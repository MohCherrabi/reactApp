
import { Link, Route, Routes } from "react-router-dom";
import ARTICLE from "./ARTICLE.js";
import AJOUTER_ART from "./ADD_ARTICLE";
import UPDATE_ARTICLE from "./UPDATE_ARTICLE";
import DELETE_ARTICLE from "./DELETE_ARTICLE.js";
export default function Home(){
    return(
        <>
            <ul>
                <li><Link to='/'>Article</Link></li>
                <li><Link to='/ADD_ARTICLE'>Ajouter Article</Link></li>
                <Routes>
                    <Route path="/" element={<ARTICLE></ARTICLE>}/>
                    <Route path="/ADD_ARTICLE" element={<AJOUTER_ART></AJOUTER_ART>}/>
                    <Route path="/UPDATE_ARTICLE/:idd" element={<UPDATE_ARTICLE/>}/>
                    <Route path="/DELETE_ARTICLE/:id" element={<DELETE_ARTICLE/>}/>
                </Routes>
            </ul>
        </>
    )
}