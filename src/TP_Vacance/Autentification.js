import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate} from "react-router-dom";
export default  function Authentication(){
    const [data, setData] = useState([])
    const [NU, setNU] = useState();
    const [MP, setMP] = useState();
    const navigate = useNavigate();
    const [Error, steError] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:3032/Users")
        .then(res => {
        console.log("from useEffct ",res.data)
        console.log(setData(res.data))
    })
    .catch(error=>{
        console.error("erreur de importation de la api : ",error);
    })
    console.log("from before return : ",data)
    },[])
    const Authen = ()=>{
        const ele = data.find((e)=> e.pass === MP && e.Login === NU);
        if(ele) {
              localStorage.setItem('key', "connected");
            navigate('/Acculle');
        }else{
            steError(<div className="alert alert-danger" role="alert">Nom dutilisateur ou mot de passe incorrect</div>)
        }
    }
    return(
        <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
           {Error !== null? Error:''}
              <div className="card-header">Autentication</div>
              <div className="card-body">
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Nom de utilisateur</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      required
                      onChange={(e)=>{setNU(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required
                      onChange={(e)=>{setMP(e.target.value)}}
                    />
                  </div>
                  <button onClick={()=>Authen()} className="btn btn-primary">Connecter</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}