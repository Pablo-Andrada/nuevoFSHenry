import React from "react";
import styles from "./App.module.css";
import { useState } from "react";
import { validate } from "./helpers/validate";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "Username is required",
    password: "Password is required"
  })
  console.log(errors);
  
  const handleInputChange = (event) => {   
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value
    });

    const errors = validate(userData);
    setErrors(errors);  // Todo esto es igual a hacer: setErrors(validate(userData)); ambos devuelven un objeto
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario logueado correctamente. Username: ${userData.username}`)
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.formContainer}
        onSubmit={handleOnSubmit}
      >
        <h2 className={styles.title}>LOGIN</h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            className={styles.input}
            value={userData.username}
            name="username"
            placeholder="example@gmail.com"
            onChange={handleInputChange}
          />
          {errors.username && <p style={{color:'red'}}>{ errors.username}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            className={styles.input}
            value={userData.password}
            name="password"
            placeholder="*******"
            onChange={handleInputChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{ errors.password}</p>}
        </div>

        <button
          type="submit"
          className={styles.button}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
