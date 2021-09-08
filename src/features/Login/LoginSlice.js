import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'login',
    initialState:{
        isAuthenticated:false
    },
    reducers:{
            onLoginSuccess: state =>{
                state.isAuthenticated = true; 
            },
            onLogoutSuccess: state => {
                state.isAuthenticated=false
            }       
    }
});

export const { onLoginSuccess, onLogoutSuccess } = LoginSlice.actions;

export default LoginSlice.reducer;