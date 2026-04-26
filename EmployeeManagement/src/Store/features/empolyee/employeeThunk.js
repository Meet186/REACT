import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Config/axiosInstance";

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
            const response = await api.post('employee',details);
            return response.data;
        } catch (error) {
            return rejectWithValue('something went wrong')
        }

    }

)