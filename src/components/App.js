import AddTaskContainer from '../containers/AddTaskContainer';
import { Header } from './Header'
import Tasks from './Tasks'
import Footer from './Footer'
import PropTypes from 'prop-types'
import About from './About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = ({ tasks, toggleAddTask, showAddTask, addTask, deleteTask, toggleReminder}) => {
  return (
    <Router >
      <div className="container">
        <Header onToggle={toggleAddTask} showAddTask={showAddTask}/>
        <Route exact path='/' >
          {showAddTask && <AddTaskContainer onAdd={addTask}/>}
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        </Route>
        <Route path='/about' >
          <About />
        </Route>
        <Footer />
      </div>
    </Router>
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
