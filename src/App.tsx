import {useState} from 'react'
import axios from 'axios';
import './App.css';

type User = {
  id: string;
  name: string;
}

function App() {

  const [users, setUsers] = useState<User[]>([])

  const onClickProblem = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setUsers(res.data)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return (
    <div className="App">
      <button onClick={onClickProblem}>問題</button>
      {users.map((user, index) => (
       <li key={index}>{user.name}</li> 
      ))} 
    </div>
  );
}

export default App;
