import filterReducer from "./filter";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    // skill:skillReducer,
    filter:filterReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store
export type RootState = ReturnType<typeof rootReducer>