import React, { useState } from "react";


export default function Email() {

    const [email, setEmail] = useState("");

    return (
        <div className="col-md-6 form-group mt-3 mt-md-0">
            <input value={email} onChange={ (e)=>setEmail(e.target.value) } type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
        </div>
    );

}