import { createSlice } from "@reduxjs/toolkit";

const IsCreate = createSlice({
    name: "isCreate",
    initialState: true,
    reducers: {
        setIscreate: (state, { payload }) => {
            state = payload
            return payload
        }
    }
})

export const { setIscreate } = IsCreate.actions
export default IsCreate.reducer