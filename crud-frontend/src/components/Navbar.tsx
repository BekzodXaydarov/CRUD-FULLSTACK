import { BiMoon, BiSun } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setMode } from "../store/slices/darkMode.slice"
import { INavbar } from "../types"

const Navbar = (props:INavbar) => {
    const dispatch = useDispatch()
    const handleMode = () => {
        if(props.mode == "dark"){
            dispatch(setMode("white"))
        }else{
            dispatch(setMode("dark"))
        }
    }
    return (
        <nav>
            <h1>Bekzod Crud</h1>
            <button onClick={handleMode}> {props.mode == "dark" ? <BiSun /> : <BiMoon />} </button>
        </nav>
    )
}

export default Navbar