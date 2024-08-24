import React from "react";
import useFetch, { api_url } from "../lib";
import "../App.css"
import Box from "../components/box";

function Home() {
    const data = useFetch(api_url, "GET")
    let movies = []
    if (Object.keys(data).length !== 0) {
        movies = [...data.results]
    }

    return (
        <main>
            <div className="movie-cont">
                {movies.map((movie, id) => {
                    return (<Box movie={movie} key={id} />)
                })}
            </div>
        </main>
    )
}

export default Home