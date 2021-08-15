import User from "./User";

import './UsersList.css'

const UsersList = (props) => {
    return (
        <ul className="users-list">
          {props.users.map((user) => (
            <User key={user.id} username={user.username} age={user.age} />
          ))}
        </ul>
      );
}

export default UsersList;