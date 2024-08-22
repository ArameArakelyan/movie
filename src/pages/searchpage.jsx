import React, { useContext } from "react";
import useFetch, { api_key, main_url } from "../lib";
import "../App.css"
import Box from "../components/box";
import { SearchContext } from "../use";

function Search() {
    const {search} = useContext(SearchContext)
    const searchurl = main_url + "/search/movie?" +api_key +"&query="+ "aven"
    const {data} = useFetch(searchurl,"GET")
    console.log(data);
    return(
        <main>
            <div className="movie-cont">
                {data.map((movie)=>{
                    return (<Box key={movie.id} movie={movie}/>)
                })}
            </div>
        </main>
    )
}

export default Search