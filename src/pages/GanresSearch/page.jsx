import { useParams } from "react-router-dom"
import useFetch, { api_key, main_url } from "../../lib"
import Box from "../../components/Box"

function Ganres() {

    const { id } = useParams()
    const genurl =  main_url+"/discover/movie?" +api_key+ "&with_genres="+ id
    const data = useFetch(genurl, "GET")
    let movies = []
    if (Object.keys(data).length !== 0) {
        movies = [...data.results]
    }
    
    return (
        <main>
            <div className="movie-cont">
                {movies.map((movie) => {
                    return (<Box key={movie.id} movie={movie} />)
                })}
            </div>
        </main>
    )
}

export default Ganres