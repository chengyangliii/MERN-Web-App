import React from 'react'
import {Container} from 'react-bootstrap'
import './SampleExam/exam_style.css'


export default function ExamSystem(props) {

    let markCount = 0;

    const questions = props.questions
    const answersStorage = props.answersStorage

    console.log(answersStorage)

    const renderTotalMark = () => {
        var count = markCount / questions.length;
        count = count.toFixed(2)
        return <span>{count}</span>
    }

    const renderResultMark = (question, ele) => {
        if (question.correct_answer === ele.answerInList) {
            markCount++;
            return <span>Correct</span>
        }
        return <span>Wrong</span>
    }

    const ShowCorrectAnswer = (question, ele) => {
        if (question.correct_answer === ele.answerInList) {
            return null
        }
        return <span>&nbsp;&nbsp;Correct answer: {question.correct_answer}</span>
    }

    const renderResultData = () => {
        return answersStorage.map(ele => {
            const question = questions.find(question => question.id === ele.questionId);
            return (
                <span>
                    {question.id} - {renderResultMark(question, ele)} {ShowCorrectAnswer(question, ele)}
                    <br></br>
                </span>
            )
        })
    }


    return (
        <div>
            <Container>
                <span>Result</span>
                <ol>{renderResultData()}</ol>
                <span>{markCount} / {questions.length} - {renderTotalMark()}</span>
            </Container>
        </div>
    )
}