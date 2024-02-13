import { Routes, Route, json } from "react-router-dom";
import "./App.css";
import Login from "./components/accounts/login/Login";
import Signin from "./components/accounts/signin/Signin";
import Cover from "./components/accounts/Cover";
import Index from "./components/main-app/Index";
import Nav from "./components/nav/Nav";
import { useEffect, useState } from "react";
import { ChatContextProvider } from "./context/ChatContext";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  //login
  const loginData = async (data) => {
    try {
      await fetch("http://localhost:5000/accounts/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          localStorage.setItem("User", JSON.stringify(result.data));
          setUser(result.data);
          let resData = result.user;
          // console.log(resData.uid);
          setUserId(resData.uid);
        })
        .catch((err) => {
          console.log("error", err.message);
        });
    } catch (error) {
      console.log(error.massage);
    }
  };
  //signup
  async function signUpData(data) {
    await fetch("http://localhost:5000/accounts/signin", {
      method: "POST",
      body: JSON.stringify(json.parse(data)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log(data);
        // Handle data
      })
      .catch((err) => {
        console.log("error", err.message);
      });
  }
  console.log(userId);
  useEffect(() => {
    setUser(localStorage.getItem("User"));
  }, []);
  return (
    <ChatContextProvider user={userId}>
      <div className="App">
        <Nav />
        <Routes>
          <Route
            path="/signin"
            element={<Cover component={<Signin onSignUp={signUpData} />} />}
          />
          <Route
            path="/"
            element={
              user ? (
                <Index />
              ) : (
                <Cover component={<Login onLogin={loginData} />} />
              )
            }
          />
        </Routes>
        {/* <Signin></Signin> */}
      </div>
    </ChatContextProvider>
  );
}

export default App;
