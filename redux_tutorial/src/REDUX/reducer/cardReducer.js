const initialState = {
    card: [],
};
export const cardReducer = (state = initialState, action) => {

    if (action.type === 'ADD_TO_CARD') {
        console.log("ADD TO ADDED");
        return {
            ...state,  
            card: [...state.card, action.payload]
        };
    }
    return state;
};