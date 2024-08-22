import { createContext, useContext, useState } from "react";
import React from "react";

const SearchContext = React.createContext("")

function SearchProvider(props) {
    const [search, setSearch] = useState("")
    
    return(
        <div>
            <SearchContext.Provider value={{search, setSearch}}>
                {props.children}
            </SearchContext.Provider>
        </div>
    )
}
function useGlobalContext() {
    return useContext(SearchContext)
}

export {SearchContext, SearchProvider}