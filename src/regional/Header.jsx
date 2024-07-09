import { Routes, Route, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <centre >
        <h1 className="bg-black p-8 text-white">bibliotheque</h1>
        <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/details">Details</Link>
        </li>
      </ul>
      </centre>
      
      <Routes>
        {/* <Route path="/" element={<Accueil />} />
        <Route path="/details" element={<details />} /> */}
      </Routes>
    </>
  );
}
