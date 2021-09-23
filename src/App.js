import { useState } from 'react'
import AddTask from './components/AddTask';
import { Header } from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  const toggleReminder = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, reminder: !task.reminder} : task));
  }

  return (
    <div className="container">
      <Header onToggle={toggleAddTask} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
