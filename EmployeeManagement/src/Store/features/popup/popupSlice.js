import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  empolyeePopup : false,
  deletePopup : false,
  showHighlights : false,
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
    },
    toggleView : (state) => {
        state.showHighlights = !state.showHighlights;
    }
  },
})

// Action creators are generated for each case reducer function
export const {openEmpolyeePopup,closeEmployeePopup,openDeletePopup,closeDeletePopup,toggleView } = popupSlice.actions

export default popupSlice.reducer