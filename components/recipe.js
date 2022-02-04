const Recipe = ({title, calories, url, ingredientList, image}) => {
    return (
    
     <a href={url}>
         <div className="max-w-xs mt-6 shadow-xl rounded-xl ">
           <h2 className="rounded-t-xl text-center bg-blue-300 dark:bg-gray-400 p-3 font-bold">{title}</h2>
     <div className="bg-blue-300 dark:bg-gray-400 "><img src={image} className="mx-auto " width="280px" /> </div>
     <p className="text-center border bg-blue-100 font-bold py-3">Ingredients:</p>
 <ul className="bg-white max-w-280px text-xs p-4">
 {ingredientList.map(ingredients =>(
 <li>* {ingredients}</li>
 ))}
 </ul>
 <p className="text-center bg-blue-300 rounded-b-xl py-2">
 {Math.round(calories)} - calories</p>
 </div>
 </a>
      )
    }

export default Recipe