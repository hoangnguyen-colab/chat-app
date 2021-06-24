import React, { useState, useEffect } from 'react';

function MessageList({ messages }) {

    return (
        <div>
            <div>
                <ul id="chat-list">
                    {messages.map(item => (
                        <li>{item.user}: {item.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MessageList;
