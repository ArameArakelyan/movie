import React from "react";
import { img_url } from "../../lib";

function Card({ data }) {
    let year = 0
    if (data.release_date != undefined) {
        year = data.release_date.slice(0, 4)
    }
    return (
        <div className="card">
            <div><img className="back-pic" src={img_url + data.backdrop_path} alt="" /></div>
            <div className="movie-info">
                <div className="pic-div">
                    <img className="prof-pic" src={img_url + data.poster_path} alt="" />
                </div>
                <div className="text">
                    <h1>{data.title} ({year})</h1>
                    <p>{data.overview}</p>

                </div>
            </div>
            <div className="overview"> <p>{data.overview}</p></div>
        </div>
    )
}

export default Card