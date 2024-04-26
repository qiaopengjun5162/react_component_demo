import React from 'react';
import Card from '../../UI/Card/Card';
import './LogItem.css';
import MyDate from './MyDate/MyDate';

const LogItem = () => {
    return (
        <Card className="item">
            <MyDate />

            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">
                    学习 React
                </h2>
                <div className="time">
                    40分钟
                </div>
            </div>
        </Card>
    )
}

export default LogItem

// rafce 快捷键 代码片段
