import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Task from './Components/Task'

export interface taskProp {
  taskName: string
}

function App() {
  const [task, setTask] = useState("")
  const [done, setDone] = useState(false)
  const [todo, setTodo] = useState<taskProp[]>([])
  
  const createTask = (event: ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value)
  }

  const addTask = () => {
    const newTask = {
      taskName: task,
      isDone: false,
    }

    if (newTask.taskName != "") {
      setTodo([...todo, newTask])
    } else {
      console.log("can't add empty task")
      // need to display an error message
    }
  }

  const removeTask = (deleteTask: string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== deleteTask
    }))
  }


  return (
    <main>
      <div className="entry">
        <input className='newTask' type="text" placeholder="Task" onChange={createTask}/>
        <button className="taskButton" onKeyPress={addTask} onClick={addTask} >Add item to list</button>
      </div>

      <div className="list">
        {todo.map((task: taskProp, key: number) => {
          return <Task task={task} key={key} removeTask={removeTask} />
        })}
      </div>
    </main>
  )
}

export default App;
