import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function User() {

    const [displayName, setDisplayName] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/dash')
            .then(res => {
                console.log(res)
                setDisplayName(res.data[0].title)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <h3>{displayName}</h3>
        </div>
    )
}