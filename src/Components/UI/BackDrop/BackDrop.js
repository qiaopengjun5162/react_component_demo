import React from 'react'

import './BackDrop.css'

function BackDrop(props) {
    return (
        <div className="BackDrop">
            {props.children}
        </div>
    )
}

BackDrop.propTypes = {}

export default BackDrop
