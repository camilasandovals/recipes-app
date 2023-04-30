
export default function CardGrid({food}) {
    return(
            <>  
            
                <div key={food.id}>
                    <img src={food.image} height={280} width={280}/>
                    <h2>{food.name}</h2>
                    <p>Preparation time: {food.time} min</p>
                    {food.ingredients.map((ingredient) => <li>{ingredient}</li>)}
                </div>
                

        </>
    )
}