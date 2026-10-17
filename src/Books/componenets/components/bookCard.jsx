import { useDispatch } from "react-redux";

export const BookCard=({book})=>{
    const dispatch=useDispatch();
    return(
        <div className="card w-25 m-1 p-0">
            <img src={book.cover} alt="" className="card-img-top" style={{objectFit: 'contain'}} />
            <p className="m-0">{book.title}</p>
            <p className="m-0">{book.author}</p>
            <p className="m-0">{book.year}</p>
            <p className="m-0">{book.genre}</p>
            <div className="my-2">
                <button className="btn btn-outline-danger m-1" onClick={()=>dispatch({type:"TOGGLE_LIKE",payload:book})}>{book.liked?<span style={{color:"red", fontWeight: 'bolder'}}>like</span>:<span style={{color:"black", fontWeight: 'bolder'}}>like</span>}</button>
                <button className="btn btn-outline-primary m-1" onClick={()=>dispatch({type:book.inReadingList?"REMOVE_FROM_READING_LIST":"ADD_TO_READING_LIST", payload:book})}>{book.inReadingList?"remove":"add"}</button>
                <button className="btn btn-outline-dark m-1" onClick={()=>dispatch({type:"REMOVE_BOOK", payload: book})}>Remove</button>
            </div>
        </div>
    )
}