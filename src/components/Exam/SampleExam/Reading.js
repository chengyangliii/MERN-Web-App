import React, {useState} from 'react'
import Overview from '../Overview'
import {Button, Container} from 'react-bootstrap'
import './exam_style.css'
import {useHistory} from "react-router-dom";
import mc from '../QuestionCollection/Mc'
import Timing from "./Timing";


export default function Reading() {

    const [currentId, setCurrentId] = useState('1');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answersStorage, setAnswersStorage] = useState([]);
    const [showResults, setShowResults] = useState(false);

    let history = useHistory();

    let markCount = 0;

    var questions = mc()

    // eslint-disable-next-line no-unused-vars
    const handleClick = e => {
        setCurrentId(e.target.name);
        setCurrentAnswer(e.target.value);
        if(e.target.name === 'finish') {
            setShowResults(true);
        }
        const answerPerChoose = {questionId: currentId, answerInList: currentAnswer};
        //Insert of drop element in the list according to choosing
        var check = answersStorage.some(ele => ele.questionId === currentId);
        if(check) {
            var i = answersStorage.findIndex((ele => ele.questionId === currentId));
            answersStorage.splice(i, 1);
            answersStorage.push(answerPerChoose);
        }else{
            answersStorage.push(answerPerChoose);
        }
        setAnswersStorage(answersStorage);
        //console.log(answersStorage);
    }


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

    const next = e => {
        history.push("/break_2")
    }


    if (showResults) {
        return (
            <div>
                <span>Result</span>
                <ol>{renderResultData()}</ol>
                <span>{markCount} / {questions.length} - {renderTotalMark()}</span>
            </div>
        )
    } else {

        return (
            <div>
                <Container>

                    <br></br>
                    <br></br>
                    <Overview
                        title="Upper Level Week 2&4&6 - Friday Reading"
                        total_marks="40"
                        time="40 minutes"
                    />

                    <br></br>

                    <h4>Section 3</h4>
                    <h4>Quantitative (Math) Section</h4>
                    <br></br>

                    <span className='align-middle'>
                        Reading each passage carefully and then answer the questions about it. For each
                        question, decide on the basis of the passage which one of the choices best answers
                        the questions.
                    </span>
                    <br></br>
                    <hr></hr>

                    <Button variant="outline-primary" onClick={next}>
                        Submit
                    </Button>

                    <br></br>
                    <br></br>

                    <Timing totalTime="2400000" alertTime="3000"/>



                </Container>
            </div>
        )
    }
}


