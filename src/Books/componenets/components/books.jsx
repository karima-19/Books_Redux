import { useSelector } from "react-redux";
import { BookCard } from "./bookCard";
export const Books=()=>{
    const books=useSelector(s=>s.books);
    return(
        <div className="row mx-2">
            {
                books.map((b, pos)=><BookCard key={pos} book={b}/>)
            }
        </div>
    )
}