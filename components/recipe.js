const Recipe = ({title, calories, url, ingredientList, image}) => {
    return (
    
    
         <div className="flex flex-col justify-between max-w-xs mt-6 shadow-xl rounded-xl ">
              <a href={url}>
           <h2 className="rounded-t-xl text-center bg-blue-300 dark:bg-gray-400 p-3 font-bold">{title}</h2>
     <div className="bg-blue-300 dark:bg-gray-400 "><img src={image} className="mx-auto " width="280px" /> </div>
     <p className="text-center border bg-blue-100 font-bold py-3">Ingredients:</p>
 <ul className="bg-white max-w-280px text-xs p-4">
 {ingredientList.map(ingredients =>(
 <li>* {ingredients}</li>
 ))}
 </ul>
 <div className="text-center bg-blue-300 rounded-b-xl py-2">
 {Math.round(calories)} - calories</div>
 </a>
 </div>
      )
    }

export default Recipe