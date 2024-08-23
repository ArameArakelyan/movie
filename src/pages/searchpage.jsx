import React from "react";
import useFetch, { api_key, main_url } from "../lib";
import "../App.css"
import Box from "../components/box";
import { useParams } from "react-router-dom";


function Search() {
    const {searchtext} = useParams()
    const search = main_url +"/search/movie?" +api_key +"&query="+searchtext
    const {data} = useFetch(search,"GET")

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