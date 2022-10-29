
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import MyHome from './Component/MyHome/MyHome';
import Register from './Component/Authentication/Register';
import LogIn from './Component/Authentication/LogIn';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/myHome' element={<MyHome />}></Route>

        {/* Authentication */}
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>





    </div>
  );
}

export default App;
