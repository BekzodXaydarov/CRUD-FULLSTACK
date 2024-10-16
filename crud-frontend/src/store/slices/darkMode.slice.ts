import { createSlice } from "@reduxjs/toolkit";

const DarkMode = createSlice({
    name: "darkMode",
    initialState: localStorage.getItem("darkMode") || "dark",
    reducers: {
        setMode: (state, { payload }) => {
            localStorage.setItem("darkMode", payload)
            state = payload
            return payload
        }
    }
})

export const { setMode } = DarkMode.actions;
export default DarkMode.reducer