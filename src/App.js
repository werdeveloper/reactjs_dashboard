import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Login from './Pages/Public/Login';
import Forget_Password from './Pages/Public/Forget_Password';
import Signup from './Pages/Public/Signup';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header/>
          <Dashboard/>
          <Footer/>
        </div>
      </div>
      </div>

      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Forget_Password/> */}
    </>
  );
}

export default App;
