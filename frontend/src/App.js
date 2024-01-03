import { Routes, Route, json } from 'react-router-dom';
import './App.css';
import Login from './components/accounts/login/Login';
import Signin from './components/accounts/signin/Signin';
import Cover from './components/accounts/Cover';

function App() {
  const  loginData= async (data)=>{
    console.log(JSON.stringify(data));
    try {
      const response= await fetch('http://localhost:5000/accounts/login',{
        method:'POST',
        body:JSON.stringify(data),
        // mode:'no-cors',
        headers:{
          'Content-Type':'application/json'
        }
      }).then((response) => response.json())
      .then((data) => {
         console.log(data);
         // Handle data
      })
      .catch((err) => {
         console.log("error",err.message);
      });
      // const token = await response.json();
      // console.log(token)
    } catch (error) {
      console.log(' 1',error);
      console.log(error.massage);
    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/signin'element={<Cover component={<Signin/>}/>}/>
        <Route path='/' element={<Cover component={<Login onLogin={loginData}/>}/>}/>
      </Routes>
      {/* <Signin></Signin> */}
    </div>
  );
}

export default App;
