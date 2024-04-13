import React from 'react';
import { ReactComponent as Search } from "../../../assets/search.svg";

const SearchField = () => {
  return (
    <div className="flex-1 col-span-3 row-start-2 md:pr-10">
    <form className=" relative md:max-w-xs w-full" autoComplete="off">
      <label htmlFor="search" className="sr-only"></label>
      <input
        type="search"
        id="search"
        placeholder="Search task"
      
        className="inputStyles w-full"
      />
      <Search className="absolute w-4 sm:w-5 right-4 top-3.5 text-slate-400" />
      {/* {listResultsVisible && (
        <div className="absolute bg-slate-100 rounded-md w-full top-14 p-3 dark:bg-slate-800 z-10">
          {tasks.length ? (
            <>
              <ul>
                {tasks.map((task) => (
                  <ItemSearch key={task.id} task={task} />
                ))}
              </ul>
              <button
                onClick={navigateToSearchResults}
                className="bg-rose-100 w-full p-2 rounded-md text-rose-600 dark:bg-slate-700/[.3] dark:text-slate-200"
              >
                All results for "{searchInputValue}"
              </button>
            </>
          ) : (
            <span>No tasks found</span>
          )}
        </div>
      )} */}
    </form>
  </div>
  )
}

export default SearchField