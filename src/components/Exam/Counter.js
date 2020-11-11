import React, {useState} from 'react';
// eslint-disable-next-line
import {Button, Container, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter() {

    const [count, setCount] = useState(0)


    return (
        <div>

            <h1>
                {count}
            </h1>
            <Row>
                <Button variant="outline-success" onClick={() => setCount(count+1)}>
                    Plus
                </Button>
            </Row>
            <Row>
                <Button variant="outline-success" onClick={() => setCount(count-1)}>
                    Minus
                </Button>
            </Row>

            <Form>
                <Form.Group>
                    <Form.Label>Exam Time</Form.Label>
                    <Form.Control type="text" placeholder="Exam Time" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Exam Period</Form.Label>
                    <Form.Control type="text" placeholder="Exam Period" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Marks</Form.Label>
                    <Form.Control type="text" placeholder="Marks" />
                </Form.Group>
            </Form>

            <Button variant="outline-success">Add MC</Button>



        </div>
    )
}

export default Counter
