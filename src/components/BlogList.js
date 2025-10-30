import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const results = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [search, blogs]);

  if (loading) return <p className="loading">Loading blogs...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="blog-list">
      <input
        type="text"
        placeholder="🔍 Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      {filteredBlogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <p>{blog.body.slice(0, 100)}...</p>
          <Link to={`/blog/${blog.id}`} className="read-more">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
