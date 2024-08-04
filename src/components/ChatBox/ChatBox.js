import React, { useState } from 'react';
import ChatItem from '../ChatItem/ChatItem';
import MsgBox from '../MsgBox/MsgBox';

function ChatBox() {
    const [messages, setMessages] = useState([
        
    ]);

    function addMessage(msg, flag) {
        const time = new Date().toLocaleTimeString();
        setMessages([...messages, { msg, time, flag }]);

        // Simulate bot response
        if (flag === "1") {
            setTimeout(() => {
                const responseMessage = {
                    msg: "This is a simulated response.",
                    time: new Date().toLocaleTimeString(),
                    flag: "0"
                };
                setMessages(prevMessages => [...prevMessages, responseMessage]);
            }, 1000);
        }
    }

    return (
        <>
            <div>
                <div className="col col-md-10 col-lg-9 col-xl-8 mx-auto my-auto">
                    <div className="card my-5 msgcard">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div id="messages_container" className="chat-log">
                                    {messages.map((message, index) => (
                                        <ChatItem
                                            key={index}
                                            msg={message.msg}
                                            time={message.time}
                                            flag={message.flag}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <MsgBox addMessage={addMessage} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatBox;
