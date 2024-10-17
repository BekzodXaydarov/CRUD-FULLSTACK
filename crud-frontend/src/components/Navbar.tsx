import { BiMoon, BiSun } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setMode } from "../store/slices/darkMode.slice"
import { INavbar } from "../types"
import { logOut } from "../store/slices/admin.slice"

const Navbar = (props: INavbar) => {
    const dispatch = useDispatch()
    const handleMode = () => {
        if (props.mode == "dark") {
            dispatch(setMode("white"))
        } else {
            dispatch(setMode("dark"))
        }
    }
    const handleLogOut = () => {
        dispatch(logOut({}))
    }
    return (
        <nav>
            <h1>Bekzod Crud</h1>
            <div>
                <button onClick={handleMode}> {props.mode == "dark" ? <BiSun /> : <BiMoon />} </button>
                <button className="btn-logOut" onClick={handleLogOut}>Log out</button>
            </div>
        </nav>
    )
}

export default Navbar