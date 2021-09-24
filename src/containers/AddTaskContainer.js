import { useState } from 'react'
import PropTypes from 'prop-types'
import AddTask from '../components/AddTask'

const AddTaskContainer = ({ onAdd }) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!task){
            alert('Please add your task');
            return;
        } 

        onAdd({text:task, day:date, reminder:reminder});
    }

    return (
        <AddTask 
        task={task}
        setTask={setTask}
        date={date}
        setDate={setDate}
        reminder={reminder}
        setReminder={setReminder}
        onSubmit={onSubmit}
        />
    )
}

AddTaskContainer.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default AddTaskContainer
