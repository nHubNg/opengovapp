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
import VisitOur from "./pages/visit/Visit";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import Invest from "./pages/Invest";
import Contact2 from "./pages/Contact2";
import Contact3 from "./pages/Contact3";
import News from "./pages/News";
import SingleNews from "./pages/SingleNews";
import Gallery from "./pages/Gallery";

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
          <Route path="/visit" element={<VisitOur />} />
          <Route path="/auth" element={<SignUpAndSignUp />} />
          <Route path="/lga" element={<Lga />} />
          {/* <Route path="/team" element={<Team />} /> */}

          <Route path="/secondContact" element={<Contact2 />} />
          <Route path="/thirdContact" element={<Contact3 />} />

          <Route path="*" element={"Sorry this route does not exist"} />

          {/* About Page */}
          <Route path="/about-us">
            <Route path="principle" element={<Principle />} />
            <Route path="governance" element={<Team />} />
            <Route path="advisory-council" element={<Team />} />
          </Route>
          <Route path="/invest">
            <Route index element={<Invest />} />
          </Route>
          <Route path="/industries"></Route>
          <Route path="/media">
            <Route path="news">
              <Route index element={<News />} />
              <Route path=":id" element={<SingleNews />} />
            </Route>
          </Route>

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
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
