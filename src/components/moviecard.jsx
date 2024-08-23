import React from "react";
import { img_url } from "../lib";

function Card({data}) {
    return( 
        <div className="card">
            <img className="back-pic" src={img_url+ data.backdrop_path} />
            <div className="movie-info">
                <div>
                <img className="prof-pic" src={img_url+ data.poster_path} alt="" />
                </div>
                <div className="text">
                    <h1>{data.title}</h1>
                    <p>{data.overview}</p>
                    <h2 style={{color:"green"}}> {data.vote_average}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card