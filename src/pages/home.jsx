import React, { useEffect } from "react";
import useFetch, { api_url } from "../lib";

function Home() {
    const {data} = useFetch(api_url,"GET")
     console.log(data);
    
    return(
        <main>
            <div className="movie-cont">
            {data.map((movie)=>{
                
               })}
            </div>
        </main>
    )
}

export default Home