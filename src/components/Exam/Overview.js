import React from 'react'

function Overview(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>Total Questions: {props.total_questions}</div>
            <div>Total Marks: {props.total_marks}</div>
            <div>Time: {props.time}</div>
        </div>
    )

}

export default Overview