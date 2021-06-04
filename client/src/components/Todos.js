import React, {useEffect, useState} from 'react'

export default function Todos() {
    
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setTodos(data)
        })
    }, [])

    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h1>Todo Title: {todo.title}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
