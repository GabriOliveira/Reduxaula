import { configureStore } from "@reduxjs/toolkit";
import temaSlice from './reducers/tema'

const store=configureStore({
    reducer: temaSlice
})

export default store;