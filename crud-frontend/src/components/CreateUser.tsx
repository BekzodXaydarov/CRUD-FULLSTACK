import { useForm } from "react-hook-form"
import { IFunctionProp, IUser } from "../types"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { link } from "../utils"

const createUser = (props:IFunctionProp) => {
    const { register, handleSubmit } = useForm<IUser>()
    const [loading, setLoading] = useState(false)
    const Submit = async (data: IUser) => {
        setLoading(true)
        try {
            await axios.post(link + "/user", data)
            setLoading(false)
            toast.success("user created")
            props.fetchData()
        }
        catch (e: any) {
            toast.error(e.message || "Error")
            setLoading(false)
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(Submit)}>
                <h1>Create User</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter user name" id="name" {...register("name", { required: true })} />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter user Email" id="email" {...register("email", { required: true })} />
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Enter user password" id="password" {...register("password", { required: true })} />
                <button type="submit" disabled={loading} className={`${loading && "btn-loading"}`}>Create</button>
            </form>
        </div>
    )
}

export default createUser