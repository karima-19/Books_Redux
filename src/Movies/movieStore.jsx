import {createStore} from "redux";
import {Reducer} from "./movieReducer"

export const Store=createStore(Reducer);