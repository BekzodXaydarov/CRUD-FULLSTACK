import { useForm } from "react-hook-form"
import { IUser } from "../types"
import axios from "axios"
import { link } from "../utils"
import { toast } from "react-toastify"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAdmin } from "../store/slices/admin.slice"

const Login = () => {
    const { register, handleSubmit, reset } = useForm<IUser>()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const Submit = async (data: IUser) => {
        setLoading(true)
        try {
            const res = await axios.post(link + "/adminLogin", data)
            dispatch(loginAdmin(res.data.token))
            setLoading(false)
            toast.success("Login is successfully")
            reset()
        }
        catch (e: any) {
            toast.error(e.message || "Error")
            setLoading(false)
        }
    }
    return (
        <div className="form-container" style={{ height: "100vh" }}>
            <form onSubmit={handleSubmit(Submit)}>
                <h1>Login</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter admin name" id="name" {...register("name", { required: true })} />
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Enter admin password" id="password" {...register("password", { required: true })} />
                <button type="submit" disabled={loading} className={`${loading && "btn-loading"}`}>Create</button>
            </form>
        </div>
    )
}

export default Login