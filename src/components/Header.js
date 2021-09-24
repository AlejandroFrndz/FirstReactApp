import Button from './Button';
import PropTypes from 'prop-types'
import { Route } from 'react-router';
import NavBar from './NavBar';

const Header = ({onToggle,showAddTask}) => {

    return(
        <div>
            <NavBar />
            <header className='header'>
                <h1>Task Tracker</h1>
                <Route exact path='/' >
                    <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'cancel' : 'add'} onClick={onToggle}/>
                </Route>
            </header>
        </div>
    );
}

Header.propTypes = {
    onToggle: PropTypes.func,
    showAddTask: PropTypes.bool
}

export {Header};