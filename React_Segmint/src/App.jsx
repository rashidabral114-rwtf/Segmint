import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import AppLayout from "./components/layout/AppLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import DashboardOverviewPage from "./pages/DashboardOverviewPage";
import CustomersPage from "./pages/CustomersPage";
import SegmentsPage from "./pages/SegmentsPage";
import SegmentExplorerPage from "./pages/SegmentExplorerPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import InsightsPage from "./pages/InsightsPage";
import ReportsPage from "./pages/ReportsPage";
import DataSourcesPage from "./pages/DataSourcesPage";
import SettingsPage from "./pages/SettingsPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard Shell Application Routes */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardOverviewPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/segments" element={<SegmentsPage />} />
          <Route path="/segment-explorer" element={<SegmentExplorerPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/datasources" element={<DataSourcesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Fallback Redirection */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
