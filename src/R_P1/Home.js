import React, { Fragment, useState } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Employe(){
    const [Employe, setEmploye] = useState([
    {
        id:1,
        nom:"john week",
        age:27,
        ville:"california",
        photo:"photo1.jpg"
    },
    {
        id:2,
        nom:"mohamed cherrabi",
        age:27,
        ville:"fes",
        photo:"photo2.jpg"
    },
    {
        id:3,
        nom:"ahmed sayd",
        age:30,
        ville:"kahira",
        photo:"photo3.jpg"
    }
    ])
    const [ID, setID] = useState(1)
    const [inNom, setInNom] = useState();
    const [inLage, setInLage] = useState();
    const [inVille, setInVille] = useState();
    const [inPhoto, setInPhoto] = useState();
    const handleSupprimer = (Id)=>{
        const newEmp = Employe.filter((e)=>e.id !== Id)
        setEmploye([...newEmp])
    }
    const [afficher, setAfficher] = useState(false)
    const AjouterEmploye = ()=>{
        const TrouverId = ()=>{
            let Id = 0;
            let index = Employe.length-1
            Id = Employe[index].id+1
            return Id
        }
        const Envoyer = ()=>{
            
            let obj = {
                id:TrouverId(),
                nom:inNom,
                age:inLage,
                ville:inVille,
                photo:inPhoto
            }
            const newemploy = [...Employe]
            newemploy.push(obj)
            setEmploye([...newemploy])
            setAfficher(false)
        };
        return <div>
                    Nom : <input value={inNom} onChange={(e)=>{
                            setInNom(e.target.value);
                            setID(TrouverId());
                    }}/><br/>
                    L'age : <input value={inLage} onChange={(e)=>{
                        setInLage(e.target.value);
                    }}/><br/>
                    <select onChange={(e)=>{
                        setInVille(e.target.value)
                    }} value={''}>
                                                        <option disabled value={""}>
                                                            choisir votre ville
                                                        </option>
                                                        <option value={"fes"}>
                                                            fes
                                                        </option>
                                                        <option value={"casa"}>
                                                            casa
                                                        </option>
                                                        <option value={"california"}>
                                                        california
                                                        </option>
                                                        <option value={"kahira"}>
                                                            kahira
                                                        </option>
                                                        <option value={"gaza"}>
                                                            gaza
                                                        </option>
                                                        <option value={"jazair"}>
                                                        jazair
                                                        </option>
                                                        <option value={"kinitra"}>
                                                        kinitra
                                                        </option>
                                                        <option value={"taounate"}>
                                                        taounate
                                                        </option>
                                                </select>
                                                <select  onChange={(e)=>{
                                                                setInPhoto(e.target.value)
                                                    }} value={''}>
                                                        <option disabled value={""}>
                                                            choisir une source de votre photo
                                                        </option>
                                                        <option value={"photo1.jpg"}>
                                                            ahmed
                                                        </option>
                                                        <option value={"photo2.jpg"}>
                                                        john week
                                                        </option>
                                                        <option value={"photo3.jpg"}>
                                                            mohamed
                                                        </option>
                                                        <option value={"photo4.jpg"}>
                                                            amine
                                                        </option>
                                                        <option value={"photo5.jpg"}>
                                                        imane
                                                        </option>
                                                        <option value={"photo6.jpg"}>
                                                        kawtar
                                                        </option>
                                                        <option value={"photo7.jpg"}>
                                                        zineb
                                                        </option>
                                                </select><br/>
                                                <br/>
                    <Button onClick={Envoyer}>Envoyer</Button>
                </div>
    }
    const [EN, setEN] = useState(false)
    const engistrer = ()=>{
        let newobj = {
            id:ID,
            nom:inNom,
            age:inLage,
            ville:inVille,
            photo:inPhoto
        }
        const T = [...Employe]
        const index = T.findIndex((e)=>e.id = ID)
        T.splice(index,1,newobj)
        setEmploye(T)
        setAfficher(false)
        setEN(false)
    }
    return(
        <Fragment>
            <div className='d-grid gap-2'style={{margin:"10rem"}}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                Nom
                            </th>
                            <th>
                                L'age
                            </th>
                            <th>
                                ville
                            </th>
                            <th>
                                photo
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employe && Employe.length >0
                            ?
                            Employe.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.nom}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            {item.ville}
                                        </td>
                                        <td>
                                                <img width={"100px"} height={"100px"} src={item.photo}/>
                                        </td>
                                        <td>
                                            
                                            <Button onClick={()=>handleSupprimer(item.id)}>Supprimer</Button>
                                            &nbsp;&nbsp;
                                            <Button onClick={() =>{ setAfficher(true);
                                                                    setID(item.id);
                                                                    setInNom(item.nom);
                                                                    setInLage(item.age);
                                                                    setEN(true);}}>Modifier
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "la basse de donner est vide"
                        }
                    </tbody>
                </Table>
                {afficher ? (
                    <div className='d-grid gap-2' >
                        <Button size="lg" onClick={() => setAfficher(true)}>Ajouter</Button>
                        {AjouterEmploye()}
                    </div>
                ) : (
                    <Button size="lg" onClick={() => setAfficher(true)}>Ajouter</Button>
                )}
                {
                    EN ?<Button onClick={()=>engistrer()}>Engistrer</Button>:""
                }
                
            </div>
        </Fragment>
    )
}

















