import React from "react";
import { useSearchParams } from "react-router-dom";

// 1. Create Object Data (20 objects, 5 keys each)
const USERS_DATA = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  age: 20 + (index % 15), 
  city: ["New York", "London", "Tokyo", "Berlin", "Sydney"][index % 5],
}));

const ITEMS_PER_PAGE = 5;

export default function UsersPagination() {
  // 2. Implement useSearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read the current page from the URL. Fallback to 1 if it doesn't exist.
  const pageParam = searchParams.get("page");
  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

  // Calculate pagination details
  const totalPages = Math.ceil(USERS_DATA.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRecords = USERS_DATA.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // 3. Navigation Handlers
  const handlePrev = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  // Prevent rendering if the user manually types a page number out of bounds
  if (currentPage < 1 || currentPage > totalPages) {
    return (
      <div className="error-state">
        <h2>Page not found</h2>
        <button onClick={() => setSearchParams({ page: 1 })}>Go to Page 1</button>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h2>User Details</h2>
        <p>Showing page {currentPage} of {totalPages}</p>
      </header>

      {/* Responsive Grid for Cards */}
      <div className="card-grid">
        {currentRecords.map((user) => (
          <div key={user.id} className="card">
            <div className="card-header">
              <span className="badge">ID: {user.id}</span>
              <h3>{user.name}</h3>
            </div>
            <div className="card-body">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>City:</strong> {user.city}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button 
          onClick={handlePrev} 
          disabled={currentPage === 1}
          className={currentPage === 1 ? "disabled" : ""}
        >
          Previous
        </button>
        
        <span className="page-indicator">
          Page {currentPage}
        </span>
        
        <button 
          onClick={handleNext} 
          disabled={currentPage === totalPages}
          className={currentPage === totalPages ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </div>
  );
}