import PropTypes from 'prop-types'

const AddTask = ({task, setTask, date, setDate, reminder, setReminder, onSubmit}) => {
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
    task: PropTypes.string.isRequired,
    setTask: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    setDate: PropTypes.func.isRequired,
    reminder: PropTypes.bool.isRequired,
    setReminder: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
export default AddTask