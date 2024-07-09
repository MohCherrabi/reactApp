import {  useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
export default function Rechercher(){
    const [data, setData] = useState([]);
    const [valueRchercher, setValueRchercher] = useState();
    useEffect(()=>{
        axios.get('http://localhost:3032/Articles')
      .then(response=>{
        setData(response.data)
      })
    },[])
    const Rechercher = ()=>{
        const dataRcher = data.filter((D)=>{
            return D.nomA.toLowerCase().search(valueRchercher.toLowerCase()) !== -1;
            
        })
        setData(dataRcher);
    }
    return(
        <div className="container mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={valueRchercher}
            onChange={(event) => setValueRchercher(event.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={Rechercher}
            >
              Rechercher
            </button>
          </div>
        </div>
  
        <ul className="list-group">
          {data.map((D) => (
            <li key={D.id} className="list-group-item">
              Nom Article: {D.nomA}, Prix: {D.pu}, Quantite: {D.Qt}
            </li>
          ))}
        </ul>
      </div>
    )
}