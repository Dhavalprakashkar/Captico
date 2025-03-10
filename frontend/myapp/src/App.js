import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Courseform from './components/courseform';
import Paramsedit from './components/paramsedit';
import Todashboard from './components/todashboard';
import Editcourse from './components/editcourse';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/course' element={<Courseform/>}></Route>
        <Route path='/singlecourse/:id' element={<Paramsedit/>}></Route>
        <Route path='/editcourse/:id' element={<Editcourse/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
