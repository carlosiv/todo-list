import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./components/TodoList";
import DoneTodo from "./components/DoneTodo";
import TodoDashboard from "./components/TodoDashboard";
import TodoForm from "./components/TodoForm";

//configure toast
toast.configure();

const contextClass = {
  success: "bg-blue-600",
  error: "bg-red-500",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
};

function App() {
  const [newTask, setNewTask] = useState("");
  const [newTaskDue, setNewTaskDue] = useState(Date.now());
  const [todos, setTodos] = useState([
    {
      id: 112345,
      todo: "First Task",
      status: "Current",
      createdAt: 1642458275288,
      finishedAt: "",
      due: 1642458275288,
    },
    {
      id: 2232454,
      todo: "Second Task",
      status: "Unfinished",
      createdAt: 1642458275388,
      finishedAt: "",
      due: 1642458275288,
    },
    {
      id: 3132354,
      todo: "Third Task",
      status: "Done",
      createdAt: 1642458275388,
      finishedAt: 1642730689450,
      due: 1642458275288,
    },
    {
      id: 46461,
      todo: "Fourth Task",
      status: "Done",
      createdAt: 1642458275388,
      finishedAt: 1642458275288,
      due: 1642458275288,
    },
  ]);

  function addTask(e) {
    e.preventDefault();
    if (newTask !== "") {
      setNewTask("");
      setNewTaskDue(Date.now());
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          todo: newTask,
          status: "Unfinished",
          createdAt: Date.now(),
          due: newTaskDue,
        },
      ]);
      notify(`${newTask} added successfully`, "success", "taskSuccess");
    } else {
      notify("Please fill task", "error", "taskError");
    }
  }

  const notify = (msg, type, id) => {
    switch (type) {
      case "error":
        toast.error(msg, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: id,
          theme: "colored",
        });

        break;
      case "success":
        toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: id,
          theme: "colored",
        });

      case "warning":
        toast.warning(msg, {
          position: toast.POSITION.TOP_RIGHT,
          toastId: id,
          theme: "colored",
        });

        break;
      default:
        break;
    }
  };

  function setStatus(id, status) {
    const updatedTodo = todos
      .filter((todo) => todo.id === id)
      .map((task) => {
        task.status = status;
        task.finishedAt = Date.now();
        return task;
      });
    notify(
      `${updatedTodo[0].todo} is now ${status}!`,
      "success",
      "taskUpdateSuccess"
    );
    setTodos([...todos]);
  }

  function deleteTodo(id) {
    const removedTask = todos.filter((todo) => todo.id === id);
    const tasks = todos.filter((todo) => todo.id !== id);

    notify(
      `${removedTask[0].todo} is removed!`,
      "warning",
      "taskRemoveSuccess"
    );
    setTodos([...tasks]);
  }

  const doneTask = todos.filter((task) => task.status === "Done");
  const unfinishedTask = todos.filter((task) => task.status !== "Done");
  const onGoingTask = todos.filter((task) => task.status === "Current");

  return (
    <div className="container w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 dark:bg-gray-700">
        <div className="lg:col-span-8 col-span-1 flex flex-wrap my-2">
          <TodoList
            unfinishedTask={unfinishedTask}
            setStatus={setStatus}
            deleteTodo={deleteTodo}
          />
          <DoneTodo doneTask={doneTask} />
        </div>
        <div className="sm:block md:col-span-4 col-span-1 dark:bg-gray-700">
          <div className="lg:sticky relative mt-5 mr-3 top-8">
            <TodoDashboard
              todos={todos}
              unfinishedTask={unfinishedTask}
              onGoingTask={onGoingTask}
              doneTask={doneTask}
            />
            <TodoForm
              newTask={newTask}
              setNewTask={setNewTask}
              newTaskDue={newTaskDue}
              setNewTaskDue={setNewTaskDue}
              addTask={addTask}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        toastClassName={({ type }) =>
          contextClass[type || "default"] +
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-lg font-white font-med block p-3"}
        autoClose={5000}
      />
    </div>
  );
}

export default App;
