import React, {useState} from 'react'
import Overview from '../Overview'
import {Container} from 'react-bootstrap'
import './exam_style.css'
import {useHistory} from "react-router-dom";
import Timing from "./Timing";
import axios from "axios";

export default function Writing() {

    let history = useHistory();
    const next = e => {
        history.push("/break")
    }

    //writing -> break5 -> math30 -> reading -> break10 -> verbal30 -> math30

    const [postContent, setPostContent] = useState('')
    const handlePost = e => {
        axios.post(`http://localhost:8080/Finish_exam`, {
            "id": "2",
            "exam_name": "ml",
            "content": postContent,
            "student": "asdfgh"
        })
            .then(result => {
                console.log("result.data.data.content: "+result.data.data.content)
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    const handleContentChange = e => {
        setPostContent(e.target.value)
    }

    console.log(postContent)

    const handleSubmit = e => {
        handlePost(e)
        next(e)
    }

    return (
        <div>
            <Container>
                <br></br>
                <br></br>
                <Overview
                    title="Upper Level Week 2&4&6 - Friday Math 2"
                    total_questions="1 questions"
                    total_marks="10"
                    time="25 minutes"
                />
                <br></br>
                <h4>Section 1:</h4>
                <h4></h4>
                <br></br>
                <span className='align-middle'>You have 25 minutes to complete a brief writing sample. This writing exercise will not be scored, but
                used by admission officers to assess your writing skills.</span>
                <br></br>
                <div className='pl-6 pr-6'>1. Read the prompts carefully. Take a few minutes to think about them and choose the one you prefer.
                    Then, organize your thougths before you begin writing.
                    <br></br>
                    <br></br>
                    Please choose the idea you find most....
                </div>

                <div className="form-group">
                    <label></label>
                    <textarea className="form-control" rows="30" onChange={handleContentChange}></textarea>
                </div>

                <div className="text-right">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary" on>Submit</button>
                </div>

                <br></br>
                <br></br>
                <Timing totalTime="1500000" alertTime="30000"/>
            </Container>
        </div>
    )
}