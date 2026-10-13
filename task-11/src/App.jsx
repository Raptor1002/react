import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UsersPagination from "./assets/components/UsersPagination";
import "./App.css"; // Import the CSS styles below

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect base URL to the paginated route starting at page 1 */}
        <Route path="/" element={<Navigate to="/users?page=1" replace />} />
        <Route path="/users" element={<UsersPagination />} />
      </Routes>
    </BrowserRouter>
  );
}