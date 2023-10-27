import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:false,
    id:null,
    email:null,
    orders:null
}
const userReducer=createSlice({
    name:'user',
    initialState,
    reducers:{
        userLogin:(state,action)=>{
            state.user=true;
            state.id = action.payload.id;
            state.email=action.payload.email;
            state.orders=action.payload.orders;
        },
        userLogout:(state)=>{
            state.user=false;
            state.id=null;
            state.email=null;
            state.orders=null;
        },
        userOrders:(state,action)=>{
            state.orders=action.payload.orders;
        }
    }

});

export const {userLogin,userLogout,userOrders}=userReducer.actions;
export default userReducer.reducer;
