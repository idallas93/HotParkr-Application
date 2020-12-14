import React, { useState } from "react";
import "./style.css";
import ProfileForm from "../../Components/ProfileForm";
import Button from "react-bootstrap/Button";


function Profile() {
  const [updating, setUpdating] = useState(false);

  const updateUser = () => {
    console.log("updating");
    // TODO: Define function updating user Info
    setUpdating(false);
  };

  return (
    <main>
      <div className="headers">
      <h1>Profile</h1>
      <Button variant="secondary"  size="lg" className="modify-button" onClick={() => setUpdating(true)}>Modify</Button>
      </div>
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
