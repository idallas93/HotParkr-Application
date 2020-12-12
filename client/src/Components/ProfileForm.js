import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import zipcodes from "zipcodes"


const ProfileForm = ({ isDisabled, updateUser, isUpdating }) => {

  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    state.apiToken ?
      Axios.post("/api/userInfo", {email: state.email}, {headers: {Authorization: `Bearer ${state.apiToken}`}}).then(({data}) => setForm({...form, ...data}))
    :
      console.log("no token")
  }, []);

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
        const zipcode = form.zipcode
        // console.log(apiToken);
        const {longitude, latitude} = zipcodes.lookup(zipcode)
        dispatch({
          type: "LOGIN",
          email: email,
          apiToken: token,
          zipcode: zipcode,
          longitude: longitude,
          latitude: latitude
        });
        localStorage.setItem("user", JSON.stringify({ email, token, zipcode}));
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
            value={form.email}
          />
        </div>
        {
          isUpdating ?
          <>
        </> :
          <><div className="form-group">
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
      </div></>
        }
        
        
        <div className="form-group">
          <label>First Name: </label>
          <input
            type="text"
            onChange={handleInputChange}
            required
            className="form-control"
            name="firstName"
            value={form.firstName}
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
            value={form.lastName}
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select defaultValue="" name="gender" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an option
            </option>
            <option value="Male" selected={form.gender === "Male" ? true : false }>Male</option>
            <option value="Female" selected={form.gender === "Female" ? true : false }>Female</option>
            <option value="Non-Binary" selected={form.gender === "Non-Binary" ? true : false }>Non-Binary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Preferences </label>
          <select defaultValue="" name="preference" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an option
            </option>
            <option value="Male" selected={form.preference === "Male" ? true : false }>Male</option>
            <option value="Female" selected={form.preference === "Female" ? true : false }>Female</option>
            <option value="Non-Binary" selected={form.preference === "Non-Binary" ? true : false }>Non-Binary</option>
          </select>
        </div>
        <div className="form-group">
          <label>Age range: </label>
          <select defaultValue="" name="age" onChange={handleInputChange}>
            <option value="" disabled hidden>
              Please select an age
            </option>
            <option value="18-21" selected={form.age === "18-21" ? true : false }>18-21</option>
            <option value="22-25" selected={form.age === "22-25" ? true : false }>22-25</option>
            <option value="26-30" selected={form.age === "26-30" ? true : false }>26-30</option>
            <option value="30-50" selected={form.age === "30-50" ? true : false }>30-50</option>
            <option value="50+" selected={form.age === "50+" ? true : false }>50+</option>
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
            value={form.zipcode}
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
