import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/team/Team";
import Principle from "./pages/Principle";
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
import Resources from "./pages/Resources";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactPage">
            <Route index element={<Contact2 />} />
            <Route path="enquiries" element={<Contact3 />} />
            <Route path="feedback" element={ <ContactPage />} />
            <Route path="contact" element={<Contact2 />} />
          </Route>

          <Route path="/invest" element={<Invest />} />

          <Route path="*" element={<ComingSoon /> } />

          {/* About Page */}
          <Route path="/about-us">
            <Route path="principle" element={<Principle />} />
            <Route path="governance" element={<Team />} />
            <Route path="advisory-council" element={<Team />} />
            <Route path="partners" element={<VisitOur />} />
          </Route>
          <Route path="/industries">
            <Route path="investment-resources" element={<Resources />} />

            <Route path="investors-highlight" element={<Lga />} />
          </Route>
          <Route path="/media">
            <Route path="news">
              <Route index element={<News />} />
              <Route path=":id" element={<SingleNews />} />
            </Route>
            {/* Gallery */}
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
