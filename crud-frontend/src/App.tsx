import { ToastContainer } from "react-toastify"
import "./App.css"
import { Login, Main } from "./components"
import { useMode, useToken } from "./store/useSelector"


const App = () => {
  const mode = useMode()
  const token = useToken()
  return (
    <div className={`app ${mode}`}>
      {
        token.length === 0 ? <Login /> : <Main />
      }
            <ToastContainer theme={"dark"} />
    </div>
  )
}

export default App