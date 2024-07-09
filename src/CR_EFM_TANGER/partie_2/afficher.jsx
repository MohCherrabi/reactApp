import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Afficher() {
  const sgs = useSelector((el) => el.stagaires.db);
  return (
    <div>
      {sgs.map((t) => {
        return (
          <div className="d-inline-bolck">
            <img src={t.image} />
            <br />
            Nom : {t.nom}
            <Link to={"/Details/" + t.nom}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}
