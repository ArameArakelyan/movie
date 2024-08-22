import React, { useContext } from "react";
import useFetch, { api_key, main_url } from "../lib";
import "../App.css"
import Box from "../components/box";
import { SearchContext } from "../use";
import { useParams } from "react-router-dom";


function Search() {
    console.log(1235435);
    const {searchtext} = useParams()
    console.log(main_url +"/search/movie?" +api_key +"&query="+searchtext);
    
    const {data} = useFetch(searchtext,"GET")
    data.map((movie)=>console.log(movie))
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