import { ADD_TO_PRODUCT,INCREMENT } from "../Constants/productConstant";
export const addToProduct = (details)=>{
    return {
        type : ADD_TO_PRODUCT,
        payload : details,
    }
}
export const Increment = ()=>{
    return {
        type : INCREMENT,
    }
}
