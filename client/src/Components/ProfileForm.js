import Axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";


const ProfileForm = ({ isDisabled, updateUser, isUpdating }) => {

  const [_, dispatch] = useGlobalContext();


  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    preference: "",
    age: "",
    zipcode: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const register = (e) => {
    e.preventDefault();
    Axios.post("/auth/signup", form).then(
      async (res) => {console.log(res)
        alert("Registered Successfully!")
        // log user in with the api
        const { data } = await Axios.post("/auth/login", form);
        // put the email and token in the state
        const { email, token } = data;
        const apiToken = token;
        console.log(apiToken);
        dispatch({ 
          type: "LOGIN", 
          email, 
          apiToken: data.token });
        localStorage.setItem("user", JSON.stringify({ email, token }));
        window.location.replace("/")
      }
    );
  };
  return (
    <form>
      <fieldset disabled={isDisabled}>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            onChange={handleInputChange}
            required
            className="form-control"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            onChange={handleInputChange}
            required
            className="form-control"
            name="password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password: </label>
          <input
            type="password"
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>First Name: </label>
          <input
            type="text"
            onChange={handleInputChange}
            required
            className="form-control"
            name="firstName"
          />
        </div>
        <div className="form-group">
          <label>Last Name: </label>
          <input
            type="text"
            onChange={handleInputChange}
            required
            className="form-control"
            name="lastName"
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select defaultValue="" name="gender" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an option
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Preferences </label>
          <select defaultValue="" name="preference" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an option
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non-Binary">Non-Binary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age range: </label>
          <select defaultValue="" name="age" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an age
            </option>
            <option value="18-21">18-21</option>
            <option value="22-25">22-25</option>
            <option value="26-30">26-30</option>
            <option value="30-50">30-50</option>
            <option value="50+">50+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Zip-Code:</label>
          <input
            type="text"
            required
            className="form-control"
            onChange={handleInputChange}
            name="zipcode"
          />
        </div>
      </fieldset>
      <button onClick={isUpdating ? updateUser : register}>
        {isUpdating ? "Update" : "Submit"}
      </button>
    </form>
  );
};
export default ProfileForm;
