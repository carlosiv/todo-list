import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./components/TodoList";
import DoneTodo from "./components/DoneTodo";
import TodoDashboard from "./components/TodoDashboard";
import TodoForm from "./components/TodoForm";

function App() {
  const [newTask, setNewTask] = useState('');
  const [newTaskDue, setNewTaskDue] = useState(Date.now());
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "First Task",
      status: "Current",
      createdAt: 1642458275288,
      finishedAt: '',
      due: 1642458275288,
    },
    {
      id: 2,
      todo: "Second Task",
      status: "Unfinished",
      createdAt: 1642458275388,
      finishedAt: '',
      due: 1642458275288,
    },
    {
      id: 3,
      todo: "Third Task",
      status: "Done",
      finishedAt: 1642730689450,
      createdAt: 1642458275388,
      due: 1642458275288,
    },
    {
      id: 4,
      todo: "Fourth Task",
      status: "Done",
      finishedAt: 1642730689450,
      createdAt: 1642458275388,
      finishedAt: 1642458275288,
      due: 1642458275288,
    },
  ]);


 
  function addTask(e) {
    e.preventDefault()
    if (newTask != '') {
      setNewTask('')
    setNewTaskDue(Date.now())
    setTodos([...todos,{id: uuidv4(), todo:newTask, status:"Unfinished",createdAt: Date.now(),  due:newTaskDue}])
    } else {
      alert('Please fill task')
    }
  }

  function setStatus(id,status){
    todos
      .filter((todo) => todo.id === id)
      .map((task) => {
        task.status = status
        task.finishedAt = Date.now()
        //to re-render component
        setTodos([...todos])
      });

  }

  function deleteTodo(id){
   const tasks = todos.filter((todo) => todo.id != id)
   setTodos([...tasks])
  }

  const doneTask = todos.filter(task => task.status === 'Done')
  const unfinishedTask = todos.filter(task => task.status != 'Done')
  const onGoingTask = todos.filter(task => task.status === 'Current')

  return (
    <div className="container w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 dark:bg-gray-700">
        <div className="lg:col-span-8 col-span-1 flex flex-wrap my-2">
          <TodoList unfinishedTask={unfinishedTask} setStatus={setStatus} deleteTodo={deleteTodo} />
          <DoneTodo doneTask={doneTask} />
        </div>
        <div className="sm:block md:col-span-4 col-span-1 dark:bg-gray-700">
          <div className="lg:sticky relative mt-5 mr-3 top-8">
          <TodoDashboard todos={todos} unfinishedTask={unfinishedTask} onGoingTask={onGoingTask} doneTask={doneTask} />
          <TodoForm newTask={newTask} setNewTask={setNewTask} newTaskDue={newTaskDue} setNewTaskDue={setNewTaskDue} addTask={addTask} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
