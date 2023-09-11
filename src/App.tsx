import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/index";
import LoginPage from "./Pages/LoginPage";
import BagReviewPage from "./Pages/BagReviewPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/bagReview" element={<BagReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
