import logo from './images/Logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Route, Routes } from 'react-router';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/home" element={<Body></Body>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/orders" element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
