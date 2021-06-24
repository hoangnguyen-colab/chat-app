import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Login from './Login';
import Chat from './Chat';

function Main() {

    const { user } = useContext(UserContext);

    return (
        <div>
            {(user.id)  ? <Chat /> : <Login />}
        </div >
    )
}

export default Main
