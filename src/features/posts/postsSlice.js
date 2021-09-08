import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name:'posts',
    initialState:[
        {
            id:1,
            name: 'Om',
            content: 'Hello Post1'
        },
        {
            id:2,
            name:'Sai',
            content: 'Hello Post2'
        }
    ],
    reducers:{
        postAdded: (state,action)=>{
            state.push(action.payload);
        },
        postRemove: (state) => {
            state.pop();
        },
    }
});

export const { postAdded ,postRemove } = postsSlice.actions;

export default postsSlice.reducer;