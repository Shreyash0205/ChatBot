import React from 'react'
import "./Exp.css"
import MsgBox from '../MsgBox/MsgBox'
import ChatItem from '../ChatItem/ChatItem'
function Exp() {
   
    // document
    //     .querySelector(".upload-label")
    //     .addEventListener("click", toggleUploadOptions);

    function sendMessage() {
        const messageInput = document.getElementById("message-input");
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const chatBox = document.getElementById("chat-box");

            // Create user message
            const userMessage = document.createElement("div");
            userMessage.classList.add("message", "user");
            userMessage.textContent = messageText;

            chatBox.appendChild(userMessage);
            messageInput.value = "";

            // Scroll to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulate response (for demonstration purposes)
            setTimeout(() => {
                const responseMessage = document.createElement("div");
                responseMessage.classList.add("message", "simulated");
                responseMessage.textContent = "This is a simulated response.";

                chatBox.appendChild(responseMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            alert(`Uploaded file: ${file.name}`);
        }
    }

    return (
        <>
            <div className="chat-container">
                <div className="chat-header">
                    <i
                        className="fa fa-xing-square"
                        style={{
                            fontSize: 40,
                            marginTop: 0,
                            marginRight: 10,
                            color: "rgb(0, 234, 255)"
                        }}
                    />
                    <h1>ChatGPT</h1>
                </div>
                <div className="chat-box" id="chat-box">
                    {/* Chat messages will be appended here */}
                </div>
                <div className="BInp">
                    <div className="chat-input">
                        <div className="upload-container">
                            <input type="file" id="file-input" accept=".pdf" hidden="" onChange={handleFileUpload} />
                            <label htmlFor="file-input" className="upload-label">
                                <i className="fa-solid fa-link" />
                            </label>
                            <div className="upload-options" id="upload-options">
                                <p>Upload from device</p>
                            </div>
                        </div>
                        <textarea
                            id="message-input"
                            placeholder="Type your message..."
                            defaultValue={""}
                        />
                        <i
                            className="fa fa-arrow-circle-up"
                            id="send-button"
                            style={{
                                fontSize: 40,
                                right: 20,
                                position: "absolute",
                                color: "rgb(0, 191, 255)",
                                cursor: "pointer",
                                marginBottom: 10
                            }}
                            onClick={sendMessage}
                        />
                    </div>
                </div>
            </div>

        </ >
    )
}

export default Exp