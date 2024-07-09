const dataInicial = {
    data:[
        {
            id:1,nom:'mohamed',prenom:'cherrabi',age:'20',genre:'Male'
        }
    ]
}
const reducer = (state = dataInicial, action)=>{
    switch(action.type){
        case 'ADD':
            return {data:[...state.data,action.payload]}
        case 'DELETE':
            return {data:[...state.data.filter((cl)=> cl.id !== action.payload )]}
        default :
        return state
    }
}
export default reducer;