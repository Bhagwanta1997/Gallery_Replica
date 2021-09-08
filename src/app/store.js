import { configureStore } from '@reduxjs/toolkit'
import PostsReducer from '../features/posts/postsSlice'
import CounterSlice from '../features/counter/CounterSlice'
import LoginSlice from '../features/Login/LoginSlice'
export default configureStore({
  reducer:{
    posts:PostsReducer,
    counter:CounterSlice,
    login:LoginSlice,
  },
})
