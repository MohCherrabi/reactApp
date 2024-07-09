import { useState } from "react";
import RoutesP from "./routes";
import { Link } from "react-router-dom";


export default function App() {
  const [personnes, setPersonne] = useState([
    {
      id: 1,
      nom: "John",
      prenom: "doe",
    },
    {
      id: 2,
      nom: "mohamed",
      prenom: "cherrabi",
    }
  ]);
  return (
    <div className="container">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              ReactApp
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active"  to={"/"}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to={"/Ajouter"}>
                    Ajouter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <RoutesP table={personnes} />
    </div>
  );
}
