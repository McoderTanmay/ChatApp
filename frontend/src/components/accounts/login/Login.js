import styles from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
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
          />
        </div>
        <button type="submit" className={`btn btn-primary ${styles.loginBtn}`}>
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
