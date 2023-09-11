import React from "react";


export default function Toast() {
    return (
        <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
    );
}