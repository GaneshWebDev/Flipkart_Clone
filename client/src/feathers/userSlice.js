import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:false,
    id:null,
    email:null,
    orders:null
}
const userSlice=createSlice({
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

export const {userLogin,userLogout,userOrders}=userSlice.actions;
export default userSlice.reducer;
