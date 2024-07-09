import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const DataProduit = useSelector((data) => data.db);
  const DataProduits = useSelector((data) => data.UPD);
  const dispatch = useDispatch();
  const [dis, setDis] = useState();
  const [namee, setName] = useState();
  const [src, setSrc] = useState();
  const [updated, setUpdated] = useState(false);
  const [data, setData] = useState({ src: "", name: "", dis: "" });
  console.log(DataProduits);
  if (DataProduits !== undefined) {
    console.log(DataProduits.src);
  }
  const Modifier = (nameM) => {
    setData(DataProduit.find((el) => el.name === nameM));

  };
  return (
    <div>
      <fieldset class="mb-3">
        <div class="mb-3">
          <label for="imageSource" class="form-label">
            Image Source:
          </label>
          <input
            type="url"
            id="imageSource"
            class="form-control"
            value={data.src}
            onChange={(e) => {
              setData({ ...data, src: e.target.value });
              setSrc(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Nom de Produit:
          </label>
          <input
            id="productName"
            class="form-control"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
              setName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label class="form-check-label">La Disponible:</label>
          <input
            type="checkbox"
            class="form-check-input"
            value={data.dis == "disponible" ? this.checked : ""}
            onChange={(e) => {
              setData({
                ...data,
                dis: src,
              });
              setDis(e.target.checked ? "disponible" : "Non disponible");
            }}
          />
        </div>
        {updated ? (
          <button
            onClick={() => {
              return dispatch({ type: "UPDATE", payload: data});
            }}
          >
            Enregistrer
          </button>
        ) : (
          <button
            class="btn btn-primary"
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: { dis: dis, name: namee, src: src },
              });
              setDis("");
              setName("");
              setSrc("");
            }}
          >
            Ajouter
          </button>
        )}
      </fieldset>
      <div class="row">
        {DataProduit.map((pd, index) => {
          return (
            <div class="col-md-4 mb-3" key={index}>
              <div class="card">
                <img style={{height:"300px"}}  src={pd.src} class="card-img-top" alt="Product Image" />
                <div class="card-body">
                  <h5 class="card-title">{pd.name}</h5>
                  <p class="card-text">Disponible: {pd.dis}</p>
                  <button
                    onClick={() => {
                      const con = window.confirm(
                        "vous les vous supprimer cette element"
                      );
                      return con
                        ? dispatch({ type: "DELETE", payload: pd.name })
                        : null;
                    }}
                    className="btn btn-danger ml-2"
                  >u
                    Supprimer
                  </button>
                  <button
                  className="btn btn-warning"
                    onClick={() => {
                      Modifier(pd.name);
                      setUpdated(true);
                    }}
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
