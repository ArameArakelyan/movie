import React from "react";
import useFetch, { api_url} from "../lib";
import "../App.css"
import Box from "../components/box";

function Home() {
    const {data} = useFetch(api_url,"GET")
    return(
        <main>
            <div className="movie-cont">
                {data.map((movie)=>{
                    return (<Box movie={movie}/>)
                })}
            </div>
        </main>
    )
}

export default Home