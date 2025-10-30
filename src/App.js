import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  return (
    <Router basename="/Blogs">
      <div className="app-container">
        {/* Header Section */}
        <header className="app-header">
          <div className="nav-container">
            <h1 className="logo">My Blogs</h1>
            <nav className="navbar">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} My Blogs | All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
