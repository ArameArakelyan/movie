import React from "react";
import "../../App.css"
import { useParams } from "react-router-dom";
import useFetch, { api_key, main_url } from "../../lib";
import Card from "../../components/Card";
import Cast from "../../components/Cast";
import InfoPanel from "../../components/InfoPanel";




function Profile() {
    const { id } = useParams()
    const movieurl = main_url + "/movie/" + id + "?" + api_key
    const data = useFetch(movieurl, "GET")


    const casturl = main_url + "/movie/" + id + "/credits?" + api_key
    const cast = useFetch(casturl, "GET")
    // console.log(cast.cast);
    let acts = []
    if (Object.keys(cast).length !== 0) {
        acts = [...cast.cast]
    }
    // console.log(acts);
    
    
    return (
        <main>
            <div className="profile-cont">
                <Card data={data} />
                <InfoPanel data={data}/>
            <div className="cast-cont">
                <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="4"
                    centered-slides="true" space-between="30" grab-cursor="true">
                    {acts.map((act) => {
                    return (<swiper-slide key={act.cast_id}> <Cast key={act.cast_id} act={act} /></swiper-slide>)
                })}
                </swiper-container>
            </div>
            </div>
        </main>
    )
}

export default Profile