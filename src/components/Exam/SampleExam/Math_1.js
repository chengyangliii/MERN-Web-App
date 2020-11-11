import React, {useEffect, useState} from 'react'
import Question from '../Question'
import Answers from '../Answers'
import Overview from '../Overview'
import {Button, Container} from 'react-bootstrap'
import './exam_style.css'
import {useHistory} from "react-router-dom";
import Timing from "./Timing";
import axios from "axios";

export default function Math_1() {

    const [currentId, setCurrentId] = useState('1');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answersStorage, setAnswersStorage] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [showResults, setShowResults] = useState(false);
    const [questionList, setQuestionList] = useState([]);
    let history = useHistory();


    console.log("questionList: "+JSON.stringify(questionList))

    const handleClick = e => {
        setCurrentId(e.target.name);
        setCurrentAnswer(e.target.value);
        const answerPerChoose = {questionId: currentId, answerInList: currentAnswer};
        //Insert of drop element in the list according to choosing
        var check = answersStorage.some(ele => ele.questionId === currentId);
        if (check) {
            var i = answersStorage.findIndex((ele => ele.questionId === currentId));
            answersStorage.splice(i, 1);
            answersStorage.push(answerPerChoose);
        } else {
            answersStorage.push(answerPerChoose);
        }
        setAnswersStorage(answersStorage);
        console.log("answersStorage: " + JSON.stringify(answersStorage));
    }
    const next = e => {
        history.push("/break")
    }


    // let markCount = 0;
    // const renderTotalMark = () => {
    //     var count = markCount / mc_test.length;
    //     count = count.toFixed(2)
    //     return <span>{count}</span>
    // }
    // const renderResultMark = (question, ele) => {
    //     if (question.correct_answer === ele.answerInList) {
    //         markCount++;
    //         return <span>Correct</span>
    //     }
    //     return <span>Wrong</span>
    // }
    // const ShowCorrectAnswer = (question, ele) => {
    //     if (question.correct_answer === ele.answerInList) {
    //         return null
    //     }
    //     return <span>&nbsp;&nbsp;Correct answer: {question.correct_answer}</span>
    // }
    // const renderResultData = () => {
    //     return answersStorage.map(ele => {
    //         const question = mc_test.find(question => question.id === ele.questionId);
    //         return (
    //             <span>
    //                 {question.id} - {renderResultMark(question, ele)} {ShowCorrectAnswer(question, ele)}
    //                 <br></br>
    //             </span>
    //         )
    //     })
    // }

    useEffect(() => {
        axios.get(`http://localhost:8080/questionList/7`)
            .then(result => {
                //console.log("result.data.data.exam: "+JSON.stringify(result.data.data.exam))
                var temp = result.data.data.exam.replace(/\\/g, '')
                console.log(temp)
                temp = JSON.parse(temp)
                setQuestionList(temp)
            })
        }, [])

    console.log("questionList after: "+questionList)

    return (
        <div>
            <Container>
                <br></br>
                <br></br>
                <Overview
                    title="Upper Level Week 2&4&6 - Friday Math 2"
                    total_questions="25 questions"
                    total_marks="25"
                    time="30 minutes"
                />
                <br></br>
                <h4>Section 2</h4>
                <h4>Quantitative (Math) Section</h4>
                <br></br>
                <span className='align-middle'>In this section each question is followed by five answer choices.You may write inthe test booklet. For each answer you choose, filling the corresponding bubble on your answer document.
                    Note: In this section, you can assume that the figures that accompany the questions are accurately drawn EXCEPT when the question states that a particular figure is not drawn to scale.</span>
                <br></br>
                <hr></hr>
                {
                    questionList.map(question => (
                                    <span key={question.id}>
                                        <Question question={question.question}/>
                                        <Answers
                                            question={question}
                                            handleClick={handleClick}
                                        />
                                    </span>
                    ))
                }
                <Button variant="outline-primary" name="finish" onClick={next}>
                    Submit
                </Button>
                <br></br>
                <br></br>
                <Timing totalTime="50000000" alertTime="3000"/>

                {/*<div>*/}
                {/*    <Container>*/}
                {/*        <span>Result</span>*/}
                {/*        <ol>{renderResultData()}</ol>*/}
                {/*        <span>{markCount} / {mc_test.length} - {renderTotalMark()}</span>*/}
                {/*    </Container>*/}
                {/*</div>*/}


            </Container>
        </div>
    )
}