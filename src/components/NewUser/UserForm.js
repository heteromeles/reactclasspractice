import { useState } from "react";
import "./UserForm.css";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      username: username,
      age: age,
    };
    props.onAdd(userData);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <label>Username</label>
        <input type="text" value={username} onChange={usernameChangeHandler} />
      </div>
      <div className="new-user__controls">
        <label>Age</label>
        <input type="number" value={age} min="0.1" step="0.1" onChange={ageChangeHandler} />
      </div>
      <div className="new-user__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;