import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';
import './LogItem.css';
import MyDate from './MyDate/MyDate';

const LogItem = (props) => {
    // 添加一个state,记录是否显示确认框
    const [showConfirm, setShowConfirm] = useState(false);

    // 删除按钮的点击事件处理函数
    const deleteItemHandler = () => {
        // 弹出确认框 临时性的
        // const isDel = window.confirm("确定要删除吗？");
        // if (isDel) {
        //     // 删除当前的item，要删除item，其实就是要从数据的state中移除指定的数据
        //     // 调用父组件传递过来的函数
        //     // 删除日志
        //     // props.onDelLog(props.index);
        //     props.onDelLog();
        // }

        // 显示确认框
        setShowConfirm(true);

    }

    // 确认框的取消按钮的点击事件处理函数
    const cancelDelHandler = () => {
        // 隐藏确认框
        setShowConfirm(false);
    }
    // 确认按钮的点击事件处理函数
    const confirmDelHandler = () => {
        // 隐藏确认框
        setShowConfirm(false);
        // 删除日志
        props.onDelLog();
    }

    /*
        portal
            - 组件默认会作为父组件的后代渲染到页面中
                但是有些情况下，这种方式会带来一些问题
            - 通过portal技术，可以将组件渲染到指定的DOM节点中（页面的指定位置中）
            - 使用方法：
                1. 在index.html 中添加一个新的元素
                2. 修改组件的渲染方式
                    - 通过ReactDOM.createPortal() 作为返回值创建元素
                    - 参数：
                        - 第一个参数：要渲染的组件 JSX（修改前return后的代码）
                        - 第二个参数：要渲染到页面的指定位置中的DOM元素 目标位置（DOM元素）

                    - 返回值：
                        - 返回一个JSX元素
                        - 该元素是ReactDOM.createPortal() 返回的元素
    */

    return (
        <Card className="item">
            {/* 显示确认框 */}
            {showConfirm && <ConfirmModal
                confirmText="确定要删除吗？"
                onCancel={cancelDelHandler}
                onConfirm={confirmDelHandler}
            />}


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


