import {configureStore} from "@reduxjs/toolkit";
import memberReducer from './slice/authSlice.tsx'
import fileReducer from './slice/fileSlice.tsx'
import tokenReducer from './slice/tokenSlice.tsx'

export const store = configureStore({
    reducer:{
        member: memberReducer,
        fileUpload: fileReducer,
        token: tokenReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
