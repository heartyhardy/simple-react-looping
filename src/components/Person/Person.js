import React from 'react';
import './Person.css';

const Person = (props) => {
    return(
        <div className="main-div">
            <p className="name">{props.user.name}</p>
            <p className="email">{props.user.email}</p>
        </div>
    )
}

export default Person