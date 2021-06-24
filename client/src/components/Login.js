import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Login(props) {

    const { handleSetUser } = useContext(UserContext);
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSetUser({
            id: Math.floor(Math.random() * 100),
            name: name
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Input a name: </label>
                <input type="text" 
                onChange={e => setName(e.target.value)} />
                <input type="submit" value="Sumit" />
            </form>
        </>
    )
}

export default Login;
