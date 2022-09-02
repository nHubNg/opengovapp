import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import Team from "./pages/team/Team";
import Carousel from "./pages/testcarousel";
import SignUpAndSignUp from "./pages/SignUpAndSignUp";
import Principle from "./pages/Principle";
import UserDashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Lga from "./pages/lga/Lga";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactPage from "./pages/ContactPage";
import Invest from "./pages/Invest";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactPage">
            <Route index element={<ContactPage />} />
          </Route>
          <Route path="cas" element={<Carousel />} />
          <Route path="/auth" element={<SignUpAndSignUp />} />
          {/* <Route path="/principle" element={<Principle />} /> */}
          <Route path="/lga" element={<Lga />} />
          <Route path="/team" element={<Team />} />

          {/* About Page */}
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/about-us">
            <Route path="principle" element={<Principle />} />
          </Route>
          <Route path="/invest">
            <Route index element={<Invest />} />
          </Route>
          <Route path="/industries"></Route>
          <Route path="/media"></Route>
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
