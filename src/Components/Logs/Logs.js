import LogItem from "./LogItem/LogItem";
import "./Logs.css";

// 日志的容器
const Logs = () => {
    /*
        logsData 用来存储学习的日志
            这个组件除了当前组件logs需要使用外，logsForm也需要使用
            当遇到一个数据需要被多个组件使用时，可以将这个数据放入到这些组件共同的祖先元素中
            这样就可以使得多个组件都能方便的访问到这个数据

        state 的提升
    */
    // 模拟一组从服务器获取到的日志数据
    const logsData = [
        { id: "001", date: new Date(2024, 1, 1, 12, 0, 0), desc: "学习React", time: 120 },
        { id: "002", date: new Date(2024, 1, 5, 12, 30, 0), desc: "学习React Hooks", time: 120 },
        { id: "003", date: new Date(2024, 1, 9, 13, 0, 0), desc: "学习React Router", time: 120 },
    ];

    // 将数据放入JSX中
    const logItemDate = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);
    return (
        // <Card className="logs">
        //     <LogItem />
        //     {/* <LogItem /> */}
        //     {/* <LogItem /> */}
        // </Card>

        <div className="logs">
            {logItemDate}
        </div>
    )
}

export default Logs;
