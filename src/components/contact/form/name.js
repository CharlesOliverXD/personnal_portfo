import React , {useState} from "react";


export default function Name() {
    
    const [name, setName] = useState("") ;

    return (
        <div className="col-md-6 form-group">
            <input value={name} onChange={(e)=> setName(e.target.value) } type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
        </div>
    );

}