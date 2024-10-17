import { toast } from "react-toastify"
import { CreateAdmin, Table, UpdateAdmin } from "."
import Navbar from "./Navbar"
import { setAdmin } from "../store/slices/admin.slice";
import axios from "axios";
import { link } from "../utils";
import { useDispatch } from "react-redux";
import { useIsCreate, useMode, useToken } from "../store/useSelector";
import { useEffect } from "react";

const Main = () => {
    const mode = useMode()
    const isCreate = useIsCreate()
    const dispatch = useDispatch()
    const token = useToken()
    const fetchData = async () => {
        try {
            const res = await axios.get(link + "/admin", {
                headers: {
                    token: token,
                    'Content-Type': 'application/json'
                }
            })
            dispatch(setAdmin(res.data.admin))
        } catch (error: any) {
            toast.error(error.message || "Error")
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(link + "/admin", {
                    headers: {
                        token: token,
                        'Content-Type': 'application/json'
                    }
                })
                dispatch(setAdmin(res.data.admin))
                toast.success(res.data.message)
            } catch (error: any) {
                toast.error(error.message || "Error")
            }
        };
        fetchData()
    }, [])
    return (
        <>
            <Navbar mode={mode} />
            {isCreate ? <CreateAdmin fetchData={fetchData} /> : <UpdateAdmin fetchData={fetchData} />}
            <Table fetchData={fetchData} />
        </>
    )
}

export default Main