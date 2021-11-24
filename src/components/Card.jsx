import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';

function Card(props) {
    return (
        <div>
            <h2 className='title'>Flight to {props.dest}! </h2>
            <img src={props.img} alt="avatar_img" style={{ height: '250px' }} />
            <p></p>
            <p className='subtitle'> Leaves: {props.ldate} at {props.dep}</p>
            <p className='subtitle'> Duration: {props.dur}</p>
            <Link to="/Reservations"><button className="btn btn-danger">Book this flight!</button></Link>
            <p></p>
        </div>
    );
}



export default Card;