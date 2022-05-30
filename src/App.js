import {BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Login from './Pages/Public/Login';
import ForgetPassword from './Pages/Public/Forget_Password';
import Signup from './Pages/Public/Signup';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/404';
import Blank from './Pages/Blank';
import Table from './Pages/Table';
import Card from './Pages/Card';
import Button from './Pages/Button';
import Chart from './Pages/Chart';
import Layout from './Components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Login/>} exact/>
        <Route path='/login'  element={<Login/>} />
        <Route path='/forget_password' element={<ForgetPassword/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route path='/dashboard' element={<Layout><Dashboard/></Layout>} />
        <Route path='/404' element={<Layout><NotFound/></Layout>} />
        <Route path='/blank' element={<Layout><Blank/></Layout>} />
        <Route path='/table' element={<Layout><Table/></Layout>} />
        <Route path='/card' element={<Layout><Card/></Layout>} />
        <Route path='/button' element={<Layout><Button/></Layout>} />
        <Route path='/chart' element={<Layout><Chart/></Layout>} />
    </Routes>   
  </Router>
  );
}

export default App;
