import React from 'react';
import {useHistory} from "react-router-dom"
import {a} from 'react-spring'
import './dashboard.css'
import Menu from "./Menu";
import Menu2 from "./Menu2";


export default function ClassManagement() {

    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var date = new Date().getDate();

    let history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const Writing = () => {
        history.push('/Writing');
    }
    const login = () => {
        history.push('/login');
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
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Welcome, [ Name ]</h1>
                        </div>
                        <Menu2/>
                        <table className="table table-hover mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">ID</th>
                                <th scope="col">DateOfEnrollment</th>
                                <th scope="col">Delete</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>小明</td>
                                <td>1</td>
                                <td>{year}.{month}.{date}</td>
                                <td>
                                    <button type="button" className="btn btn-danger">Remove</button>
                                </td>

                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>小红</td>
                                <td>2</td>
                                <td>{year}.{month}.{date}</td>
                                <td>
                                    <button type="button" className="btn btn-danger">Remove</button>
                                </td>
                            </tr>

                            </tbody>
                        </table>


                        <table className="table table-hover mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">ID</th>
                                <th scope="col">Dates</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>小明</td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>小红</td>
                                <td>2</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>




                    </div>
                </div>
            </div>
        </div>
    )
}

