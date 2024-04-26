import Card from "../UI/Card/Card";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志的容器
const Logs = () => {
    return (
        <Card className="logs">
            <LogItem />
            <LogItem />
            <LogItem />
        </Card>
    )
}

export default Logs;
