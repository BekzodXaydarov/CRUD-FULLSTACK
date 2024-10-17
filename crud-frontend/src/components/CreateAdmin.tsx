import { useForm } from "react-hook-form"
import { IFunctionProp, IUser } from "../types"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { link } from "../utils"
import { useToken } from "../store/useSelector"

const createUser = (props: IFunctionProp) => {
    const { register, handleSubmit, reset } = useForm<IUser>()
    const [loading, setLoading] = useState(false)
    const token = useToken()
    const Submit = async (data: IUser) => {
        setLoading(true)
        try {
            await axios.post(link + "/admin", data, {
                headers: {
                    token: token,
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            toast.success("admin created")
            props.fetchData()
            reset()
        }
        catch (e: any) {
            toast.error(e.message || "Error")
            setLoading(false)
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(Submit)}>
                <h1>Create Admin</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter admin name" id="name" {...register("name", { required: true })} />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter admin Email" id="email" {...register("email", { required: true })} />
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Enter admin password" id="password" {...register("password", { required: true })} />
                <button type="submit" disabled={loading} className={`${loading && "btn-loading"}`}>Create</button>
            </form>
        </div>
    )
}

export default createUser