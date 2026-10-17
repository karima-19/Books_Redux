import { useSelector } from "react-redux";
import { BookCard1 } from "./bookCard1";
export const InReadingList=()=>{
    const books=useSelector(s=>s.books);
    return(
        <div>
            {
                books.filter((b)=>b.inReadingList===true).map((b, pos)=><BookCard1 key={pos} book={b}/>)
            }
        </div>
    )
}