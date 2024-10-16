import { configureStore } from "@reduxjs/toolkit"
import DarkMode from "./slices/darkMode.slice"
import { IStore } from "../types"
import User from "./slices/user.slice"
import Iscreate from "./slices/isCreate.slice"

const store = configureStore<IStore>({
    reducer: {
        mode: DarkMode,
        user: User,
        isCreate: Iscreate
    }
})

export { store }