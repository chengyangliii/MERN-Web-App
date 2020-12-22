import React, {useEffect, useState} from 'react'
import Menu from './Menu'
import Menu2 from '../Admin/Menu2'

import axios from 'axios'

export default function AdminPage() {

    //const [displayName, setDisplayName] = useState('')
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/user", { withCredentials: true})
            .then((res) => {
                setUser(res.data)
            }
        )
    }, [])

    return (
        <div>
            <nav className="navbar border-bottom">
                <div className="h1 text-dark mb-0">
                        Futurus EduLabs
                </div>
                
            </nav>
            
            <div>
                <div className="row pt-3">
                    <Menu/>
                    
                    <div className="col-9 ml-7">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Welcome, {user.username}</h1>
                        </div>

                        <div className="row mt-4">
                            <div className="col-2">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action havecursor" id="list-home-list"
                                       data-toggle="list" href="coursepage">Manage quiz</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                                       data-toggle="list" href="evaluationpage">Review quiz</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-messages-list"
                                       data-toggle="list" href="classpage">Manage class</a>
                                    <a className="list-group-item list-group-item-action havecursor" id="list-settings-list"
                                       data-toggle="list" href="/">Profile</a>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}