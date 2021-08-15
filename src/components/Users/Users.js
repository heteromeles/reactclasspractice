import Card from "../UI/Card";
import UsersList from "./UsersList";

import './Users.css'

const Users = (props) => {
  return (
        <div>
          <Card className="users">
            <UsersList users={props.users} />
          </Card>
        </div>
    );
}


export default Users;