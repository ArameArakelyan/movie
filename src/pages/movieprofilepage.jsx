import React from "react";
import "..//App.css"
import { useParams } from "react-router-dom";
import useFetch, { api_key, main_url } from "../lib";
import Card from "../components/moviecard";

function Profile() {
    const {id} = useParams()
    const movieurl = main_url + "/movie/" + id + "?" + api_key    
    const data = useFetch(movieurl, "GET")
    console.log(data);
    
    return(
        <main>
            <div className="profile-cont">
              <Card data={data}/>
            </div>
        </main>
    )
}

export default Profile