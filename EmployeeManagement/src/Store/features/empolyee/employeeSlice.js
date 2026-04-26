import { createSlice } from "@reduxjs/toolkit";
import { getEmployee, postEmployee } from "./employeeThunk";

const initialState = {
    employess : [],
    loading : false,
    error : null,
}

const employeeSlice =  createSlice({
    name : 'employee',
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(getEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(getEmployee.fulfilled, (state, action) => { state.employess = action.payload; state.loading = false; });
        builder.addCase(getEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });
        // postEmployee
         builder.addCase(postEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(postEmployee.fulfilled, (state, action) => {  state.loading = false;
  state.employess.push(action.payload); });
        builder.addCase(postEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });
    }


})

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
