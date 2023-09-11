import React, { useState } from "react";
import Email from "../form/email";
import SendButton from "./button";
import Message from "./message";
import Name from "./name";
import Subject from "./subject";
import Toast from "./toast";

export default function Form() {


    return (



        <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
            <div className="row">

                <Name />
                <Email />


            </div>
            
            <Subject/>

            <Message/>
            
            <Toast/>

            <SendButton/>

        </form>

    );

}