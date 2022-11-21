import React from "react";
import {auth} from "../config/firebaseConfigue";

export default function Header_Connect() {


    const user = auth.currentUser;
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const pseudo = user.displayName;
        const email = user.email;



        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
        console.log(uid)
    }
    return (
        <div className={'header'}>
            <img src={'onzer.png'}/>
            <div className={'connexion'}>

            </div>
        </div>

    )
}

