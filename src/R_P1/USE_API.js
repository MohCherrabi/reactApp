import React, { useEffect, useState } from 'react'
 import axios from 'axios' 
 export default function App(){ 
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    const [errorCatch , setErrorCatch]=useState(null);
    const [utilisateurs,setUtilisateurs]=useState([])
    useEffect(()=>{ 
        const fetchData =async ()=>{
            try{
                const responde = await fetch(API_URL);
                if(!responde.ok) throw Error(" verifey votre lein de la api ");
                const users = await responde.json();
                setUtilisateurs(users);
                setErrorCatch(null)
            }catch(err){
                setErrorCatch(err.message);
            }
        }
        fetchData()
    },[])
        const Supprimer = (idS) =>{
            setUtilisateurs(utilisateurs.filter((U)=>U.id !== idS))
        }
        return( 
            <div className="table-container">
            <table className="custom-table">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>PHON</th>
                    <th>WEBSITE</th>
                    <th>ADDRESSE</th>
                    <th>COMPANY</th>
                    <th>ACTION</th>
                </tr>
                {errorCatch &&  <tr><td colSpan={9}  style={{color:'red',textAlign:'center'}}>Error: {errorCatch}</td></tr>}
                    {utilisateurs.map((U)=>{
                        return <tr>
                            <td>{U.id}</td>
                            <td>{U.name}</td>
                            <td>{U.username}</td>
                            <td>{U.email}</td>
                            <td>{U.phone}</td>
                            <td>{U.website}</td>
                            <td>city : {U.address.city} 
                                geo-lat : {U.address.geo.lat}  
                                geo-lng : {U.address.geo.lng} , 
                                street : {U.address.street} 
                                suite : {U.address.suite} 
                                zipcode : {U.address.zipcode}
                            </td>
                            <td>name company : {U.company.name} 
                                catchPhrase : {U.company.catchPhrase} 
                                Bs : {U.company.bs}
                            </td>
                            <td><button onClick={()=>Supprimer(U.id)}>Supprimer</button></td>
                        </tr>
                    })}
            </table>
            </div>
            ) }