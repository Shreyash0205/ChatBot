import React from 'react'
import "./Base.css"
import ChatBox from '../ChatBox/ChatBox'

function Base() {
    return (<>


        <h1 className='title text-center'>
            <i
                className="fa fa-xing-square"
                style={{
                    fontSize: 40,
                    marginTop: 0,
                    marginRight: 10,
                    color: "rgb(0, 234, 255)"
                }}
            /> AskMe</h1>
        <ChatBox />
    </>

    )
}

export default Base