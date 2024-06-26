import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailsFilling from "./Pages/DetailsFilling";
import CheckSelectedId from "./Components/CheckSelectedId";
import AboutUs from "./Pages/AboutUs";
import MyResumes from "./Pages/MyResumes";
import Terms from "./Pages/Terms";
import Notfound from "./Components/Notfound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/template/fill-details"
          element={
            <CheckSelectedId>
              <DetailsFilling />
            </CheckSelectedId>
          }
        />
        <Route exact path="/my/resumes" element={<MyResumes />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/terms" element={<Terms/>} />
        {/* If someone attempts to navigate to a page that does not exist, they will be redirected to a 404 page. */}
        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
};

export default App;
