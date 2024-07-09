import { useState } from "react";
export default function Ecom(){
    const [chaussures, setChaussures] = useState([{id:1,marc:"Air max",Qte:1003,photo:'chaus1.jpg',discription:"une chaussures medical",color:'rouge',taille:"40-41"},
    {id:2,marc:"Buma",Qte:1203,photo:'chaus2.jpg',discription:"une chaussures medical de deference tallie",color:'vert',taille:"40-41"},
    {id:3,marc:"Raibook",Qte:102,photo:'chaus3.jpg',discription:"une chaussures deference tallie",color:'maront',taille:"40-41"}]);
    const [ID,setID]=useState(4)
    const [MARC,setMARC] = useState('')
    const [QTE,setQTE] = useState('')
    const [PHOTO,setPHOTO] = useState('')
    const [DISCRIPTION,setDISCRIPTION] = useState('')
    const [COLOR,setCOLOR] = useState('')
    const [TAILLE,setTAILLE] = useState([])
    const Ajouter = ()=>{
        const Taj = [...chaussures]
        const neChu = {id:ID,marc:MARC,Qte:QTE,photo:PHOTO,discription:DISCRIPTION,color:COLOR,taille:TAILLE}
        Taj.push(neChu)
        setChaussures(Taj)
        setID(setChaussures.length+1)
    }
    const Supprimer=(idS)=>{
        const Cchau = chaussures.filter((ch)=>ch.id !== idS)
        setChaussures(Cchau)
    }
    const Engistrer = ()=>{
        const Cch = [...chaussures]
        const Index = Cch.findIndex((ch)=>ch.id === ID)
        const neChu = {id:ID,marc:MARC,Qte:QTE,photo:PHOTO,discription:DISCRIPTION,color:COLOR,taille:TAILLE}
        Cch.splice(Index,1,neChu)
        setChaussures(Cch)
    }
    const Afficher =(idA)=>{
        const objAf = chaussures.find((ch)=>ch.id === idA
        )
        setID(objAf.id)
        setMARC(objAf.marc)
        setQTE(objAf.Qte)
        setDISCRIPTION(objAf.discription)
        setPHOTO(objAf.photo)
    }
    const Rechercher = ()=>{
        setChaussures(chaussures.filter((ch)=>{
            return ch.marc.toLowerCase().search(document.getElementById('idR').value.toLowerCase()) !== -1
        }))
    }
    return (
        <>
        Rechercher : <input id="idR" type="text" onChange={Rechercher} />

        <div className="card-group">
            {chaussures.map((ch)=> {
                return (
                    <div className="card">
                        <img width={"200px"} className="card-img-top" src={ch.photo}/>
                        <div className="card-body">
                            <h5 className="card-title">{ch.marc}</h5>
                            <p className="card-text">{ch.discription} tallie est {ch.taille.map((t)=>t)}</p>
                            <p className="card-text"><small class="text-muted">Quantiter disponiple {ch.Qte}</small></p>
                            <button class="btn btn-primary" onClick={()=>Supprimer(ch.id)}>Supprimer</button>&nbsp;&nbsp;&nbsp;<button onClick={()=>Afficher(ch.id)} class="btn btn-primary">Modifier</button>
                        </div>
                </div>
                )
            })}
            <div>
                <h1>Ajouter un Chaussures</h1><br/>
                id : <input type="text" value={ID} disabled/><br/>
                <select onChange={(e)=>setMARC(e.target.value)} value={MARC}>
                    <option disabled value={' '}>choisir une marc</option>
                    <option value={'Air max'}>Air max</option>
                    <option value={'Buma'}>Buma</option>
                    <option value={'Raibook'}>Raibook</option>
                    <option value={'Adidas'}>Adidas</option>
                    <option value={'Adige'}>Adige</option>
                </select><br/>
                Qte : <input value={QTE} type="number" onChange={(e)=>setQTE(e.target.value)} /><br/>
                Discription : <textarea value={DISCRIPTION} onChange={(e)=>setDISCRIPTION(e.target.value)} /><br/>
                Photo : <input type="file" onChange={(e)=>setQTE(e.target.value)} /><br/>
                Color :<br/>noir<input type="radio" value={'noir'}/>
                blanche<input type="radio" value={'blanche'}/><br/>
                la taille : <br/>
                39-40<input type="checkbox" onChange={(e)=> e.target.checked?setTAILLE(TAILLE.push(e.target.value)):''} value={' 39-40 '}/><br/>
                40-41<input type="checkbox" onChange={(e)=> e.target.checked?setTAILLE(TAILLE.push(e.target.value)):''} value={' 40-41 '}/><br/>
                41-42<input type="checkbox" onChange={(e)=> e.target.checked?setTAILLE(TAILLE.push(e.target.value)):''} value={' 41-42 '}/><br/>
                42-43<input type="checkbox" onChange={(e)=> e.target.checked?setTAILLE(TAILLE.push(e.target.value)):''} value={' 42-43 '}/><br/>
                <button onClick={()=>Ajouter()}>Ajouter</button><br/>
                <button onClick={()=>Engistrer()}>Engistrer</button>
            </div>
        </div>
        </>
        
    )
}