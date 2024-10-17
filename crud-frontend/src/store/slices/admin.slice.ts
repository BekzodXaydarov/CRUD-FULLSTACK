import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("adminToken") || ""

const admin = createSlice({
    name: "admin",
    initialState: { admin: [], updateadmin: [], token },
    reducers: {
        setAdmin: (state, { payload }) => {
            state.admin = payload
        },
        updateAdmin: (state, { payload }) => {
            state.updateadmin = payload
        },
        loginAdmin: (state, { payload }) => {
            localStorage.setItem("adminToken", payload)
            state.token = payload
        },
        logOut: (state, _) => {
            localStorage.removeItem("adminToken")
            state.token = ""
        }
    }
})

export const { setAdmin, updateAdmin, loginAdmin, logOut } = admin.actions;
export default admin.reducer