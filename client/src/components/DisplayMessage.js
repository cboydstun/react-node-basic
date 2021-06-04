import React, {useState, useEffect} from 'react'

export default function DisplayMessage() {

    const [message, setMessage] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/")
        .then((res) =>res.json())
        .then((data) => {
            setMessage(data)
        })
    }, [])

    return (
        <div>
        { message }
        </div>
    )
}

