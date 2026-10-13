import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <h1 className="page-title">Our Services</h1>
      <p>Select a service from the menu below to view more details.</p>
      
      <div className="nested-layout">
        {/* Sub-navigation for nested routes */}
        <div className="sidebar">
          <NavLink to="web-development">Web Development</NavLink>
          <NavLink to="app-development">App Development</NavLink>
          <NavLink to="ui-ux-design">UI/UX Design</NavLink>
        </div>

        {/* The Outlet renders the nested child components */}
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;