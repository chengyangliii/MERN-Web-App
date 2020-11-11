import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Answer(props) {
    return (
        <div>
            <input type="radio" name={props.id} value={props.letter} onClick={props.handleClick}/>
            <span>{props.letter} &nbsp; {props.answer}</span> <br></br>
        </div>
    )
}

export default Answer