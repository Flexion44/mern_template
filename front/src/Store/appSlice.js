import {createSlice} from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isCondensed: false,
    },
    reducers: {
    }
});

export default appSlice.reducer;
