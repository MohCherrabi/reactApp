import { useState, useEffect } from "react";
import axios from "axios";
export default function Ex01() {
  const [tlivres, setTLivres] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3030/livres").then((res) => {
      setTLivres(res.data);
    });
  }, []);
  let t = 0;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {tlivres.map((t) => {
            return (
              <tr>
                <td>{t.ISBN}</td>
                <td>{t.Titre}</td>
                <td>{t.Auteur}</td>
                <td>{t.Prix}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {tlivres.map((te) => {
        t += te.Prix;
      })}
      {t}
    </>
  );
}
