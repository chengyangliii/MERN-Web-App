import {a} from "react-spring";
import React from "react";


export default function Menu2() {

    return (
        <div className="row mt-4">
            <div className="col-10">
                <div className="list-group list-group-horizontal" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action havecursor" id="list-home-list"
                       data-toggle="list" href="/coursepage">Manage quiz</a>
                    <a className="list-group-item list-group-item-action havecursor" id="list-profile-list"
                       data-toggle="list" href="/exampage"
                       aria-controls="profile">Review quiz</a>
                    <a className="list-group-item list-group-item-action havecursor" id="list-messages-list"
                       data-toggle="list" href="/classpage"
                       aria-controls="messages">Manage class</a>
                    <a className="list-group-item list-group-item-action havecursor" id="list-settings-list"
                       data-toggle="list" href="/myinfor"
                       aria-controls="settings">Profile</a>
                </div>
            </div>
        </div>
    )
}