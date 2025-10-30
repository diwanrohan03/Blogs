import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const [postRes, commentsRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`),
        ]);

        if (!postRes.ok || !commentsRes.ok)
          throw new Error("Failed to fetch post details");

        const postData = await postRes.json();
        const commentsData = await commentsRes.json();

        setBlog(postData);
        setComments(commentsData);

        // Fetch author info
        const userRes = await fetch(
          `https://jsonplaceholder.typicode.com/users/${postData.userId}`
        );
        const userData = await userRes.json();
        setAuthor(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <p className="loading">Loading blog...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="blog-details">
      <Link to="/" className="back-btn">← Back</Link>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>

      {author && (
        <div className="author">
          <h3>Author Information</h3>
          <p><strong>Name:</strong> {author.name}</p>
          <p><strong>Email:</strong> {author.email}</p>
          <p><strong>Company:</strong> {author.company?.name}</p>
        </div>
      )}

      <div className="comments">
        <h3>Comments</h3>
        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <p><strong>{c.name}</strong> ({c.email})</p>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
