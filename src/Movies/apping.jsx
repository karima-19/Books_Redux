import {Store} from "./movieStore";
import {useEffect,} from "react";
import {Nav} from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movies } from "./movies";
import { WatchList } from "./watchlist";
import {Liked} from "./liked"
import {useDispatch} from "react-redux";
import { Provider } from "react-redux";

export const App=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        fetch("http://localhost:3008/movies")
        .then(res=>res.json())
        .then(data=>
            dispatch({type:"SET_MOVIES", payload:data})
        )
        .catch(err => console.error("Erreur de chargement", err));
    }, [dispatch]);

    
    return(
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/watchlist" element={<WatchList/>}/>
                <Route path="/liked" element={<Liked/>}/>
            </Routes>
            </BrowserRouter>
    )
}