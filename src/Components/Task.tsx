import React from 'react'
import {taskProp} from '../App'

interface Props {
    task: taskProp
    removeTask(deleteTask: string): void
}

const Task = ({task, removeTask}: Props) => {
    return (
        <div className='task'>
            <input className='check' type="checkbox" />
            <p >{task.taskName}</p>
            <button onClick={() => {removeTask(task.taskName)}}>X</button>
        </div>
    )
}

export default Task