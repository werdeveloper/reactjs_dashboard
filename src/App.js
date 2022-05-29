import {BrowserRouter as Router, 
  // Route, Link
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
// import Login from './Pages/Public/Login';
// import Forget_Password from './Pages/Public/Forget_Password';
// import Signup from './Pages/Public/Signup';
// import NotFound from './Pages/404';
// import Blank from './Pages/Blank';
// import Table from './Pages/Table';

function App() {
  return (
    <Router>
      <Dashboard/>
    </Router>
  );
}

export default App;
