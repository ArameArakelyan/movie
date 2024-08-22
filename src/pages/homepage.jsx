import React from "react";
import useFetch, { api_url} from "../lib";
import "../App.css"
import Box from "../components/box";

function Home() {
    const {data} = useFetch(api_url,"GET")
    return(
        <main>
            <div className="movie-cont">
                {data.map((movie,id)=>{
                    return (<Box movie={movie} key={id}/>)
                })}
            </div>
        </main>
    )
}

export default Home