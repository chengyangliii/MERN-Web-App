import React from 'react'
import Answer from './Answer'

export default function Answers(props) {
    return (
        <div>
            <Answer
                letter="A"
                answer={props.question.answer_a}
                id={props.question.id}
                handleClick={props.handleClick}

            />
            <Answer
                letter="B"
                answer={props.question.answer_b}
                id={props.question.id}
                handleClick={props.handleClick}
            />
            <Answer
                letter="C"
                answer={props.question.answer_c}
                id={props.question.id}
                handleClick={props.handleClick}
            />
            <Answer
                letter="D"
                answer={props.question.answer_d}
                id={props.question.id}
                handleClick={props.handleClick}
            />
            <Answer
                letter="E"
                answer={props.question.answer_e}
                id={props.question.id}
                handleClick={props.handleClick}
            />
            <br></br>
        </div>
    )
}

