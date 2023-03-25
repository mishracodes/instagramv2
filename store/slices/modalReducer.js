import { createSlice } from "@reduxjs/toolkit";

const initialState={
    modalData:'',
    createModal:false
}
export const modalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        toogleCreateModal:(state,action)=>{
            if(action.payload)
            state.modalData=action.payload.data
            state.createModal=!state.createModal;
        }
    },
    
})

export const {toogleCreateModal}=modalSlice.actions
export const modalItems = (state) => state.modal;
export default modalSlice.reducer