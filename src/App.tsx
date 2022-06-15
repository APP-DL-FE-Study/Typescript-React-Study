import React, { useState } from 'react'
import './App.css'
import Contest from './Contest'

export type Todo = {
    id: number
    text: string
}
type Event = React.ChangeEvent<HTMLInputElement>

function App() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState<Todo[] | undefined>()
    const handleChange = (e: Event) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleClick = () => {
        const newTodo: Todo = {
            id: Date.now(),
            text: input,
        }
        setTodo((prev) => {
            if (prev === undefined) return [newTodo]
            else return [...prev, newTodo]
        })
    }
    const onDelete = (id: number): void => {
        const newTodo = todo?.filter((item) => item.id !== id)
        setTodo(newTodo)
    }
    return (
        <>
            <div>
                <input type='text' onChange={handleChange} value={input} />
                <button onClick={handleClick}>제출</button>
                {todo?.map((item) => (
                    <Contest key={item.id} todo={item} onDelete={onDelete} />
                ))}
            </div>
        </>
    )
}

export default App
