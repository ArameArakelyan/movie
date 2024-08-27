import { Link } from "react-router-dom"
import { img_url } from "../../lib"


function Box({movie}) {
    let rate = Math.floor((movie.vote_average*10))/10
    let color = "red"
    if (rate>=7) {
        color= "green"
    } else if (rate>=5) {
        color = "yellow"
    }
    return(
        <Link to={`/movie/${movie.id}`}>
            
        <div className="box">
            <img className="mov-pic" src={img_url+ movie.poster_path} alt=""/>
            <div className="shadow">
                <div style={{backgroundColor:color, color:"black"}} className="rate"><p>{rate}</p></div>
                <div className="name"><p>{movie.title}</p></div>
            </div>
        </div>
        </Link>
    )    
}

export default Box