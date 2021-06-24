import React, { useState, useEffect } from 'react';

function Chat(props) {
    const [room, setRoom] = useState("");

    const createRoom = () => {
        console.log(props.name);
        props.onSetRoom(props.name);
        props.onJoin();
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div>
                <form onSubmit={createRoom}>
                    <h1>Create room: </h1>
                    <input type="submit" value="Create" />
                </form>
            </div>
            <div>
                <h1>Select a room:</h1>
            </div>
        </>
    )
}

export default Chat;
