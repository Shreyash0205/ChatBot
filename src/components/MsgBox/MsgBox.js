import React, { useState } from 'react';

function MsgBox({ addMessage }) {
    const [messageText, setMessageText] = useState("");

    function sendMessage() {
        if (messageText.trim() !== "") {
            addMessage(messageText.trim(), "1");
            setMessageText("");
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            alert(`Uploaded file: ${file.name}`);
        }
    }

    function handleTextChange(event) {
        setMessageText(event.target.value);
    }

    return (
        <div>
            <div className="card-footer border-0 bottom-rounded z-depth-0">
                <div className="row">
                    <div className="col col-md-10 col-lg-9 mx-auto">
                        <div className="row d-flex justify-content-center footer-footer">
                            <div className="col-12 col-md-2 d-flex align-self-center justify-content-center my-0">
                                <div className="md-form m-1">
                                    <div className="upload-container">
                                        <input type="file" id="file-input" accept=".pdf" hidden onChange={handleFileUpload} />
                                        <label htmlFor="file-input" className="upload-label">
                                            <i className="fa-solid fa-link p-2" style={{ backgroundColor: "aqua", borderRadius: "10px" }} />
                                        </label>
                                        <div className="upload-options" id="upload-options">
                                            {/* <p>Upload from device</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 align-self-center my-0">
                                <div className="row d-flex align-self-center justify-content-center">
                                    <div className="col-12 d-flex">
                                        <div className="form-group col-12 my-0 mx-0">
                                            <textarea
                                                rows={2}
                                                id="message-input"
                                                name="content"
                                                placeholder="Chat here!"
                                                className="form-control textarea resize-ta"
                                                value={messageText}
                                                onChange={handleTextChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2 d-flex align-self-center justify-content-center my-0">
                                <div className="md-form my-1">
                                    <button type="button" className="btn" onClick={sendMessage}>
                                        <i
                                            className="fa fa-arrow-circle-up"
                                            id="send-button"
                                            style={{
                                                fontSize: 40,
                                                right: 20,
                                                color: "rgb(0, 191, 255)",
                                                cursor: "pointer",
                                                marginBottom: 10
                                            }}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MsgBox;
