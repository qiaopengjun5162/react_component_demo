import { useState } from "react";
import Card from "../UI/Card/Card";
import LogFilter from "./LogFilter/LogFilter";
import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志的容器
const Logs = (props) => {
    /*
            logsData 用来存储学习的日志
                这个组件除了当前组件logs需要使用外，logsForm也需要使用
                当遇到一个数据需要被多个组件使用时，可以将这个数据放入到这些组件共同的祖先元素中
                这样就可以使得多个组件都能方便的访问到这个数据
    
            state 的提升
        */
    // 模拟一组从服务器获取到的日志数据
    // const logsData = [
    //     { id: "001", date: new Date(2024, 1, 1, 12, 0, 0), desc: "学习React", time: 120 },
    //     { id: "002", date: new Date(2024, 1, 5, 12, 30, 0), desc: "学习React Hooks", time: 120 },
    //     { id: "003", date: new Date(2024, 1, 9, 13, 0, 0), desc: "学习React Router", time: 120 },
    // ];

    // 创建一个存储年份的state
    const [filterYear, setFilterYear] = useState(2024);

    // 过滤数据 只显示某一年的数据
    let filterDate = props.logsData.filter((item) => item.date.getFullYear() === filterYear);

    // 创建一个修改年份的函数
    const changeFilterYear = (year) => {
        setFilterYear(year);
    }

    // 将数据放入JSX中
    // let logItemData = props.logsData.map((item, index) => (
    let logItemData = filterDate.map((item, index) => (
        <LogItem
            // logIndex={index}
            // onDelLog={props.onDelLog}
            // onDelLog={() => props.onDelLog(index)}
            onDelLog={() => props.onDelLog(item.id)}
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time}
        />
    ));

    if (logItemData.length === 0) {
        logItemData = <p className="no-logs">暂无日志！</p>;
    }

    // 返回组件
    return (
        // <Card className="logs">
        //     <LogItem />
        //     {/* <LogItem /> */}
        //     {/* <LogItem /> */}
        // </Card>

        // <div className="logs">{logItemData.length !== 0 ? logItemData : <p className="no-logs">暂无日志！</p>}</div>

        <Card className="logs">
            {/* 引入年份的选择组件 */}
            <LogFilter year={filterYear} onYearChange={changeFilterYear} />
            {logItemData}
        </Card>
    );
};

export default Logs;
