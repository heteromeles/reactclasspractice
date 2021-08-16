import { useState } from 'react';
import Users from './components/Users/Users';
import NewUser from './components/NewUser/NewUser';

const USERS = [
  {id:1, username: "Michael", age: 29},
  {id:2, username: "Jack", age: 15},
]

function App() {
  const [theUsers, setUsers] = useState(USERS);

  const addUserHandler = (aNewUser) => {
    setUsers((aPreviousUsers) => {
      return [aNewUser, ...aPreviousUsers];
    });
  };
  
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <Users users={theUsers} />
    </div>
  );
}

export default App;
