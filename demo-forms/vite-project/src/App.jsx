import './App.css';
import { useState } from 'react';


function App() {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  console.log(userData);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]:value
    });
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${userData.username}; password: ${userData.password}`);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={userData.username}
          name='username'
          placeholder='example@gmail.com'
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          value={userData.password}
          name='password'
          placeholder='************'
          onChange={handleInputChange}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default App;
