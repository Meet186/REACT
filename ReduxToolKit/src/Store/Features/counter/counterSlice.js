import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
        id : '',
    }
}
 const counterSlice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers : {
        increment : (state,action)=>{
            state.value += 1;
        },
        decrement :  (state,action)=>{
            state.value -= 1;
        },
        changeId : (state,action)=>{
            state.value.id = action.payload;
        }
    }
})
export const {increment,decrement,changeByValue,changeId} = counterSlice.actions;
export default counterSlice.reducer;