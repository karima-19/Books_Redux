
export const initialS={books:[]};
export const Reducer=(state=initialS, action)=>{
    switch(action.type){
        case "SET_BOOKS":
            return{...state, books: action.payload}
        case "ADD_TO_READING_LIST":
            const book=action.payload;
            return{...state, books:state.books.map((b)=>b.id===book.id?{...b, inReadingList:true}:b)};
        case "REMOVE_FROM_READING_LIST":
            const bk=action.payload;
            return{...state, books:state.books.map((b)=>b.id===bk.id?{...b, inReadingList:false}:b)};
        case "REMOVE_BOOK":
            const bok=action.payload;
            return{...state, books:state.books.filter((b)=>b.id!==bok.id)};
        case "TOGGLE_LIKE":
            const bbk=action.payload;
            return{...state, books:state.books.map((b)=>b.id===bbk.id?{...b, liked:!b.liked}:b)};
        default:
            return state;
    }
}