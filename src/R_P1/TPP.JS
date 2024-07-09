import React from 'react';
export default class Etudiant extends  React.Component{
    state={Etu:[{id:1,nom:"alami ahmed", age:"20",ville:"fes",photo:""},{id:2,nom:"alaoui amine",age:"25",ville:"rabat",photo:""},{id:3,nom:"salaoui mounir",age:"30",ville:"casa",photo:""}],id:4,nomAJ:""}
supprime=(idsupp)=>{
    this.setState({Etu:this.state.Etu.filter((etu)=>etu.id!==idsupp)})
}
Ajouter=()=>{
    const T=[...this.state.Etu]
    T.push({id:this.state.id,nom:this.state.nomAJ})
    this.setState({Etu:T})
    this.setState({id:this.state.id+1,nomAJ:""})
}
render(){
    return <>
    <h1>Liste des Etudiants</h1>
    <table border="1">
        <tr><td>id</td><td>nom</td><td>age</td><td>ville</td><td>photo</td><td colspan="2">action</td></tr>
        {this.state.Etu.map((etu)=> (
                                        <tr><td>{etu.id}</td>
                                        <td>{etu.nom}</td>
                                        <td>{etu.ville}</td>
                                        <td>{etu.age}</td>
                                        <td>{etu.photo}</td> 
                                        <td><button onClick={()=>{this.supprime(etu.id)}}>supprime</button></td></tr>))}
        
    </table>
    <pre>
        id : <input type="text" name="id"/><br/>
        nom : <input type="text" name="nom"/><br/>
        ville : <input type="text" name="ville"/><br/>
        <select><option value="choisir une ville">
    choisir une ville </option>
    <option value="fes">fes</option>
    <option value="rabat">rabat</option>
    <option>casa</option>
    </select>
    photo<select><option value="choisir une photo"> choisir une photo</option><option><img src=""/></option><option><img scr=""/></option><option><img scr=""/></option></select><button>Ajouter</button>
    </pre>
    </>
}
}
