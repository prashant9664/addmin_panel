import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import Dashbord from './Container/Dashbord';
import Formbasic from './Container/Formbasic ';
import Tables from './Container/Tables';
import Login from './Container/Login';
import Register from './Container/Register';

function App() {
  return (
    <div>
      <Header/>
         <Routes>
         <Route path='/register' element={<Register/>}></Route>
            <Route path='/' element={<Login/>}></Route>
             <Route path='/dashbord' element={<Dashbord/>}/>
             <Route path='/formbasic' element={<Formbasic />}/>
             <Route path='/tables' element={<Tables/>}/>
         </Routes>
       <Footer/> 
    </div>
  );
}

export default App;
