import { MovieCard } from "./movieCard";
import { useSelector } from "react-redux";
export const Movies=()=>{
    const movies=useSelector((s)=>s.movies)
    return(
        <div className="mx-auto row">
        {movies.map((m, pos)=><MovieCard key={pos} movie={m}/>)}
        </div>
    )
}