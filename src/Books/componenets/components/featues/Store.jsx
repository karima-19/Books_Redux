import { createStore } from "redux";
import {Reducer} from "./bookReducer"

export const Store=createStore(Reducer);