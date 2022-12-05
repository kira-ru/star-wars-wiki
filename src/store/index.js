import { configureStore} from '@reduxjs/toolkit'
import counterSlice from "./count/count.slice";
import {swapiAPI} from "../service/swapiAPI";

// const rootReducer = combineReducers({
//     counter: counterSlice
// })

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [swapiAPI.reducerPath]: swapiAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swapiAPI.middleware)
})