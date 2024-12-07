import './App.css';
import { useState } from 'react';


function App() {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  
  return (
    <form>
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={userData.username}
          name='username'
          placeholder=''
        />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default App;
