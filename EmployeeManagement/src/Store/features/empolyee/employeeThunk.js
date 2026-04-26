import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Config/axiosInstance";
import { useDispatch } from "react-redux";

export const getEmployee = createAsyncThunk(
    'employee/getEmployee',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get('employee');
            return response.data;
        } catch (error) {
            return rejectWithValue('something went wrong')
        }
    }
)
export const postEmployee = createAsyncThunk(
    'employee/postEmployee',
    async (details, { rejectWithValue }) => {
        try {
            const response = await api.post('employee', details);

            return response.data;
        } catch (error) {
            return rejectWithValue('something went wrong')
        }

    }
)
export const deleteEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async (id, { rejectWithValue },) => {
        try {
            const response = await api.delete(`employee/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue('something went wrong')
        }
    }
)

export const updateEmployee = createAsyncThunk(
    'employee/updateEmployee',
    async ({id,details}, { rejectWithValue },dispatch) => {
       
        
        try {
            const response = await api.put(`employee/${id}`,details);
            return response.data;
        } catch (error) {
            return rejectWithValue('something went wrong')
        }
    }
)

