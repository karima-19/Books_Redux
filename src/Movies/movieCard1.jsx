import { useDispatch } from "react-redux";

export const MovieCard1=({movie})=>{
    const dispatch=useDispatch();
    return(
        <div className="card w-25 m-1">
            <p>{movie.id}</p>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <button onClick={()=>dispatch({type:"REMOVE_FROM_WATCHLIST", payload:movie})}>*</button>
        </div>
    )
}