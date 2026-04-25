import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  empolyeePopup : false,
  deletePopup : false,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openEmpolyeePopup : (state,action)=> {
        state.empolyeePopup = action.payload ?? true;
    },
    closeEmployeePopup : (state,action)=>{
        state.empolyeePopup = false;
    },
     openDeletePopup : (state,action)=> {
        state.deletePopup = action.payload ?? true;
    },
    closeDeletePopup : (state,action)=>{
        state.deletePopup = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const {openEmpolyeePopup,closeEmployeePopup,openDeletePopup,closeDeletePopup } = popupSlice.actions

export default popupSlice.reducer