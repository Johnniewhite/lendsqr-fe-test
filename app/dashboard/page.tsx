"use client"
import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/SideBar/page';

const DashboardPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
    </div>
  );
}

export default DashboardPage;
