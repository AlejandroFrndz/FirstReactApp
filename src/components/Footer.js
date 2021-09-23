import { useState } from 'react'
import Clock from './Clock'

const Footer = () => {
    const [year,setYear] = useState("");

    const updateYear = (yearFromClock) => {
        setYear(yearFromClock);
    }

    return (
        <footer>
            <Clock setYear={updateYear}/>
            <p>Copyright &copy; {year}</p>
        </footer>
    )
}

export default Footer
