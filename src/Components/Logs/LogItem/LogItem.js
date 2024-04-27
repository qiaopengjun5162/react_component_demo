import React from 'react';
import Card from '../../UI/Card/Card';
import './LogItem.css';
import MyDate from './MyDate/MyDate';

const LogItem = (props) => {
    // 删除按钮的点击事件处理函数
    const deleteItemHandler = () => {
        // 弹出确认框 临时性的
        const isDel = window.confirm("确定要删除吗？");
        if (isDel) {
            // 删除当前的item，要删除item，其实就是要从数据的state中移除指定的数据
            // 调用父组件传递过来的函数
            // 删除日志
            // props.onDelLog(props.index);
            props.onDelLog();
        }
    }
    return (
        <Card className="item">
            <MyDate date={props.date} />

            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">
                    {props.desc}
                </h2>
                <div className="time">
                    {props.time}分钟
                </div>
            </div>

            {/* 删除按钮 */}
            <div className="actions">
                <div className="delete-btn" onClick={deleteItemHandler}>x</div>
            </div>
        </Card>
    )
}

export default LogItem


