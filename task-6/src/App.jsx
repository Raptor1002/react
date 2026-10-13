import React, { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  // --- useState hooks ---
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // --- useRef hook ---
  const fileInputRef = useRef(null);

  // --- useEffect for API Integration ---
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch user data.");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // --- Event Handlers for Image Upload ---
  const handleUploadClick = () => {
    // Programmatically click the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      // Generate a temporary URL for the selected image to display as a preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>React Hooks</h1>
       
      </header>

      {/* --- useRef Implementation: Image Upload Section --- */}
      <section className="upload-section">
        <h2>Profile Image Upload</h2>
        <div className="upload-card">
          {imagePreview ? (
            <div className="image-preview-container">
              <img src={imagePreview} alt="Selected Preview" className="image-preview" />
            </div>
          ) : (
            <div className="placeholder-box">No image selected</div>
          )}

          {/* Hidden File Input */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }} 
          />

          {/* Custom Upload Button */}
          <button className="upload-btn" onClick={handleUploadClick}>
            {imagePreview ? "Change Image" : "Upload Image"}
          </button>
        </div>
      </section>

      {/* --- useEffect Implementation: API Data Display --- */}
      <section className="api-section">
        <h2>User Directory</h2>
        
        {/* Loading State */}
        {loading && <div className="loading-message">Fetching users... Please wait.</div>}
        
        {/* Error State */}
        {error && <div className="error-message">Error: {error}</div>}
        
        {/* Data Display */}
        {!loading && !error && (
          <div className="user-grid">
            {users.map((user) => (
              <div key={user.id} className="user-card">
                <div className="card-header">
                  <h3>{user.name}</h3>
                  <span className="badge">ID: {user.id}</span>
                </div>
                <div className="card-body">
                  <p><strong>Username:</strong> @{user.username}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone}</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                      {user.website}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}