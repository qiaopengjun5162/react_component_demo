import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = (props) => {
    console.log(props.onSaveLog);
    /*
        当表单项发生变化时，获取用户输入的数据
    
    */
    // 创建三个变量，用来存储表单中的数据
    // 日期、内容、时长
    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = 0;

    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    // 将表单数据统一到一个state中
    // const [formData, setFormData] = useState({
    //     inputDate: '',
    //     inputDesc: '',
    //     inputTime: ''
    // })


    // 创建一个响应函数，监听表单项的变化
    // 监听日期变化
    const dateChangeHandler = (event) => {
        // 获取到当前触发事件的对象
        // 打印用户输入的内容
        // console.log(event.target.value)
        // 更新inputDate的值
        // inputDate = event.target.value;

        // 更新inputDate的值
        setInputDate(event.target.value);

        // 更新表单数据
        // setFormData({
        //     ...formData,
        //     inputDate: event.target.value
        // })
    }

    // 创建一个响应函数，监听表单项的变化
    // 监听内容的变化
    const descChangeHandler = (event) => {
        // 获取到当前触发事件的对象
        // 事件对象中保存了当前事件触发时的所有信息
        // event.target 保存了当前触发事件的对象(DOM对象)
        // event.target.value 保存了当前触发事件的对象的值(用户输入的值)
        // 打印用户输入的内容
        // console.log(event.target.value)
        // 更新inputDesc的值
        // inputDesc = event.target.value;

        // 更新inputDesc的值
        setInputDesc(event.target.value);

        // 更新表单数据
        // setFormData({
        //     ...formData,
        //     inputDesc: event.target.value
        // })
    }


    // 创建一个响应函数，监听表单项的变化
    // 监听时长的变化
    const timeChangeHandler = (event) => {
        // 打印用户输入的内容
        // console.log(event.target.value)
        // 更新inputTime的值
        // inputTime = event.target.value;

        // 更新inputTime的值
        setInputTime(event.target.value);

        // 更新表单数据
        // setFormData({
        //     ...formData,
        //     inputTime: event.target.value
        // })
    }

    // 当表单提交时，汇总表单中的数据
    /*
        在React中，通常表单不需要自行提交，而是通过React提交
        而是通过表单的onSubmit属性来指定一个回调函数，当表单提交时，会自动调用该回调函数
    */
    const formSubmitHandler = (event) => {
        // 阻止表单的默认提交行为
        event.preventDefault()

        // 获取表单项中的数据 日期、内容、时长
        // 打印表单中的数据
        // console.log(inputDate, inputDesc, inputTime);
        // 将数据拼装为一个对象
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }


        // const logData = {
        //     date: new Date(formData.inputDate),
        //     desc: formData.inputDesc,
        //     time: +formData.inputTime
        // }
        /*
            提交表单后如何清空表单中的旧数据
                现在这种表单在React中我们称为非受控组件

            我们可以将表单中的数据存储到state中，
                然后将state设置为表单项value值，
                这样当表单项发生变化，state会随之变化，
                反之，state发生变化，表单项也会跟着改变，这种操作我们就称为双向绑定
                这样一来，表单就成为了一个受控组件
        */
        
        // 当要添加新的日志时，调用父组件传递过来的函数
        props.onSaveLog(newLog);

        // 清空表单中的旧数据
        setInputDate('');
        setInputDesc('');
        setInputTime('');

        // 清空表单中的旧数据
        // setFormData({
        //     inputDate: '',
        //     inputDesc: '',
        //     inputTime: ''
        // })
        // console.log(logData);


    }

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label htmlFor="date">日期</label>
                    {/* <input onChange={dateChangeHandler} value={formData.inputDate} type="date" id="date" /> */}
                    <input onChange={dateChangeHandler} value={inputDate} type="date" id="date" />
                </div>
                <div className="form-item">
                    <label htmlFor="desc">内容</label>
                    {/* <input onChange={descChangeHandler} value={formData.inputDesc} id="desc" type="text" /> */}
                    <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="time">时长</label>
                    {/* <input onChange={timeChangeHandler} value={formData.inputTime} type="number" id="time" /> */}
                    <input onChange={timeChangeHandler} value={inputTime} type="number" id="time" />
                </div>
                <div className="form-btn">
                    <button>添加</button>
                </div>

            </form>
        </Card>
    )
}

export default LogsForm
