import React, {useState} from 'react';
import '../dashboard.css'
import axios from "axios";
import {Button, Container, Modal} from "react-bootstrap";

export default function CreateNewReadingExam() {

    // eslint-disable-next-line no-unused-vars
    const [total, setTotal] = useState([])
    let n = 2;
    for(let i=1; i<n; i++) {
        total[i] = i
    }
    //console.log(total)


    /**
     * Post
     */
    const [count, setCount] = useState(0)
    const [quizName, setQuizName] = useState("")
    const [q1Name, setQ1Name] = useState("")
    const [q1_a, setQ1_a] = useState("")
    const [q1_b, setQ1_b] = useState("")
    const [q1_c, setQ1_c] = useState("")
    const [q1_d, setQ1_d] = useState("")
    const [q1_e, setQ1_e] = useState("")
    const [q1_correct, setQ1_correct] = useState("")
    const handleQuiz_NameChange = e => {
        setQuizName(e.target.value)
    }
    const handleQ1_NameChange = e => {
        setQ1Name(e.target.value)
    }
    const handleQ1_aChange = e => {
        setQ1_a(e.target.value)
    }
    const handleQ1_bChange = e => {
        setQ1_b(e.target.value)
    }
    const handleQ1_cChange = e => {
        setQ1_c(e.target.value)
    }
    const handleQ1_dChange = e => {
        setQ1_d(e.target.value)
    }
    const handleQ1_eChange = e => {
        setQ1_e(e.target.value)
    }
    const handleQ1_correctChange = e => {
        setQ1_correct(e.target.value)
    }
    const [questionList, setQuestionList] = useState([])
    // console.log("q1name: "+q1Name)
    // console.log("q1_correct: "+q1_correct)
    var tempCount = 0
    const handle = e => {
        var temp = [{"id":"1", "question":q1Name, "answer_a":q1_a, "answer_b":q1_b, "answer_c":q1_c, "answer_d":q1_d, "answer_e":q1_e, "correct_answer":q1_correct}]
        console.log("temp: "+JSON.stringify(temp))
        setQuestionList(temp)
        handleShowConfirmShow(e)
        tempCount++;
        setCount(tempCount)
        console.log(questionList)
    }
    const handlePost = e => {
        //console.log(questionList)
        axios.post(`http://localhost:8080/questionList`, {
            "id": count,
            "exam": JSON.stringify(questionList),
            "name": quizName,
        })
            .then(result => {
                console.log("result.data.data.exam: "+result.data.data.exam)
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    const [showConfirm, setShowConfirm] = useState(false)
    const handleShowConfirmClose = e => setShowConfirm(false);
    const handleShowConfirmShow = e => setShowConfirm(true);
    const CloseConfirmAndPost = e => {
        handlePost(e)
        handleShowConfirmClose(e)
    }

    return (
        <div>
            <Container>

                <div className="form-group">
                    <label className="text-dark"><h5>How many questions do you want to create?</h5></label>
                    <input className="form-control" placeholder=""/>
                </div>

                <form>
                    <div className="form-group">
                        <label className="text-dark"><h5>Quiz Name</h5></label>
                        <input className="form-control" onChange={handleQuiz_NameChange}/>
                    </div>
                    {/*{*/}
                    {/*    total.map(list => (*/}
                    <div>
                        <div className="form-group">
                            <label className="text-dark"><h5>Question 1</h5></label>
                            <textarea className="form-control" rows="3" onChange={handleQ1_NameChange}></textarea>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">A</span>
                            </div>
                            <input type="text" className="form-control" onChange={handleQ1_aChange}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">B</span>
                            </div>
                            <input type="text" className="form-control" onChange={handleQ1_bChange}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" onChange={handleQ1_cChange}>C</span>
                            </div>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" onChange={handleQ1_dChange}>D</span>
                            </div>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" onChange={handleQ1_eChange}>E</span>
                            </div>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Correct Answer</span>
                            </div>
                            <input type="text" className="form-control" onChange={handleQ1_correctChange}/>
                        </div>
                    </div>

                    {/*    ))*/}
                    {/*}*/}
                </form>

                <div className="text-right">
                    <button type="button" onClick={handle} className="btn btn-primary" on>Submit</button>
                </div>
                <Modal show={showConfirm} onHide={handleShowConfirmClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Confirmation Message
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleShowConfirmClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={CloseConfirmAndPost}>Confirm</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>

    )



}