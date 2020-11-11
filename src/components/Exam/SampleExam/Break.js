import React from 'react'
import './exam_style.css'

import Timer from 'react-compound-timer'
import {useHistory} from "react-router-dom";

export default function Break() {

    let history = useHistory();

    return (
        <div>
            <div className="container">
                <div className="justify-content-center pt-6">
                    <div className="text-center">
                        <h2>Time left</h2>
                        <Timer
                            initialTime={300000}
                            direction="backward"
                            checkpoints={[
                                {
                                    time: 0,
                                    callback: () => history.push('/math_1'),
                                }
                            ]}
                        >
                            {() => (
                                <h4>
                                    <React.Fragment>
                                        <Timer.Minutes /> :&nbsp;
                                        <Timer.Seconds />
                                    </React.Fragment>
                                </h4>
                            )}
                        </Timer>
                    </div>
                </div>
            </div>
        </div>
    )
}


