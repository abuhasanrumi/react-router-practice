import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    const {name, email, phone, website} = friend;
    return (
        <div>
            <h3>This is Friend Details: {friendId}</h3>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Web: {website}</p>
        </div>
    );
};

export default FriendDetail;