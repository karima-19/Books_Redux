export const initialS={movies:[]};
export const Reducer=(state=initialS, action)=>{
    switch(action.type){
        case "SET_MOVIES":
            return{...state, movies:action.payload };
        case "ADD_TO_WATCHLIST":
            const movie=action.payload;
            return{...state, movies:state.movies.map((m)=>m.id===movie.id?{...m, inWatchList:true}:m)};
        
        case "REMOVE_FROM_WATCHLIST":
            const movi=action.payload;
            return{...state, movies:state.movies.map((m)=>m.id===movi.id?{...m, inWatchList:false}:m)};
        
        case "TOGGLE_LIKE":
            const mov=action.payload;
            return{...state, movies:state.movies.map((m)=>m.id===mov.id?{...m, liked:!m.liked}:m)};
        
        default:
            return state;
    }
}