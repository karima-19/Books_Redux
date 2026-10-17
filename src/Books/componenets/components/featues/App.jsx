import { Store } from "./Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { Provider } from "react-redux";


import {useEffect} from "react";
import {Nav} from "../navbar";
import {Books} from "../books"
import {InReadingList} from "../inReadingList"
import {Liked} from "../likedbooks"


export const App=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        fetch("http://localhost:3009/books")
        .then(res=>res.json())
        .then(data=>
            dispatch({type:"SET_BOOKS", payload:data})
        )
        .catch(err => console.error("Erreur de chargement", err));
    }, [dispatch]);

    
    return(
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Books/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/inReadingList" element={<InReadingList/>}/>
                <Route path="/likedBooks" element={<Liked/>}/>
            </Routes>
            </BrowserRouter>
    )
}