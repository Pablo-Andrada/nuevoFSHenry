import React from "react";
import styles from "./App.module.css";
import { useState } from "react";


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
      [name]: value
    });
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
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}

export default App;
