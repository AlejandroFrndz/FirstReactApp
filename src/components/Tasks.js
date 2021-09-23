import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>
            {tasks.length > 0 ? 
            tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)
            : "No pending tasks"}
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Tasks
