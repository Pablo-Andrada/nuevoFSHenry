import './App.css';
import { useState } from 'react';
import { validate } from './helpers/validate';

function App() {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    username: "User is required",
    password: "Password is required"
  })
     
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]:value
    });

    const errors = validate(userData);  // <--es lo mismo-->  setErrors(validate(userData))
    setErrors(errors);
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
        {errors.username && <p style={{ color:'red'}}>{errors.username}</p>}
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
        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
      </div>
      <button>Submit</button>
    </form>
  )
}

export default App;
