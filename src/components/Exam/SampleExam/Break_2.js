import React from 'react'
import './exam_style.css'

import Timer from 'react-compound-timer'
import {useHistory} from "react-router-dom";

export default function Break_2() {

    let history = useHistory();

    return (
        <div>
            <div className="container">
                <div className="justify-content-center pt-6">
                    <div className="text-center">
                        <h2>Time left</h2>
                        <Timer
                            initialTime={600000}
                            direction="backward"
                            checkpoints={[
                                {
                                    time: 0,
                                    callback: () => history.push('/verbal'),
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


