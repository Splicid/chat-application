import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// import { io } from "socket.io-client";
import Login from './components/login'
import SignUp from './components/signup';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main-page" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
