import { MovieCard2 } from "./movieCard2";
import { useSelector } from "react-redux";
export const Liked=()=>{
    const movies=useSelector((s)=>s.movies)
    return(
        <div className="row">
        {movies.filter((m)=>m.liked).map((m, pos)=><MovieCard2 key={pos} movie={m}/>)}
        </div>
    )
}