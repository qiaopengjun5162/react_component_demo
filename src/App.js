import './App.css'
import Logs from "./Components/Logs/Logs"
import LogsForm from "./Components/LogsForm/LogsForm"


const App = () => {
    // 组件逻辑
    return <div className="app">
        <LogsForm />
        <Logs />
    </div>
}

export default App
