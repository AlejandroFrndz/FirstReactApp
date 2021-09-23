import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete,onToggle}) => {
    const iconStyles = {
        color: 'red'
    }

    return (
        <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}<FaTimes style={iconStyles} onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

Task.protoTypes = {
    task: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default Task
