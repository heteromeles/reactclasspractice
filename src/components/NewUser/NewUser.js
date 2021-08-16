import { useState } from "react";

import UserForm from "./UserForm";
import "./NewUser.css";

const NewUser = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const startEditingHandler = () => {
    setIsAdding(true);
  };

  const stopEditingHandler = () => {
    setIsAdding(false);
  };

  const addUserHandler = (aNewUser) => {
    const theNewUser = {
      ...aNewUser,
      id: Math.random().toString(),
    };
    props.onAddUser(theNewUser);
  };

  return (
    <div className="new-user">
      {!isAdding && <button onClick={startEditingHandler}>Add New User</button>}
      {isAdding && <UserForm onAdd={addUserHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewUser;