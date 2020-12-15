import React from 'react'

export default function R_Question(props) {

    return (
        <>
            <label><h5>Question {props.num}</h5></label>
            <div className="form-group">
                <textarea className="form-control" rows="2" onChange={props.handle_NameChange}></textarea>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">A</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_aChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">B</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_bChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">C</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_cChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">D</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_dChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">E</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_eChange}/>
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Correct Answer</span>
                </div>
                <input type="text" className="form-control" onChange={props.handle_correctChange}/>                
            </div>
        </>
    )
}