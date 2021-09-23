import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    const styles = {
        backgroundColor: color, 
        textTransform: 'capitalize'
    };

    return (
        <button 
        style={styles}
        className='btn'
        onClick={() => onClick()}
        >   
            {text}
        </button>
    );
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;
