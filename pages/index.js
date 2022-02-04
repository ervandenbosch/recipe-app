import Recipe from '../components/recipe'
import { React } from 'react'
import { useRecipesState } from '../components/provider'

export default function Home() {

const recipes = useRecipesState();

  return (
<div className="bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-600 py-8">

{recipes.length > 0 && <><h2 className="pt-24 font-bold text-center text-2xl py-4 dark:text-white"> Click on a recipe to find directions</h2>
<div className="flex flex-row flex-wrap justify-center gap-5 mx-[12px]">
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredientList={recipe.recipe.ingredientLines}
            calories={recipe.recipe.calories}
            url={recipe.recipe.url} />
        ))}
      </div></> }

{recipes.length === 0 && <h2 className="pt-24 font-bold text-center text-2xl py-4 dark:text-white">No recipes found, try another keyword!</h2> } 

</div>
    )
}
