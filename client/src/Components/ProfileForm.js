import React from "react";

const ProfileForm = ({ updateUser, register, isUpdating }) => {
  return (
    <form>
      <div className="form-group">
        <h1>{isUpdating ? "Your profile" : "Create your profile"}</h1>
        <label>Email: </label>
        <input type="text" required className="form-control" />
      </div>
      <div className="form-group">
        <label>Password: </label>
        <input type="text" required className="form-control" />
      </div>
      <div className="form-group">
        <label>Confirm Password: </label>
        <input type="text" required className="form-control" />
      </div>
      <div className="form-group">
        <label>First Name: </label>
        <input type="text" required className="form-control" />
      </div>
      <div className="form-group">
        <label>Last Name: </label>
        <input type="text" required className="form-control" />
      </div>
      <div class="form-group">
        <label>Sex</label>
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-Binary">Non-Binary</option>
        </select>
      </div>
      <div class="form-group">
        <label>Preferences </label>
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label>Age range: </label>
        <select>
          <option value="18-21">18-21</option>
          <option value="22-25">22-25</option>
          <option value="26-30">26-30</option>
          <option value="30-50">30-50</option>
          <option value="50+">50+</option>
        </select>
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" required className="form-control" />
      </div>
      <button onClick={() => (isUpdating ? updateUser : register)}>
        {isUpdating ? "Update" : "Submit"}
      </button>
    </form>
  );
};
export default ProfileForm;
