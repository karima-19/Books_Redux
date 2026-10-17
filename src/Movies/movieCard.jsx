import { useDispatch } from "react-redux";

export const MovieCard=({movie})=>{
    const dispatch=useDispatch();
        return(
        <div className="card w-25 m-1">
            <p>{movie.id}</p>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <button onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:movie})}>{movie.liked?<span style={{color:"red"}}>like</span>:<span style={{color:"black"}}>like</span>}</button>
            <button onClick={()=>dispatch({type:movie.inWatchList?"REMOVE_FROM_WATCHLIST":"ADD_TO_WATCHLIST", payload:movie})}>{movie.inWatchList?"remove":"add"}</button>
        </div>
    )
}