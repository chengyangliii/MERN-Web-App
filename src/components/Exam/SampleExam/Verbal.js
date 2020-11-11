import React, {useState} from 'react'
import Question from '../Question'
import Answers from '../Answers'
import Overview from '../Overview'
import {Button, Container} from 'react-bootstrap'
import './exam_style.css'
import {useHistory} from "react-router-dom";
import Timing from "./Timing";
import mc from '../QuestionCollection/Mc'


export default function Verbal() {

    const [currentId, setCurrentId] = useState('1');
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answersStorage, setAnswersStorage] = useState([]);
    const [showResults, setShowResults] = useState(false);

    let history = useHistory();

    let markCount = 0;

    var questions = mc()

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
        history.push("/math_2")
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
                        title="Upper Level Week 2&4&6 - Friday Math 2"
                        total_questions="25 questions"
                        total_marks="60"
                        time="30 minutes"
                    />

                    <br></br>

                    <h4>Section 5</h4>
                    <h4>Quantitative (Math) Section</h4>
                    <br></br>

                    <span className='align-middle'>In this section each question is followed by five answer choices.You may write inthe test booklet. For each answer you choose, filling the corresponding bubble on your answer document.
                        Note: In this section, you can assume that the figures that accompany the questions are accurately drawn EXCEPT when the question states that a particular figure is not drawn to scale.</span>

                    <br></br>
                    <hr></hr>
                    {
                        questions.map(
                            question =>
                                <span key={question.id}>
                                    <Question question={question.question}/>
                                    <Answers
                                        question={question}
                                        handleClick={handleClick}
                                    />
                                </span>
                        )
                    }
                    <Button variant="outline-primary" onClick={next}>
                        Submit
                    </Button>

                    <br></br>
                    <br></br>

                    <Timing totalTime="1800000" alertTime="3000"/>



                </Container>
            </div>
        )
    }
}


