import React from 'react'
import {taskProp} from '../App'

interface Props {
    task: taskProp
    removeTask(deleteTask: string): void
}

const Task = ({task, removeTask}: Props) => {
    return (
        <div>
            {/* will change to checkbox */}
            <button>Done</button>
            <p >{task.taskName}</p>
            <button onClick={() => {removeTask(task.taskName)}}>Delete</button>
        </div>
    )
}

export default Task