import { useSelector } from "react-redux";
import { IStore } from "../types";


const useMode = () => useSelector(({ mode }: IStore) => mode)
const useUser = () => useSelector(({ user }: IStore) => user.user)
const useUpdateUser = () => useSelector(({ user }: IStore) => user.updateUser)
const useIsCreate = () => useSelector(({ isCreate }: IStore) => isCreate)

export { useMode, useUser, useUpdateUser, useIsCreate }