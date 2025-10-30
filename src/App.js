import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>📰 My Blog App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
