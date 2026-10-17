import { MovieCard1 } from "./movieCard1";
import { useSelector } from "react-redux";
export const WatchList=()=>{
    const movies=useSelector((s)=>s.movies)
    return(
        <div className="row">
        {movies.filter((m)=>m.inWatchList).map((m, pos)=><MovieCard1 key={pos} movie={m}/>)}
        </div>
    )
}