import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/accounts/login/Login';
import Signin from './components/accounts/signin/Signin';
import Cover from './components/accounts/Cover';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin'element={<Cover component={<Signin/>}/>}/>
        <Route path='/' element={<Cover component={<Login/>}/>}/>
      </Routes>
      {/* <Signin></Signin> */}
    </div>
  );
}

export default App;
