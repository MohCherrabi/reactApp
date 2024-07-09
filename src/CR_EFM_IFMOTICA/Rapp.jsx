import { Link, Route, Routes } from "react-router-dom";
import ListeLivres from "./listeLivres";
import AjouterLives from "./AjouterLivres";
import Supprimer from "./Supprimer";
import Rechercher from "./Rchecher";
import { useState } from "react";

export default function Rapp() {
  const [listeLivres, seLtisteLivres] = useState([
    {
      Titre: "Robotique",
      nbpages: "196",
      Auteur: "SABBAI",
      photo: "photo1.jpg",
    },
    { Titre: "Réseaux", nbpages: "59", Auteur: "Tanger", photo: "photo2.jpg" },
    {
      Titre: "Dév Informatique",
      nbpages: "88",
      Auteur: "MEKOUAR",
      photo: "photo3.jpg",
    },
    {
      Titre: "Informatique",
      nbpages: "125",
      Auteur: "HASSOUNI",
      photo: "photo4.jpg",
    },
  ]);
  return (
    <div>
        <ul className="navbar bg-black p-3">
        <il>
          <Link to="/">Liste Livres</Link>
        </il>
        <il>
          <Link to="/Ajouter">Ajouter Lives</Link>
        </il>
        <il>
          <Link to="/Supprimer">Supprimer Livre</Link>
        </il>
        <il>
          <Link to="/Rechercher">Rechercher par titre</Link>
        </il>
      </ul>
      <Routes>
        <Route path="/" element={<ListeLivres table={listeLivres} />} />
        <Route path="/Ajouter"  element={<AjouterLives setTable={seLtisteLivres} table={listeLivres} />} />
        <Route path="/Supprimer" element={<Supprimer setTable={seLtisteLivres} table={listeLivres} />} />
        <Route path="/Rechercher" element={<Rechercher table={listeLivres} />} />
      </Routes>
      
    </div>
  );
}
