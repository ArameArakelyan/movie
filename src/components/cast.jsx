import React from "react";
import { img_url } from "../lib";

function Cast({act}) {
    return(
        <div className="cast-div">
            <img src={img_url+act.profile_path} alt="" />
            <p>{act.name}</p>
        </div>
    )
}

export default Cast