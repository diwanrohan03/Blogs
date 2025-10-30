import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router basename="/Blogs">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Blogs</h1>
            <nav>
              <Link
                to="/"
                className="hover:underline text-white font-medium"
              >
                Home
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>

        <footer className="bg-blue-600 text-white text-center p-3 mt-10">
          <p>© {new Date().getFullYear()} My Blogs | Built with React</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
