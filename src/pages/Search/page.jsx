import React from "react";
import useFetch, { api_key, main_url } from "../../lib";
import "../../App.css"
import Box from "../../components/Box/index";
import { useParams } from "react-router-dom";


function Search() {

    const { searchtext } = useParams()
    const searchurl = main_url + "/search/movie?" + api_key + "&query=" + searchtext
    const data = useFetch(searchurl, "GET")
    let movies = []
    if (Object.keys(data).length !== 0) {
        movies = [...data.results]
    }
    
    return (
        <main>
            <div className="movie-cont">
                {movies.map((movie) => {
                    return (<Box key={movie.id} movie={movie} />)
                })}
            </div>
        </main>
    )
}

export default Search