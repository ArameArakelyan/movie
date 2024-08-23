import { Link } from "react-router-dom"
import { img_url } from "../lib"


function Box({movie}) {
    return(
        <Link to={`/movie/${movie.id}`}>
        <div className="box">
            <img className="mov-pic" src={img_url+ movie.poster_path}/>
        </div>
        </Link>
    )    
}

export default Box