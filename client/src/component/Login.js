import React, { useState } from 'react';

function Login(props) {
    const [input, setInput] = useState({ name: "", room: "" });

    const handleSubmit = () => {
        props.onSetName(input.name);
        props.onSetRoom(input.room);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Input a name:
                </label>
                <input type="text" onChange={e => setInput({ ...input, name: e.target.value })} />
                <label> Input a room:
                </label>
                <input type="text" onChange={e => setInput({ ...input, room: e.target.value })} />
                <input type="submit" value="Sumit" />
            </form>
        </>
    )
}

export default Login;
