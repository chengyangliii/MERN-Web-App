import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {a} from 'react-spring'
import './dashboard.css'
import axios from "axios";
import {Modal, Button, Form} from "react-bootstrap";
import Menu from "./Menu";
import Menu2 from "./Menu2";



export default function CourseManagement() {
    

    let history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const Writing = () => {
        history.push('/Writing');
    }

    /**
     * Fetch
     */
    const [courses, setCourses] = useState([])
    useEffect(() => {
        async function getSelect() {
            const request = await axios.get(`http://localhost:5000/exam`)
            return request
        }
        getSelect().then(result => {
            console.log(result.data)
            setCourses(result.data)
        })
    }, [])
    //console.log("courses: "+courses)


    /**
     * Post
     */
    const [postName, setPostName] = useState('')
    const [postId, setPostId] = useState('')
    const [postLevel, setPostLevel] = useState('')
    const handlePost = e => {
        // e.preventDefault()
        // console.log(postName)
        // console.log(postId)
        // setPostNewCourseFormCourse({name:postName, id:postId, level:postLevel})
        // console.log("course name: "+PostNewCourseFormCourse.name)
        // setPostNewCourseFormCourse(JSON.stringify(PostNewCourseFormCourse))
        // console.log("course name: "+PostNewCourseFormCourse)
        axios.post(`http://localhost:8080/course`, {
            "name": postName,
            "id": postId,
            "level": postLevel
        })
            .then(result => {
                console.log("post result data name: "+result.data.name)
            })
    }
    // const [showPostNewCourseForm, setShowPostNewCourseForm] = useState(false);
    // const handlePostNewCourseFormClose = () => setShowPostNewCourseForm(false);
    // const handlePostNewCourseFormShow = () => setShowPostNewCourseForm(true);
    // const handleNameChange = e => {
    //     setPostName(e.target.value)
    // }
    // const handleIdChange = e => {
    //     setPostId(e.target.value)
    // }
    // const handleLevelChange = e => {
    //     setPostLevel(e.target.value)
    // }
    // const closeFromAndPostNewCourse = e => {
    //     handlePost(e);
    //     handlePostNewCourseFormClose(e);
    // }

    /**
     * Delete
     */
    const [deleteId, setDeleteId] = useState('')
    const handleDelete = e => {
            //e.preventDefault()
            //console.log(e.target.value)
            setDeleteId(e.target.value)
            // console.log("e.target.value: "+e.target.value)
            // console.log("deleteId: "+ deleteId)
            axios.delete(`http://localhost:8080/course/${deleteId}`)
                .then(result => {
                    console.log("delete result: "+result)
                })
    }
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


    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container ml-4">
                        <a className="h1 text-dark mb-0" href="./">
                            Futurus EduLabs
                        </a>
                    </div>
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
                                <th scope="col">Name</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            {
                                courses.map(course =>(
                                    <tr key={course.id}>
                                        <td>1</td>
                                        <td>{course.title}</td>
                                        <td><Button variant="danger" value={course.id} onClick={showASubmit}>Remove</Button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                        {/* <div>
                            <Button variant="success" onClick={handlePostNewCourseFormShow}>
                                PostNewCourseForm Course
                            </Button>
                            <Modal show={showPostNewCourseForm} onHide={handlePostNewCourseFormClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Add PostNewCourseForm course</Modal.Title>
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
                                    <Button variant="secondary" onClick={handlePostNewCourseFormClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={closeFromAndPostNewCourse}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                            <span className="ml-3">
                                <button type="button" className="btn btn-primary" onClick={handleDelete}>Save</button>
                            </span>
                        </div>

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
                        </Modal> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
