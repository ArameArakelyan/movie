import { createContext, useState } from "react";

const SearchContext = createContext("")

function SearchProvider(props) {
    const [search, setSearch] = useState("")
    console.log(search);
    
    return(
        <div>
            <SearchContext.Provider value={{search, setSearch}}>
                {props.children}
            </SearchContext.Provider>
        </div>
    )
}

export {SearchContext, SearchProvider}