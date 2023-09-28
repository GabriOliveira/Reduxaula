import { createSlice } from "@reduxjs/toolkit";

const initialState={
    corFundo : "black",
    corTexto : "white"
}

const temaSlice = createSlice({
    name : 'tema',
    initialState 
})

export default temaSlice.reducer;