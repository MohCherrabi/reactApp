import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const Tvoitures = useSelector((data) => data.db);
  const dispatch = useDispatch();

  const [voitureId, setVoitureId] = useState();
  const [voitureMarque, setVoitureMarque] = useState();
  return (
    <div>
      <center>
        ID :{" "}
        <input
          value={voitureId}
          onChange={(e) => setVoitureId(e.target.value)}
        />
        Marque :{" "}
        <input
          value={voitureMarque}
          onChange={(e) => setVoitureMarque(e.target.value)}
        />
        <button
          style={{ background: "lightblue" }}
          onClick={() => {
            dispatch({
              type: "Ajouter",
              payload: { id: voitureId, marque: voitureMarque },
            });
            setVoitureId("");
            setVoitureMarque("");
          }}
        >
          Ajouer
        </button>
        <button
          style={{ background: "lightblue" }}
          onClick={() => {
            dispatch({
              type: "Modifier",
              payload: { id: voitureId, marque: voitureMarque },
            });
          }}
        >
          Modifier
        </button>
        <h4>Liste des Voitures</h4>
        <table>
          {Tvoitures.map((V) => {
            return (
              <tr key={V.id}>
                <td>{V.id}</td>
                <td>{V.marque}</td>
                <td>
                  <button
                    style={{ background: "gray", borderRadius: "5px" }}
                    onClick={() => {
                      dispatch({ type: "Supprimer", payload: V.id });
                    }}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}
