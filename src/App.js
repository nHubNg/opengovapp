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
import Visit from "./pages/visit/Visit"
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import Contact2 from "./pages/Contact2";
import Contact3 from "./pages/Contact3";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="cas" element={<Carousel />} />
          <Route path="/auth" element={<SignUpAndSignUp />} />
          <Route path="/principle" element={<Principle />} />
          <Route path="/lga" element={<Lga />} />
          <Route path="/team" element={<Team />} />
          <Route path="/visit" element={<Visit />} />

          <Route path="/secondContact" element={<Contact2 /> } />
          <Route path="/thirdContact" element={<Contact3 /> } />

          <Route path="*" element={"Sorry this route does not exist"} />

          {/* About Page */}
          <Route path="/about-us" element={<AboutUs />} />
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
