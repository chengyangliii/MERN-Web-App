import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import Tree from '../menu_spring/Tree'
import {a} from 'react-spring'
import {Global} from '../menu_spring/Styles'
import '../dashboard.css'
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Menu2 from "../Menu2";
import Menu from "../Menu";

export default function EvaluationMath() {
    let history = useHistory();
    const Writing = () => {
        history.push('/Writing');
    }
    const login = () => {
        history.push('/login');
    }

    /**
     * Fetch data from backend
     * Table
     */
    const [finishedExam, setFinishedExam] = useState([])
    useEffect(() => {
        async function getSelect() {
            const request = await axios.get(`http://localhost:8080/Finish_exam`)
            return request
        }
        getSelect().then(result => {
            setFinishedExam(result.data.data)
        })
    }, [])

    /**
     * Delete data
     *
     */
    const [deleteId, setDeleteId] = useState('')
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = e => setShowDelete(false);
    const handleDeleteShow = e => setShowDelete(true);
    const quitASubmit = e => {
        handleDelete(e);
        handleDeleteClose(e);
    }
    const showASubmit = e => {
        handleDelete(e);
        handleDeleteShow(e);
    }
    //Delete from course
    const handleDelete = e => {
        //e.preventDefault()
        //console.log(e.target.value)
        setDeleteId(e.target.value)
        console.log("e.target.value: "+e.target.value)
        console.log("deleteId: "+ deleteId)
        axios.delete(`http://localhost:8080/Finish_exam/${deleteId}`)
            .then(result => {
                console.log("delete result: "+result)
            })
    }

    /**
     * Get data by id
     */
    const [content, setContent] = useState('')
    const [OneId, setOneId] = useState('')
    const handleGetOneById = e => {
        setOneId(e.target.value)
        axios.get(`http://localhost:8080/Finish_exam/${OneId}`)
            .then(result => {
                console.log("result.data.data.student: "+result.data.data.student)
                setContent(result.data.data.content)
                console.log("content: "+content)
            })
    }

    /**
     * Open evaluation form
     */
    const OpenConfirm = e => {
        handleGetOneById(e)
        handleViewConfirmShow(e)
    }
    const [showViewConfirm, setShowViewConfirm] = useState(false);
    const handleViewConfirmClose = e => setShowViewConfirm(false);
    const handleViewConfirmShow = e => setShowViewConfirm(true);
    const CloseConfirmAndOpenEval = e => {
        console.log("CloseConfirmAndOpenEval: "+OneId)
        handleViewConfirmClose(e)
        handleGetOneById(e)
        handleEvalShow(e)
    }
    const [showEval, setShowEval] = useState(false);
    const handleEvalClose = () => setShowEval(false);
    const handleEvalShow = () => setShowEval(true);
    const CloseEvalAndOpenMarkConfirm = e => {
        console.log("CloseEvalAndOpenMarkConfirm: "+OneId)
        handleEvalClose(e)
        handleUpdateMark(e)
        handleMarkConfirmShow(e)
    }


    /**
     * Post update mark
     */
    const [mark, setMark] = useState('')
    const handleMarkChange = e => {
        setMark(e.target.value)
    }
    const handleUpdateMark = e => {
        console.log("mark: "+mark)
        console.log("id: "+OneId)
        axios.put(`http://localhost:8080/Finish_exam`, {
            "grade": mark,
            "id": OneId
        })
            .then(result => {
                console.log("result: "+result)
            })
    }
    const [showMarkConfirm, setShowMarkConfirm] = useState(false);
    const handleMarkConfirmClose = e => setShowMarkConfirm(false);
    const handleMarkConfirmShow = e => setShowMarkConfirm(true);
    const CloseMarkConfirmAndUpdate = e =>{
        handleUpdateMark(e);
        handleMarkConfirmClose(e)
    }


    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container ml-4">
                        <a className="h1 text-dark mb-0" href="./">
                            Futurus EduLabs
                        </a>
                    </div>
                    <a className="btn btn-primary ml-lg-3 bg-light mr-4" onClick={login}>Logout</a>
                </nav>
            </div>

            <div>
                <div className="row">
                    <Menu/>
                    <div className="col-9 ml-7">
                        <Menu2/>
                        <table className="table table-striped table-hover mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Exam Name</th>
                                <th scope="col">Student</th>
                                <th scope="col">Grade</th>
                                <th scope="col">Enter</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                finishedExam.map(exam =>(
                                    <tr key={exam.id}>
                                        <th scope="row">1</th>
                                        <td>{exam.exam_name}</td>
                                        <td>{exam.student}</td>
                                        <td>{exam.grade}</td>
                                        <td><Button variant="primary" value={exam.id} onClick={OpenConfirm}>Enter</Button></td>
                                        <td><Button variant="danger" value={exam.id} onClick={showASubmit}>Remove</Button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        <Modal show={showDelete} onHide={handleDeleteClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Confirmation Message
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleDeleteClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleDeleteClose}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>


                        <Modal show={showViewConfirm} onHide={handleViewConfirmClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Confirmation Message
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleViewConfirmClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={CloseConfirmAndOpenEval}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showEval} onHide={handleEvalClose} dialogClassName="width90">
                            <Modal.Header closeButton>
                                <Modal.Title>Evaluation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <h4>
                                        {content}
                                    </h4>
                                    <Form.Group>
                                        <Form.Label><h6>Mark</h6></Form.Label>
                                        <Form.Control type="text" onChange={handleMarkChange}/>
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleEvalClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" onClick={CloseEvalAndOpenMarkConfirm}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showMarkConfirm} onHide={handleMarkConfirmClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Confirmation Message
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleMarkConfirmClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={CloseMarkConfirmAndUpdate}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                        <span className="ml-3">
                                    <button type="button" className="btn btn-primary" onClick={handleDelete}>Save</button>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

