import axios from "axios"
import "./App.css"
import { CreateUser, Navbar, Table, UpdateUser } from "./components"
import { setUser } from "./store/slices/user.slice"
import { useIsCreate, useMode } from "./store/useSelector"
import { toast, ToastContainer } from 'react-toastify'
import { link } from "./utils"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


const App = () => {
  const mode = useMode()
  const dispatch = useDispatch()
  const isCreate = useIsCreate()
  const fetchData = async () => {
    try {
      const res = await axios.get(link + "/user")
      dispatch(setUser(res.data.user))
    } catch (error: any) {
      toast.error(error.message || "Error")
    }
  };
  useEffect(() => {
    fetchData()
    toast.success("List of User")
  }, [])
  return (
    <div className={`app ${mode}`}>
      <Navbar mode={mode} />

      {isCreate ? <CreateUser fetchData={fetchData} /> : <UpdateUser fetchData={fetchData} />}
      <Table fetchData={fetchData} />
      <ToastContainer theme={"dark"} />
    </div>
  )
}

export default App