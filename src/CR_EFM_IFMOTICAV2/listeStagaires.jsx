export default function ListeStagaires(props){
    const Supprimer = (pS)=>{
        props.setTable(props.table.filter((tb)=>tb.photo !==pS ))
    }
    return(
        <div>
            <h1>Liste des Stagaires </h1>
            {props.table.map((tb)=>{
                return(
                    <div className="d-inline-block">
                        <img src={tb.photo}/><br></br>
                        Nom et prenom : {tb.nom} {tb.prenom}<br/>
                        Ville : {tb.Ville}<br/>
                        Filere : {tb.Fil}<br/>
                        <button onClick={()=>{
                            Supprimer(tb.photo)
                        }}>
                            Supprimer
                        </button>
                    </div>
                )
            })}
        </div>
    )
}