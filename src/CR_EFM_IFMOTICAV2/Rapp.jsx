import { Route, Routes, Link } from "react-router-dom";
import Supprimer from "./supStagiare";
import RechercheStagiare from "./rechercherStagiare";
import ListeStagaires from "./listeStagaires";
import Ajouter from "./ajouterStagaire";
import { useState } from "react";
export default function Rapp() {
  const [EtatInitail, setEtatInitail] = useState([
    {
      nom: "CHAKIRI",
      prenom: "Laila",
      Ville: "Fes",
      Fil: "Web et full stack",
      photo: "photo2.jpg",
    },
    {
      nom: "OUAFI",
      prenom: "Aanss",
      Ville: "Tanger",
      Fil: "Web désigner",
      photo: "photo1.jpg",
    },
    {
      nom: "BADRAOUI",
      prenom: "ikram",
      Ville: "meknes",
      Fil: "Dev Mobile",
      photo: "photo4.jpg",
    },
    {
      nom: "NACIRI",
      prenom: "Hassan",
      Ville: "CASABLANCA",
      Fil: "Web et full stack",
      photo: "photo3.jpg",
    },
  ]);
  return (
    <div>
      <ul className="navbar bg-black p-8">
        <li>
          <Link to="#">Gestion Stagiare</Link>
        </li>
        <li>
          <Link to="/">Liste Stagiare</Link>
        </li>
        <li>
          <Link to="/Ajouter">Ajouter Stagiare</Link>
        </li>
        <li>
          <Link to="/Supprimer">Supprimer Stagiare</Link>
        </li>
        <li>
          <Link to="/Rchercher">Rechercher par nom</Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/"
          element={
            <ListeStagaires table={EtatInitail} setTable={setEtatInitail} />
          }
        />
        <Route
          path="/Ajouter"
          element={<Ajouter table={EtatInitail} setTable={setEtatInitail} />}
        />
        <Route
          path="/Supprimer"
          element={<Supprimer table={EtatInitail} setTable={setEtatInitail} />}
        />
        <Route
          path="/Rchercher"
          element={<RechercheStagiare table={EtatInitail} />}
        />
      </Routes>
    </div>
  );
}
