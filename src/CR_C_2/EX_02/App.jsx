import Afficher from "./afficher";
import SupprimerL from "./supprimer";
import AjouterL from "./ajouter";
import Deatils from "./details";
import { Route, Routes, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <ul className="navbar bg-black p-8">
        <li>
          <Link to="#">Gestion biblio</Link>
        </li>
        <li>
          <Link to="/">Liste Livres</Link>
        </li>
        <li>
          <Link to="/Ajouter">Ajouter Livres</Link>
        </li>
        <li>
          <Link to="/Supprimer">Supprimer livre</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Afficher />} />
        <Route path="/Ajouter" element={<AjouterL />} />
        <Route path="/Supprimer" element={<SupprimerL />} />
        <Route path="/details/:titre" element={<Deatils />} />
      </Routes>
    </div>
  );
}
