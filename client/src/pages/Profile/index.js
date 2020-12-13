import React, { useState } from "react";
import "./style.css";
import ProfileForm from "../../Components/ProfileForm";

function Profile() {
  const [updating, setUpdating] = useState(false);

  const updateUser = () => {
    console.log("updating");
    // TODO: Define function updating user Info
    setUpdating(false);
  };

  return (
    <main>
      <h1>Profile</h1>
      <button onClick={() => setUpdating(true)}>Modify</button>
      <ProfileForm
        isDisabled={!updating}
        isUpdating={true}
        updateUser={updateUser}
        setUpdating={setUpdating}
      />
    </main>
  );
}

export default Profile;
