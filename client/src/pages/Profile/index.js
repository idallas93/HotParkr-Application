import React, { useEffect } from 'react';
import './style.css';
import ProfileForm from "../../Components/ProfileForm"


function Profile() {
    const updateUser = () => {
        console.log("updating")
    }

    return (
        <main>
            <ProfileForm isUpdating="true" updateUser={updateUser} />
        </main>
    )
}

export default Profile
