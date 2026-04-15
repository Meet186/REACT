import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cardReducer } from "./cardReducer";

const ROOTREDUCER = combineReducers({
    productReducer,
    cardReducer,
})

export {ROOTREDUCER}