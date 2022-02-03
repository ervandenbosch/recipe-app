export function Searchbar({placeholder, getSearch, updateSearch, search}){

  return(   
    <div className="flex-1">
    <form onSubmit={getSearch}>
       <div className="flex flex-row mt-2 p-1 ml-6">
     <div className="flex-1 border-b hover:border dark:border-none  text-gray-400 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500">
   <input type="text" placeholder={placeholder} className="m-1 bg-transparent outline-none w-full" value={search} onChange={updateSearch} />
   </div>
   <span className="flex-none ml-4 w-100px p-1 border-b hover:border dark:border-none rounded-lg text-white dark:text-gray-900 font-bold bg-blue-400 dark:bg-gray-200"><button type="submit">Search!</button>
    </span>
    </div>
   </form>
    </div>
  );
}