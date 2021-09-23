import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({onToggle,showAddTask}) => {

    return(
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'cancel' : 'add'} onClick={onToggle}/>
        </header>
    );
}

Header.propTypes = {
    onToggle: PropTypes.func,
    showAddTask: PropTypes.bool
}

export {Header};