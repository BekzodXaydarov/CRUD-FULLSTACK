import { useSelector } from "react-redux";
import { IStore } from "../types";


const useMode = () => useSelector(({ mode }: IStore) => mode)
const useUser = () => useSelector(({ user }: IStore) => user.admin)
const useUpdateUser = () => useSelector(({ user }: IStore) => user.updateadmin)
const useIsCreate = () => useSelector(({ isCreate }: IStore) => isCreate)
const useToken = () => useSelector(({ user }: IStore) => user.token)

export { useMode, useUser, useUpdateUser, useIsCreate, useToken }