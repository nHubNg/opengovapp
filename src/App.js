import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";

import SignUpAndSignUp from "./pages/SignUpAndSignUp";
import UserDashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const { isAuth } = useSelector((state) => state.user);
  console.log({isAuth})
  const token = localStorage.token;
  console.log({token});
  const decoded = token !== undefined ? jwt_decode(token) : null;

  return (
    <>
      <Router>
        <Routes>
        
        
          <Route path="/" element={<HomePage />} />
          
          

          <Route path="/auth" element={
            
            <SignUpAndSignUp />
            
            
            } />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute isAuthenticated={decoded !== null ? decoded.isLoggedIn : ''}>
                <UserDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}


const PrivateRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated)
  return isAuthenticated ? children : <SignUpAndSignUp /> ;
};

export default App;
