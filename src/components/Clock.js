import { useState,useEffect } from 'react'
import PropTypes from 'prop-types'

const Clock = ({setYear}) => {
    const [time, setTime] = useState("");
    
    useEffect(() => {
        const year = (new Date()).getFullYear();
        setYear(year);
        
        const intervalID = setInterval(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        },1000)
        return () => {
            clearInterval(intervalID);
        }
    }, [setYear]);

    return (
        <h3>{time}</h3>
    )
}

Clock.propTypes = {
    setYear: PropTypes.func
}
export default Clock
