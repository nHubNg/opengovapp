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
  const token = localStorage.token;
var decoded = jwt_decode(token);

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
              <PrivateRoute isAuthenticated={decoded.isLoggedIn}>
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
