import React, {useState} from 'react'
import {Button, Container, Modal} from "react-bootstrap"

export default function CreateNewExam() {


    const [showConfirm, setShowConfirm] = useState(false)
    const handleShowConfirmClose = e => setShowConfirm(false);
    const handleShowConfirmShow = e => setShowConfirm(true);
    const CloseConfirmAndPost = e => {
        
        handleShowConfirmClose(e)
    }


    
    

    return (

        <div>   
        
            <Container className="mx-auto" style={{width:'600px'}}>
                &nbsp;
                <form>
                    <div className="form-group">
                        <label className=""><h5>Exam name</h5></label>
                        <input className="form-control" placeholder=""/>
                    </div>
                    &nbsp;
                </form>

                <br/>
                <div className="text-right">
                    <button type="button"  className="btn btn-primary">Submit</button>
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