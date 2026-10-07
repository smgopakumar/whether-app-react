import react from 'react';
import {useWeather} from '../context/Weather.jsx'

const Button = (props) => {
    const weather = useWeather();
    return(
        <button className="btn" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Button;