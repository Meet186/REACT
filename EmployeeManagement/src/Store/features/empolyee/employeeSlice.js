import { createSlice } from "@reduxjs/toolkit";
import { deleteEmployee, getEmployee, postEmployee, updateEmployee } from "./employeeThunk";

const initialState = {
    employess: [],
    loading: false,
    error: null,
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(getEmployee.fulfilled, (state, action) => { state.employess = action.payload; state.loading = false; });
        builder.addCase(getEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });


        // postEmployee
        builder.addCase(postEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(postEmployee.fulfilled, (state, action) => {
            state.loading = false;
            state.employess.push(action.payload);
        });
        builder.addCase(postEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });

        // deleteEmployee


        builder.addCase(deleteEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(deleteEmployee.fulfilled, (state, action) => {
            state.loading = false;
            state.employess = state.employess.filter(
                (emp) => emp.id !== action.payload
            );
        });
        builder.addCase(deleteEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });

        // updateEmployee
        builder.addCase(updateEmployee.pending, (state) => { state.loading = true; state.error = null });
        builder.addCase(updateEmployee.fulfilled, (state, action) => {
            state.loading = false;
            const updatedEmployee = action.payload;
            const index = state.employess.findIndex((emp) => emp.id === updatedEmployee.id);
            if (index !== -1) {
                state.employess[index] = updatedEmployee;
            }
        });
        builder.addCase(updateEmployee.rejected, (state, action) => { state.error = action.payload; state.loading = false; });


    }


})

export const { } = employeeSlice.actions;
export default employeeSlice.reducer;
