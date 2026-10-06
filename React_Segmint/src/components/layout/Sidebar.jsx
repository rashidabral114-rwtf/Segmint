import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserProfilePopover from "../common/UserProfilePopover";

export const sidebarNavItems = [
  { path: "/dashboard", label: "Overview", icon: "dashboard" },
  { path: "/customers", label: "Customers", icon: "group" },
  { path: "/segments", label: "Segments", icon: "pie_chart" },
  { path: "/segment-explorer", label: "Segment Explorer", icon: "explore" },
  { path: "/analytics", label: "Analytics", icon: "monitoring" },
  { path: "/insights", label: "Insights", icon: "auto_awesome" },
  { path: "/reports", label: "Reports", icon: "description" },
  { path: "/datasources", label: "Data Sources", icon: "database" },
  { path: "/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar({ mobileOpen, onCloseMobile }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-on-background/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        ></div>
      )}

      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-surface-container-lowest border-r border-outline-variant/30 z-50 flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo Header */}
          <div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant/20">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Brand logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vi0D6vgD5sMZRM5pcWfm9TPtEYxFjbIW1f293AJ5MFzUBFiVrN4O6njpLOxwxZHrIk5BZ9X5QPM5dbByBV3VqUme9UMMtEP2tXW8tSYQt9D3d0m6R3c9VTi9fvEQNAZObtzmj4z56k5MI7LTD39BJR8xNKzFD42hiN3ZWbB2CNawsSNXfH-0GSYiiuWd2pP8x2aaPnHLi90U9LElP3W_gXz_J9FyXlR1RMvG3Z2HHWGZy59CfrAt9i9A"
              />
              <span className="font-headline-md text-headline-md tracking-tight text-on-surface">
                Segmint
              </span>
              <span className="px-space-xs py-0.5 rounded-full bg-surface-container-high text-primary font-label-xs text-label-xs">
                v2.4
              </span>
            </div>

            {/* Mobile close button */}
            <button
              type="button"
              className="lg:hidden p-1 text-on-surface-variant hover:text-on-surface"
              onClick={onCloseMobile}
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Workspace Switcher */}
          <div className="px-space-sm py-space-sm">
            <button
              type="button"
              className="w-full flex items-center justify-between px-space-sm py-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container transition-colors text-left"
            >
              <div className="flex items-center gap-space-xs truncate">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-body-medium text-body-medium text-on-surface truncate">
                  Acme Corp
                </span>
                <span className="text-on-surface-variant font-label-xs text-label-xs">
                  / Prod
                </span>
              </div>
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                unfold_more
              </span>
            </button>
          </div>

          {/* Workspace Navigation Links */}
          <div className="px-space-sm py-space-xs flex-1 overflow-y-auto">
            <div className="px-space-xs pb-1 font-label-xs text-label-xs uppercase text-on-surface-variant tracking-wider">
              Workspace
            </div>
            <nav className="flex flex-col gap-0.5">
              {sidebarNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    `flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-colors font-body-base text-body-base ${
                      isActive
                        ? "bg-surface-container text-primary font-body-medium shadow-xs"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Help & User Profile Card */}
        <div className="p-space-sm border-t border-outline-variant/20 flex flex-col gap-space-xs relative">
          <NavLink
            to="/help"
            onClick={onCloseMobile}
            className={({ isActive }) =>
              `flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-colors font-body-base text-body-base ${
                isActive
                  ? "bg-surface-container text-primary font-body-medium shadow-xs"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`
            }
          >
            <span className="material-symbols-outlined text-[18px]">
              help_center
            </span>
            <span>Help Center</span>
          </NavLink>

          {/* User Profile Trigger Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-full flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-low transition-colors text-left"
            >
              <div className="flex items-center gap-space-sm min-w-0">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-body-medium text-body-medium text-xs font-semibold shrink-0">
                  ES
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-body-medium text-body-medium text-on-surface leading-tight truncate text-xs">
                    Elena Scott
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant leading-tight truncate">
                    elena@acme.io
                  </span>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            </button>

            {/* Profile Popover Overlay */}
            <UserProfilePopover
              isOpen={profileOpen}
              onClose={() => setProfileOpen(false)}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
