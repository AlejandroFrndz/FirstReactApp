import AddTaskContainer from '../containers/AddTaskContainer';
import { Header } from './Header'
import Tasks from './Tasks'
import Footer from './Footer'
import PropTypes from 'prop-types'

const App = ({ tasks, toggleAddTask, showAddTask, addTask, deleteTask, toggleReminder}) => {
  return (
    <div className="container">
      <Header onToggle={toggleAddTask} showAddTask={showAddTask}/>
      {showAddTask && <AddTaskContainer onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      <Footer />
    </div>
  );
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleAddTask: PropTypes.func.isRequired,
  showAddTask: PropTypes.bool.isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleReminder: PropTypes.func.isRequired
}

export default App;
