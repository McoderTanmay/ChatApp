import { useState } from "react";
import styles from "./sigin.module.css";
import { Link } from "react-router-dom";

function Sigin(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [uName, setUName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [samePassword, setSamePassword] = useState(true);

  function fNameChangeHandeler(event) {
    setFName(event.target.value);
  }
  function lNameChangeHandeler(event) {
    setLName(event.target.value);
  }
  function userNameChangeHandeler(event) {
    setUName(event.target.value);
  }
  function passwordChangeHandeler(event) {
    setPassword(event.target.value);
  }
  function confirmPasswordHandeler(event) {
    setCPassword(event.target.value);
  }

  function submitHandeler(event) {
    event.preventDefault();
    if (password !== cpassword) {
      setPassword('');
      setCPassword('');
      setSamePassword(false);
      console.log(1);
      return;
    }

    const data = {
      FirstName: fName,
      LastName: lName,
      UserName: uName,
      password: password,
    };
    props.onSignUp(data);
    setFName("");
    setLName("");
    setPassword("");
    setCPassword("");
    setUName("");
  }

  return (
    <>
      <div className={styles.login}>Signin</div>
      <form>
        <div className="mb-3">
          <label for="exampleInputFName1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className={`form-control ${styles.inputText}`}
            id="exampleInputFName1"
            aria-describedby="Name1Help"
            value={fName}
            onChange={fNameChangeHandeler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputLastName" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className={`form-control ${styles.inputText}`}
            id="exampleInputLastName1"
            value={lName}
            onChange={lNameChangeHandeler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputUserName" className="form-label">
            User Name or Email
          </label>
          <input
            type="text"
            className={`form-control ${styles.inputText}`}
            id="exampleInputUserName"
            value={uName}
            onChange={userNameChangeHandeler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${styles.inputText} ${
              samePassword ? "" : styles.didNotMatch
            }`}
            value={password}
            id="exampleInputPassword1"
            onChange={passwordChangeHandeler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className={`form-label`}>
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${styles.inputText}  ${
              samePassword ? "" : styles.didNotMatch
            }`}
            id="exampleInputcPassword1"
            onChange={confirmPasswordHandeler}
            value={cpassword}
          />
        </div>
        <button
          type="submit"
          onClick={submitHandeler}
          className={`btn btn-primary ${styles.loginBtn}`}
        >
          Create
        </button>
      </form>
      <div className={styles.login}>
        <p>or</p>
        <Link to="/">Already have an account</Link>
      </div>
    </>
  );
}

export default Sigin;
