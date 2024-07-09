import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom';
export default function Details() {
  const sgs = useSelector((t) => t.stagaire.db);
  const sg = sgs.find((t)=>t.nom ===nom)
  const {nom}  = useParams();
  return (
    <div>
          <div className="d-inline-bolck">
            <img src={sg.image} />
            <br />
            Nom : {sg.nom}
          </div>
    </div>
  );
}
