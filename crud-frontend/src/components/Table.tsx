import axios from "axios"
import { link } from "../utils"
import { toast } from "react-toastify"
import { IFunctionProp, IUser } from "../types"
import { useToken, useUser } from "../store/useSelector"
import { useDispatch } from "react-redux"
import { updateAdmin } from "../store/slices/admin.slice"
import { setIscreate } from "../store/slices/isCreate.slice"


const Table = (props: IFunctionProp) => {
  const data: IUser[] = useUser()
  const dispatch = useDispatch()
  const token = useToken()

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(link + "/admin/" + id, {
        headers: {
          token: token,
          'Content-Type': 'application/json'
        }
      })
      toast.dark("user deleted")
      props.fetchData()
    }
    catch (error) {
      console.error(error);
    }
  }

  const handleUpdate = async (user: IUser) => {
    try {
      dispatch(updateAdmin(user))
      dispatch(setIscreate(false))
    }
    catch (error: any) {
      toast.error(error.message || "Error")
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>email</th>
          <th>createdAt</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((user, index) => {
            return <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td className="actions">
                <button className="btn-delete" onClick={() => handleDelete(user.id)}>Delete</button>
                <button className="btn-update" onClick={() => handleUpdate(user)}>Update</button>
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Table