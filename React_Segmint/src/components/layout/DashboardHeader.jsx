import React, { useState } from "react";

export default function DashboardHeader({ onToggleMobileSidebar, actionLabel = "Export Data", onActionClick }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-14 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30 z-40 px-space-lg flex items-center justify-between">
      {/* Left Workspace Indicator & Mobile Menu Toggle */}
      <div className="flex items-center gap-space-sm">
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-1.5 text-on-surface-variant hover:text-on-surface rounded-lg hover:bg-surface-container transition-colors"
          aria-label="Toggle navigation drawer"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
          <span className="text-on-surface font-body-medium text-body-medium hidden sm:inline">
            Workspace:
          </span>
          <span>Production</span>
          <span className="text-outline-variant">/</span>
          <span>US-East</span>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-xs text-label-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          Live Sync Active (2m ago)
        </span>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-space-sm">
        {/* Date Filter */}
        <button
          type="button"
          className="h-9 px-space-sm rounded-lg border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-body-medium text-body-medium hidden md:flex items-center gap-space-xs text-xs"
        >
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
            calendar_today
          </span>
          <span>Last 30 Days</span>
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
            expand_more
          </span>
        </button>

        {/* Search Command Palette Trigger */}
        <button
          type="button"
          className="h-9 px-space-sm rounded-lg border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[16px]">search</span>
          <span className="hidden sm:inline">Search...</span>
          <span className="font-code-inline text-code-inline text-[11px] bg-surface-container-lowest px-1 py-0.5 rounded border border-outline-variant/30">
            ⌘K
          </span>
        </button>

        {/* Notifications Bell */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="relative w-9 h-9 rounded-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              notifications
            </span>
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary"></span>
          </button>

          {/* Quick Notification Dropdown */}
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-xl p-3 z-50 animate-in fade-in zoom-in-95">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 text-xs font-semibold text-on-surface">
                <span>Recent Notifications</span>
                <span className="text-primary cursor-pointer hover:underline">
                  Mark all read
                </span>
              </div>
              <div className="py-2 flex flex-col gap-2 text-xs text-on-surface-variant">
                <div className="p-2 rounded-lg bg-surface-container-low flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                    sync
                  </span>
                  <div>
                    <span className="text-on-surface font-medium block">
                      Snowflake ingest completed
                    </span>
                    <span className="text-[10px] text-outline">
                      12,400 events synced 4m ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={onActionClick}
          className="h-9 px-space-md rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1 text-xs shadow-sm"
        >
          <span className="material-symbols-outlined text-[16px]">
            ios_share
          </span>
          <span>{actionLabel}</span>
        </button>

        {/* User Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1 cursor-pointer">
          <span className="material-symbols-outlined text-on-primary text-[18px]">
            person
          </span>
        </div>
      </div>
    </header>
  );
}
