import React, {useState} from 'react'
import {Form} from "react-bootstrap";
export default function AddExam() {

    const [name, setName] = useState('')
    //const [id_1, setid_1] = useState('')

    const handleChange = e => {
        setName(e.target.value)
    }
    var json_file = [
        {
            "id": name,
        }
    ]

    console.log(json_file)
    const save = () => {
    }
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label><h6>Course Name</h6></Form.Label>
                    <Form.Control type="text" onChange={handleChange}/>
                </Form.Group>
            </Form>
            <button type="button" className="btn btn-primary" onClick={save}>Create</button>
        </>
    )
}


