import { useDispatch } from "react-redux";
export const MovieCard2=({movie})=>{
    const dispatch=useDispatch();
    return(
        <div className="card w-25 m-1">
            <p>{movie.id}</p>
            <p>{movie.title}</p>
            <p>{movie.year}</p>
            <p>{movie.genre}</p>
            <button onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:movie})}><span style={{color:"black"}}>like</span></button>
        </div>
    )
}