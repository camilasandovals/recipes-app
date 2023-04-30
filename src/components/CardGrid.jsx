import { useState } from "react"

export default function CardGrid({ food }) {
  const [showIngredients, setShowIngredients] = useState(false)

  return (
    <>
      <div key={food.id}>
        <img src={food.image} height={280} width={280} />
        <h2>{food.name}</h2>
        <p>Preparation time: {food.time} min</p>
        <button onClick={() => setShowIngredients(!showIngredients)}>Ingredients</button>
        {showIngredients && (
          <div>
            {food.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
        )}
      </div>
    </>
  )
}