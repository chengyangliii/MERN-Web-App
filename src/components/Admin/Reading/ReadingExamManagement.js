import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {a} from 'react-spring'
import '../dashboard.css'
import axios from "axios";
import {Modal, Button, Form} from "react-bootstrap";
import Menu from "../Menu";
import Menu2 from "../Menu2";

export default function ReadingExamManagement() {

    let history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const Writing = () => {
        history.push('/Writing');
    }
    const login = () => {
        history.push('/login');
    }

    const [courses, setCourses] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0)
    const [deleteId, setDeleteId] = useState('')
    const [postName, setPostName] = useState('')
    const [postId, setPostId] = useState('')
    const [postLevel, setPostLevel] = useState('')
    //const [newCourse, setNewCourse] = useState({})

    //Modal for deleting queries
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = e => setShowDelete(false);
    const handleDeleteShow = e => setShowDelete(true);
    // eslint-disable-next-line no-unused-vars
    const quitASubmit = e => {
        handleDelete(e);
        handleDeleteClose(e);
    }
    const showASubmit = e => {
        handleDelete(e);
        handleDeleteShow(e);
    }

    //Modal for adding new course
    const [showNew, setShowNew] = useState(false);
    const handleNewClose = () => setShowNew(false);
    // eslint-disable-next-line no-unused-vars
    const handleNewShow = () => setShowNew(true);

    //Select * from course
    useEffect(() => {
        async function getSelect() {
            const request = await axios.get(`http://localhost:8080/questionList`)
            return request
        }
        getSelect().then(result => {
            console.log("result.data.data: "+result.data.data)
            setCourses(result.data.data)
        })
    }, [])

    //Delete from course
    const handleDelete = e => {
        //e.preventDefault()
        //console.log(e.target.value)
        setDeleteId(e.target.value)
        console.log("e.target.value: "+e.target.value)
        console.log("deleteId: "+ deleteId)
        axios.delete(`http://localhost:8080/course/${deleteId}`)
            .then(result => {
                console.log("delete result: "+result)
            })
    }

    //Post new course
    const handlePost = e => {
        // e.preventDefault()
        // console.log(postName)
        // console.log(postId)
        // setNewCourse({name:postName, id:postId, level:postLevel})
        // console.log("course name: "+newCourse.name)
        // setNewCourse(JSON.stringify(newCourse))
        // console.log("course name: "+newCourse)
        axios.post(`http://localhost:8080/course`, {
            "name": postName,
            "id": postId,
            "level": postLevel
        })
            .then(result => {
                console.log("post result data name: "+result.data.name)
            })
    }
    const handleNameChange = e => {
        setPostName(e.target.value)
    }
    const handleIdChange = e => {
        setPostId(e.target.value)
    }
    const handleLevelChange = e => {
        setPostLevel(e.target.value)
    }
    const closeAPost = e => {
        handlePost(e);
        handleNewClose();
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
                        <div className="pt-3">
                            <Button variant="success" onClick={() => {history.push('/createNewExam')}}>
                                Create New Reading Exam
                            </Button>
                            <Modal show={showNew} onHide={handleNewClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add new course</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label><h6>Course Name</h6></Form.Label>
                                            <Form.Control type="text" onChange={handleNameChange}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label><h6>Id</h6></Form.Label>
                                            <Form.Control type="text" onChange={handleIdChange}/>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label><h6>Level</h6></Form.Label>
                                            <Form.Control type="text" onChange={handleLevelChange}/>
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleNewClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={closeAPost}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                            <span className="ml-3">
                                <button type="button" className="btn btn-primary" onClick={handleDelete}>Save</button>
                            </span>
                        </div>

                        <table className="table table-striped table-hover mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                courses.map(course =>(
                                    <tr key={course.id}>
                                        <th scope="row">{count+1}</th>
                                        <td>{course.name}</td>
                                        <td><Button variant="danger" value={course.id} onClick={showASubmit}>Remove</Button></td>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

//<button type="button" className="btn btn-danger" value={course.id} onClick={handleDelete}>Remove</button>
//
// <Form.Group controlId="">
//     <Form.Label><h6>Student</h6></Form.Label>
//     <Form.Control type="text" defaultValue="0"/>
// </Form.Group>