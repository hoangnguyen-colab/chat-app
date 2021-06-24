import react, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import faker from 'faker';

const endpoint = 'http://localhost:5000';

function App() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [name, setName] = useState('');

    const handleClickSend = (event) => {
        event.preventDefault();
        if (message) {
            const mymessage = {
                message,
                from: name,
            }
            socket.emit('message', mymessage);
            setMessages(messages => [...messages, mymessage]);
        }
    }

    const handleJoin = (e) => {
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                console.log(error);
            }
        });
        e.preventDefault();
    }


    useEffect(() => {
        setName(faker.name.findName());
        const socket_connect = io(endpoint);
        setSocket(socket_connect);

        socket_connect.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
    }, []);

    return (
        <div>
            <form onSubmit={handleClickSend}>

                <input value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            <div>
                {messages.map((item, index) => {
                    return (
                        <p key={index}>{item.message} - {item.from}</p>
                    )
                })}
            </div>
        </div>
        // <div className="App">
        //     {
        //         ((!name || !name.length) ? (
        //             <>
        //                 <Login onSetName={setName} onSetRoom={setRoom} />
        //             </>
        //         ) : (
        //             <>
        //                 <div>
        //                     <label>Join {room}:</label>
        //                     <button onClick={handleJoin}>
        //                         join</button>
        //                 </div>
        //                 <div>
        //                     <input type="text" onChange={e => setMessage(e.target.value)} />
        //                     <button onClick={handleClickSend}>
        //                         send</button>
        //                     <div>
        //                         <MessageList messages={messages} />
        //                     </div>
        //                 </div>
        //             </>
        //         ))
        //     }
        // </div>
    );
}

export default App;