import { useForm } from "react-hook-form"
import { IFunctionProp, IUser } from "../types"
import { useState } from "react"
import axios from "axios"
import { link } from "../utils"
import { toast } from "react-toastify"
import { useToken, useUpdateUser } from "../store/useSelector"
import { useDispatch } from "react-redux"
import { setIscreate } from "../store/slices/isCreate.slice"

const UpdateUser = (props: IFunctionProp) => {
    const user = useUpdateUser()
    const { register, handleSubmit } = useForm<IUser>({
        defaultValues: {
            name: user?.name,
            email: user?.email,
            password: ""
        }
    })
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const token = useToken()
    const Submit = async (data: IUser) => {
        setLoading(true)
        try {
            await axios.put(link + "/admin/" + user.id, data, {
                headers: {
                    token: token,
                    'Content-Type': 'application/json'
                }
            })
            setLoading(false)
            toast.success("admin updated")
            props.fetchData()
            dispatch(setIscreate(true))
        }
        catch (e: any) {
            toast.error(e.message || "Error")
            setLoading(false)
        }
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(Submit)}>
                <h1>Update Admin</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter admin name" id="name" {...register("name", { required: true })} />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter admin Email" id="email" {...register("email", { required: true })} />
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Enter admin password" id="password" {...register("password", { required: true })} />
                <button type="submit" disabled={loading} className={`${loading && "btn-loading"}`}>Update</button>
            </form>
        </div>
    )
}

export default UpdateUser