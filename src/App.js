import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  return (
    <Router basename="/Blogs">
      <div className="app">
        {/* HEADER */}
        <header className="header">
          <div className="header-container">
            <h1 className="logo">My Blogs App</h1>
            <nav className="nav">
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/" className="nav-item">
                About
              </Link>
              <Link to="/" className="nav-item">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="main">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} My Blogs App | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
