import { useState } from 'react'
import PropTypes from 'prop-types'

const AddTask = ({onAdd}) => {
    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!task){
            alert('Please add your task');
            return;
        } 

        const id = Math.random() * 10000;
        onAdd({id:id, text:task, day:date, reminder:reminder});
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor='task'>Task</label>
                <input 
                    type='text' 
                    placeholder='Task' 
                    id='task' 
                    value={task}
                    onChange={({target}) => setTask(target.value)}
                />
            </div>

            <div className='form-control'>
                <label htmlFor='date'>Day & Time</label>
                <input 
                    type='text' 
                    placeholder='Day & Time' 
                    id='date'
                    value={date}
                    onChange={({target}) => setDate(target.value)}
                />
            </div>

            <div className='form-control form-control-check'>
                <label htmlFor='reminder'>Set Reminder?</label>
                <input 
                type='checkbox'
                checked={reminder}
                onChange={({currentTarget}) => setReminder(currentTarget.checked)}
                />
            </div>

            <input 
                type='submit' 
                value='Save Task' 
                className='btn btn-block'
            />
        </form>
    )
}

AddTask.propTypes = {
    onAdd: PropTypes.func
}

export default AddTask