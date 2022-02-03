import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();


  export function AppWrapper({ children, query })  {

    const API_KEY = "b2ba741e3d5afcd7382422fa74a50a5e"
    const APP_ID = "4a2fdf2f"
    const requestLine = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`

    const [recipes, setRecipes] = useState([]);

    async function getRecipes() {
      const response = await fetch(requestLine)
      const data = await response.json();
      setRecipes(data.hits);
     };

    useEffect(() => {
      getRecipes()
    }, [query]);

const state = recipes;

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}

export function useRecipesState() {
  return useContext(AppContext);
}