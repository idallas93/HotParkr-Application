import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ProfileForm from "../../Components/ProfileForm";
function Signup() {
  return <ProfileForm isUpdating={false} isDisabled={false} />;
}

export default Signup;
