import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router basename="/Blogs">
      <nav style={{ padding: "10px", background: "#f3f3f3" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
