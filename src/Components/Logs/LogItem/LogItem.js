import React from 'react';
import Card from '../../UI/Card/Card';
import './LogItem.css';
import MyDate from './MyDate/MyDate';

const LogItem = (props) => {
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
        </Card>
    )
}

export default LogItem

// rafce 快捷键 代码片段
