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
// import Card from './Pages/Card';
// import Button from './Pages/Button';
import Chart from './Pages/Chart';

function App() {
  return (
    <Router>
      <Chart/>
    </Router>
  );
}

export default App;
