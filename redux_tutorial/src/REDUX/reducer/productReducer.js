import { ADD_TO_PRODUCT,INCREMENT } from "../Constants/productConstant";
const initialState = {
    products: [],
    count: 0,
};
export const productReducer = (state = initialState, action) => {
    if (action.type === ADD_TO_PRODUCT) {
        console.log("PRODUCT ADDED");
        return {
            ...state,  
            products: [...state.products, action.payload]
        };
    }
    if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1, 
        };
    }
    return state;
};