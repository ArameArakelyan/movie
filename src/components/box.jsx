import { img_url } from "../lib"


function Box({movie}) {
    return(
        <div className="box">
            <img className="mov-pic" src={img_url+ movie.poster_path}/>
        </div>
    )    
}

export default Box