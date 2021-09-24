import { useState, useEffect } from 'react'
import App from '../components/App'

const AppContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [showAddTask, setShowAddTask] = useState(false);

    //useEffect will fetch all tasks from server when the app gets mounted
    useEffect(() => {
        const getTasks = async () => {
            const dbaTasks = await fetchTasks();
            setTasks(dbaTasks);
        }

        getTasks();
    }, []);

    //Fetch all tasks from server
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        return data;
    }

    //Fetch one task from server
    const fetchTask = async (taskId) => {
        const res = await fetch(`http://localhost:5000/tasks/${taskId}`);
        const data = await res.json();

        return data;
    }

    const addTask = async (task) => {
        //Add task to server
        const res = await fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        });

        //We need to await the response because the mock backend is the element who handles id
        //So, what we include is the task returned by the API wich contains the correct id
        const data = await res.json();
        //Add task to UI
        setTasks([...tasks, data]);
        toggleAddTask();
    }

    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
    }

    const deleteTask = async (taskId) => {
        //Delete task from server
        await fetch(`http://localhost:5000/tasks/${taskId}`,
        {
            method: 'DELETE'
        });
        //Delete task from UI
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    const toggleReminder = async (taskId) => {
        //Write reminder to server
        const taskToToggle = await fetchTask(taskId);
        const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};
        console.log(updTask);
        const res = await fetch(`http://localhost:5000/tasks/${taskId}`,{
            method: 'PUT',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        });
        const data = await res.json();

        //Toggle UI marker
        setTasks(tasks.map((task) => task.id === taskId ? {...task, reminder: data.reminder} : task));
    }

    return (
        <App 
        tasks={tasks} 
        toggleAddTask={toggleAddTask} 
        showAddTask={showAddTask} 
        addTask={addTask}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
        />
    )
}

export default AppContainer
