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
import Lga from "./pages/lga/Lga";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/ContactPage' element={<ContactPage />} />

          <Route path="/auth" element={<SignUpAndSignUp />} />

          <Route path="/lga" element={<Lga />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

const PrivateRoute = ({ isAuthenticated, children }) => {
  console.log(isAuthenticated);
  return isAuthenticated ? children : <SignUpAndSignUp />;
};

export default App;
