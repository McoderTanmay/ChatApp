import { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Login(props) {
  const [enteredUsername, setEnteredUsername]=useState('');
  const [enteredPassword, setEnteredPassword]=useState('');

  const userNameChangeHandeler=(event)=>{
    setEnteredUsername(event.target.value);
  };
  const passwordChangeHandeler=(event)=>{
    setEnteredPassword(event.target.value)
  }
  
  const submitHandeler=(event)=>{
    event.preventDefault();
    const data={
      UserName:enteredUsername,
      password:enteredPassword,
    }
    
    props.onLogin(data);
    setEnteredPassword('');
    setEnteredUsername('');
  }
  return (
    <>
      <div className={styles.login}>Login</div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email or Username
          </label>
          <input
            type="email"
            className={`form-control ${styles.inputText}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={enteredUsername}
            onChange={userNameChangeHandeler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${styles.inputText}`}
            id="exampleInputPassword1"
            value={enteredPassword}
            onChange={passwordChangeHandeler}
          />
        </div>
        <button type="submit" onClick={submitHandeler} className={`btn btn-primary ${styles.loginBtn}`}>
          Login
        </button>
      </form>
      <div className={styles.create}>
        <p>or</p>
        <Link to="/signin">Create an account</Link>
      </div>
    </>
  );
}

export default Login;
