import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();
    const handleClick = () => {
        const url = `/friend/${id}`
        history.push(url)
    }
    const friendStyle={
        border: '1px solid black',
        margin: '20px',
        padding: '20px',
        borderRadius: "20px"
    }
    return (
        <div style={friendStyle}>
            <h3>Name:{name}</h3>
            <p>Email: {email}</p>
            <p>ID: <Link to={`/friend/${id}`}>Show Details of {id}</Link></p>
            <br />
            <button onClick={() => handleClick(id)}>Check Details</button>
        </div>
    );
};

export default Friend;