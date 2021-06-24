import react, { useState, useEffect, useContext } from 'react';
import Main from './components/Main';
import { SocketContext, SocketProvider } from './contexts/SocketContext';
import { UserProvider } from './contexts/UserContext';

function App() {

    return (
        <SocketProvider>
            <UserProvider>
                <Main />
            </UserProvider>
        </SocketProvider>
    );
}

export default App;