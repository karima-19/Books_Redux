import { useSelector } from "react-redux";
import { BookCard2 } from "./bookCard2";
export const Liked=()=>{
    const books=useSelector(s=>s.books);
    return(
        <div>
            {
                books.filter((b)=>b.liked===true).map((b, pos)=><BookCard2 key={pos} book={b}/>)
            }
        </div>
    )
}