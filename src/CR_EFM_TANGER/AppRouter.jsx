import AjouterStagaire from "./AjouterStagaire";
import Details from "./DetailsStagaire";
import AfficherStagaires from "./AfficherStagaires";
import { Link,Route ,Routes } from "react-router-dom";
export default function AppRouter(){
    const Stagaires = []
    return(
        <div>
            <ul className="navbar bg-black p-2">
                <li>
                    <Link to="/" >Liste Stagaires</Link>
                </li>
                <li>
                    <Link to="/Ajouter" >Ajouter Stagaire</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<AfficherStagaires table={Stagaires}/>}/>
                <Route path="/Ajouter" element={<AjouterStagaire table={Stagaires}/>}/>
                <Route path="/Details/:nom" element={<Details table={Stagaires}/>}/>
            </Routes>
        </div>
    )
}