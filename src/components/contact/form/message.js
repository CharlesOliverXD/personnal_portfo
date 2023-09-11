import React, { useState } from "react";


export default function Message() {

    const [message, setMessage] = useState("");

    return (
        <div className="form-group mt-3">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control" name="message" rows="5" placeholder="Message" required ></textarea>
        </div>
    );

}