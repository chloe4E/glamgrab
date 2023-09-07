import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/index";
import LoginPage2 from "./Pages/LoginPage/index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage2 />} />
      </Routes>
    </Router>
  );
};

export default App;
