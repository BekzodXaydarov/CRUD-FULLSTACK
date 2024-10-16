import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
    name: "user",
    initialState: { user: [], updateUser: [] },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload
        },
        updateUser: (state, { payload }) => {
            state.updateUser = payload
        }
    }
})

export const { setUser, updateUser } = User.actions;
export default User.reducer