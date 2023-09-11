import React, { useState } from "react";


export default function Subject() {

    const [ subject, setSubject] = useState("");

    return (
        <div className="form-group mt-3">
            <input value={subject} onChange={ (e)=> setSubject(e.target.value)} type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
        </div>
    );

}