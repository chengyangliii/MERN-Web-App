import React from 'react'
import Timer from "react-compound-timer";
import {useHistory} from "react-router-dom";

export default function Timing(props) {

    let history = useHistory();

    const time = props.totalTime
    const alertTime = props.alertTime

    return (
        <div className='fixed-bottom'>
            <div className='float-right'>
                <Timer
                    initialTime={time}
                    direction="backward"
                    checkpoints={[
                        {
                            time: alertTime,
                            callback: () => alert('1 minute left'),
                        },
                        {
                            time: 0,
                            callback: () => history.push('/break'),
                        }
                    ]}
                >
                    {() => (
                        <React.Fragment>
                            Time left&nbsp;
                            <Timer.Minutes /> :&nbsp;
                            <Timer.Seconds />
                        </React.Fragment>
                    )}
                </Timer>
            </div>
        </div>
    )

}


