import { useState } from "react";
import './App.css';
import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";


const App = () => {
    // const logsData = [
    const [logsData, setLogsData] = useState([
        { id: "001", date: new Date(2024, 1, 1, 12, 0, 0), desc: "学习React", time: 120 },
        { id: "002", date: new Date(2024, 1, 5, 12, 30, 0), desc: "学习React Hooks", time: 120 },
        { id: "003", date: new Date(2024, 1, 9, 13, 0, 0), desc: "学习React Router", time: 120 },
    ]);

    /*
        将logsForm中的数据传递给App组件，然后App组件将新的日志添加到logsData中，并重新渲染Logs组件以显示新的日志。
    */
    const saveLogHandler = (newLog) => {
        console.log('App.js saveLogHandler called with newLog: ', newLog);
        // 向新的日志中添加ID
        // newLog.id = Date.now() + '';
        newLog.id = Date.now().toString();
        // 将新的日志添加到logsData中
        // logsData.push(newLog);
        // // 重新渲染Logs组件以显示新的日志
        // setLogsData([...logsData]);

        // 更新logsData
        // setLogsData([...logsData, newLog])

        // 更新logsData
        setLogsData((prevLogsData) => {
            return [...prevLogsData, newLog];
        })
    }

    // 定义一个函数，从数据中删除一条日志
    const delLogByIndex = (index) => {
        setLogsData(prevState => {
            const newLogsData = [...prevState];
            newLogsData.splice(index, 1);
            return newLogsData;
        });
    }
    // const deleteLogHandler = (logId) => {
    //     // 过滤掉id与logId相等的日志
    //     setLogsData(logsData.filter((log) => log.id !== logId));

    //     // 更新logsData
    //     setLogsData((prevLogsData) => {
    //         return prevLogsData.filter((log) => log.id !== logId);
    //     })
    // }
    // 组件逻辑
    return <div className="app">
        <LogsForm onSaveLog={saveLogHandler} />
        <Logs logsData={logsData} onDelLog={delLogByIndex} />
    </div>
}

export default App
