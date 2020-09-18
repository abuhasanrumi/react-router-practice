import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>  setFriends(data))
    }, [])

    console.log(friends.length)

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Friends: {friends.length}</h1>
      
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    );
};

export default Home;