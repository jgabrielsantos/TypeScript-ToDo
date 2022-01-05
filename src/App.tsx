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
      console.log("can't add blank task")
    }

  }

  const removeTask = (deleteTask: string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== deleteTask
    }))
  }


  return (
    <main>
      <input type="text" placeholder="Task" onChange={createTask}/>
      <button id="newTaskButton" onKeyPress={addTask} onClick={addTask} >Add item to list</button>

      {todo.map((task: taskProp, key: number) => {
        return <Task task={task} key={key} removeTask={removeTask} />
      })}
    </main>
  )
}

export default App;
