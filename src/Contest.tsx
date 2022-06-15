import React from 'react'
import { Todo } from './App'

type ContestProp = {
    todo: Todo
    onDelete: (id: number) => void
}
const Contest = ({ todo, onDelete }: ContestProp) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>삭제</button>
        </div>
    )
}

export default Contest
