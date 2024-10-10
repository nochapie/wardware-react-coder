

export const Card = ( props ) => {
return (

    <div style={{ border: "2px solid black", width: "200px", height:"200px"}}>

        <h2>Titulo: {props.title}</h2>
        <h3>Precio:  {props.price}</h3>
        <h3>Stock:  {props.stock}</h3>

    </div>

)
}
