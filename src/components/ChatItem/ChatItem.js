import React from 'react'

function ChatItem(props) {
    const { msg, time, flag } = props
    return (
        <div>
            {flag === "1" ? <>
                <div className="chat-log_item chat-log_item-own z-depth-0">
                    <div className="row justify-content-end mx-1 d-flex">
                        <div className="col-auto px-0">
                            {/* <span className="chat-log_author">@User</span> */}
                        </div>
                        <div className="col-auto px-0"></div>
                    </div>
                    {/* <hr className="my-1 py-0 col-8" style={{ opacity: "0.5" }} /> */}
                    <div className="chat-log_message d-flex justify-content-start">
                        <p>{msg}</p>
                    </div>
                    {/* <hr className="my-1 py-0 col-8" style={{ opacity: "0.5" }} /> */}
                    <div className="row chat-log_time m-0 p-0 justify-content-end">
                        {time}
                    </div>
                </div>
            </>
                :
                <><div className="chat-log_item chat-log_item z-depth-0">
                    <div className="row justify-content-end mx-1 d-flex">
                        <div className="col-auto px-0">
                            {/* <span className="chat-log_author">@Bot</span> */}
                        </div>
                        <div className="col-auto px-0"></div>
                    </div>
                    {/* <hr className="my-1 py-0 col-8" style={{ opacity: "0.5" }} /> */}
                    <div className="chat-log_message">
                        <p>
                            {msg}
                        </p>
                    </div>
                    {/* <hr className="my-1 py-0 col-8" style={{ opacity: "0.5" }} /> */}
                    <div className="row chat-log_time m-0 p-0 justify-content-end">
                        {time}
                    </div>
                </div>
                </>}
        </div>


    )
}

export default ChatItem