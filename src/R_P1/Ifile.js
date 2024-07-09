import React from 'react';
export default class Etudiants extends React.Component{
    state={Etudiant:[{id:1,nom:"alami amine",age:"20" ,ville:"fes",photo:"photo1.jpg"}
    ,{id:2,nom:"alaoui mounir",age:"18",ville:"rabat",photo:"photo2.jpg"}
    ,{id:3,nom:"hayat zoumi",age:"19",ville:"tanger",photo:"photo3.jpg"}
    ,{id:4,nom:"fati kamrani",age:"21",ville:"taounate",photo:"photo4.jpg"}],id:5,nomAJ:""}

supprime=(idsupp)=>{
    this.setState({Etu:this.state.Etu.filter((etu)=>{return etu.id!==idsupp})})
}
ajouter=()=>{
    const T=[...this.state.Etudiant]
    T.push({id:this.state.id,nom:this.state.nomAJ})
    this.setState({id:this.state.id+1,nomAJ:""})
}
afficher=(idaff)=>{
    const etu= this.state.Etu.find((etu)=>{return etu.id===idaff})
    this.setState({id:this.etu.id,nomAJ:etu.nom})
}

render(){
    return<>
    <h1>Listes des etudiants</h1>
    <table  margin="100px"width="60%">
        <tr>
            <td>id</td>
            <td>nom</td>
            <td>age</td><td>ville</td>
            <td>photo</td>
            <td colspan="2">action</td>
            </tr>{this.state.Etudiant.map((etu)=>{return<tr><td>{etu.id}
            </td>{etu.nom}<td>{etu.age}</td>
            {etu.ville}<td><img width={"50px"} height={"50px"} src={etu.photo}/></td>
            <button onClick={()=>{this.supprimer(etu.id)}}>supprime</button>
            <button onClick={()=>{this.afficher(etu.id)}}>affiche</button></tr>})}
        
    </table><br></br>
    id:<input type="text" disabled value={this.state.id} onChange={(e)=>this.setState({id:e.target.value})}/><br></br><br></br>
    nom:<input type="text" value={this.state.nomAJ} onChange={(e)=>this.setState({nomAJ:e.target.value})} /><br></br><br></br>
    age:<input type="text"  value={this.state.age}onChange={(e)=>this.setState({age:e.target.value})}/><br></br><br></br>
    ville:<input type="text" value={this.state.ville} onChange={(e)=>this.setState({ville:e.target.value})}/><br></br><br></br>
    sexe:F<input type="radio"  name="F" value="F"/>
    M<input type="radio" name="F" value="M"/>
    <button onClick={()=>{this.ajouter()}}>ajouter</button>
    </>
}

 
    






}