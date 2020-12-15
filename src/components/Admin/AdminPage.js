import React from 'react';
import {useHistory} from "react-router-dom"
import {a} from 'react-spring'
import './dashboard.css'
import Menu from './Menu'

export default function AdminPage() {

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

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="havecursor" href="admin">Home</a></li>
                            </ol>
                        </nav>

                        <div className="row mt-4">
                            <div className="col-2">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action havecursor" id="list-home-list"
                                       data-toggle="list" href="coursepage">管理科目</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="evaluationpage">批阅试卷</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-messages-list"
                                       data-toggle="list" href="classpage">管理班级</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-settings-list"
                                       data-toggle="list" href="/">我的信息</a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action havecursor" id="list-home-list"
                                       data-toggle="list" href="/exampage">管理试卷</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="/ExamManagement/Writing">Writing</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="/ExamManagement/Math">Math</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-messages-list"
                                       data-toggle="list" href="/ExamManagement/Reading">Reading</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-settings-list"
                                       data-toggle="list" href="/ExamManagement/Verbal">Verbal</a>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action havecursor" id="list-home-list"
                                       data-toggle="list" href="/evaluationpage">批阅试卷</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="/ExamManagement/Writing">Writing</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="/ExamManagement/Math">Math</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-messages-list"
                                       data-toggle="list" href="/ExamManagement/Reading">Reading</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-settings-list"
                                       data-toggle="list" href="/ExamManagement/Verbal">Verbal</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}