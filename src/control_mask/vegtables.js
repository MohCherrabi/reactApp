export default function Vegetables(props){
    return (
        <div>
            <h1>Fruits</h1><br/>
            {props.product.map((pr)=>{
                if(pr.category == "Vegetables"){
                    return <p>{pr.name} {pr.price}</p>
                }
            })}
        </div>
    )
}