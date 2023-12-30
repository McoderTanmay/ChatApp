import styles from "./sigin.module.css"
import { Link } from "react-router-dom";

function Sigin() {
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
            <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className={`form-control ${styles.inputText}`}
              id="exampleInputPassword1"
            />
          </div>
            <button type="submit" className={`btn btn-primary ${styles.loginBtn}`}>
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