import Card from '../UI/Card';
import './User.css'

const User = (props) => {

    return (
        <li>
          <Card className="user">
              {props.username} ({props.age} years old)
          </Card>
        </li>
      );}

export default User;