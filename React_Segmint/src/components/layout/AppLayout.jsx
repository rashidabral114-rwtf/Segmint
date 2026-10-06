import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function AppLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="bg-surface font-body-base text-body-base text-on-surface antialiased min-h-screen flex flex-col">
      {/* Sidebar with responsive mobile drawer support */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content Area offset by sidebar width on desktop */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <DashboardHeader
          onToggleMobileSidebar={() =>
            setMobileSidebarOpen(!mobileSidebarOpen)
          }
        />

        <main className="relative pt-14 w-full px-space-lg py-space-lg flex-1 bg-surface">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
