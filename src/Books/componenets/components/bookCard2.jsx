import { useDispatch } from "react-redux";

export const BookCard2=({book})=>{
    const dispatch=useDispatch();
    return(
        <div className="card w-25 m-1">
            <img src={book.cover} alt="" className="card-img-top" style={{objectFit: 'cover', width: '80px', height: '110px'}} />
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <p>{book.genre}</p>
            <button onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:book})}><span style={{color:"red", fontWeight: 'bolder'}}>like</span></button>
        </div>
    )
}