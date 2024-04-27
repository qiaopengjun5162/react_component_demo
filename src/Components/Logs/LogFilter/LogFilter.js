import React from 'react'


const LogFilter = props => {
    // 创建监听change事件的函数
    const handleYearChange = (event) => {
        props.onYearChange(+event.target.value)
    }
    // 创建一个下拉框，用于选择年份
    return (
        <div>
            年份：<select value={props.year} onChange={handleYearChange}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}

LogFilter.propTypes = {}

export default LogFilter
