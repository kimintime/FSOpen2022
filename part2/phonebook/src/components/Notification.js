import React from "react";

const Notification = ({ message, success }) => {
    if (message === null) {
        return null
    }

    if (success === true) {
        const notificationStyle = {
            background: 'lightgrey',
            fontSize: 20,
            color: 'green',
            borderStyle: 'solid',
            borderColor: 'green',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20
        } 
        return (
            <div style={notificationStyle}>
                {message}
            </div>
        )
    } else if (success === false) {
        const notificationStyle = {
            background: 'lightgrey',
            fontSize: 20,
            color: 'red',
            borderStyle: 'solid',
            borderColor: 'red',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20
        } 
        return (
            <div style={notificationStyle}>
                {message}
            </div>
        )
    }
}

export default Notification