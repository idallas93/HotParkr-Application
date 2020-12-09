import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ProfileForm from "../../Components/ProfileForm";
function Signup() {
  const register = () => {};
  return <ProfileForm isUpdating="false" register={register} />;
}

export default Signup;
