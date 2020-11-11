import React from 'react';
import Tree from '../spring_menu/Tree'
import {Global} from '../spring_menu/Styles'
import './dashboard.css'

export default function Menu() {

    return (
        <>

                <div className="ml-5 mr-5">
                    <Global />
                    <Tree name="SSAT" />
                    <Tree name="Middle Level Camp 1" />
                    <Tree name="Middle Level Camp 2" />
                    <Tree name="Upper Level Camp 1" />
                    <Tree name="Upper Level Camp 2" />
                    <Tree name="Main" >
                        <Tree name="Student" />
                        <Tree name="Even Week" />
                        <Tree name="Class">
                            <Tree name="Placeholder" />
                            <Tree name="Placeholder">
                                <Tree name="child 1" style={{ color: '#37ceff' }} />
                                <Tree name="child 2" style={{ color: '#37ceff' }} />
                                <Tree name="child 3" style={{ color: '#37ceff' }} />
                            </Tree>
                            <Tree name="Placeholder" />
                        </Tree>
                        <Tree name="Exam">
                            <Tree name="Placeholder" />
                            <Tree name="Placeholder">
                                <Tree name="Demo" style={{ color: '#0000ff' }}/>
                            </Tree>
                        </Tree>
                    </Tree>

                    <Tree name="My Account" >
                        <Tree name="Placeholder" />
                        <Tree name="Placeholder">
                            <Tree name="Placeholder" />
                            <Tree name="Placeholder">
                                <Tree name="child 1" style={{ color: '#37ceff' }} />
                                <Tree name="child 2" style={{ color: '#37ceff' }} />
                                <Tree name="child 3" style={{ color: '#37ceff' }} />
                            </Tree>
                            <Tree name="Placeholder" />
                        </Tree>
                    </Tree>
                </div>

        </>
    )
}

