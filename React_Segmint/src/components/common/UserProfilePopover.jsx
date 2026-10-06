import React, { useState } from "react";

export default function UserProfilePopover({ isOpen, onClose }) {
  const [isPublic, setIsPublic] = useState(true);

  if (!isOpen) return null;

  return (
    <div
      id="userProfilePopover"
      className="absolute left-64 bottom-4 ml-3 w-80 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-2xl p-5 z-50 animate-in fade-in zoom-in-95 duration-150"
    >
      {/* Popover Header */}
      <div className="flex items-start justify-between pb-3.5 border-b border-outline-variant/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-md font-semibold text-sm shadow-sm">
              ES
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-headline-md text-sm font-semibold text-on-surface truncate">
              Elena Scott
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant leading-tight truncate">
              elena@acme.io
            </span>
            <div className="mt-1 flex items-center gap-1 flex-wrap">
              <span className="font-label-xs text-[10px] bg-primary/10 text-primary font-medium px-1.5 py-0.5 rounded">
                Principal Architect
              </span>
              <span className="font-label-xs text-[10px] text-on-surface-variant">
                • Jan 2024
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-outline hover:text-on-surface p-1 rounded-md hover:bg-surface-container transition-colors"
          title="Close profile"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      {/* Privacy Toggle */}
      <div className="py-3 border-b border-outline-variant/20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-label-xs text-label-xs font-semibold text-on-surface">
            Profile Visibility
          </span>
          <span className="font-label-xs text-[11px] text-on-surface-variant">
            {isPublic
              ? "Visible to workspace team (Public)"
              : "Only visible to admins (Private)"}
          </span>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={isPublic}
          onClick={() => setIsPublic(!isPublic)}
          className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
            isPublic ? "bg-primary" : "bg-outline-variant"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              isPublic ? "translate-x-4" : "translate-x-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Contributions Overview */}
      <div className="py-3.5 border-b border-outline-variant/20">
        <div className="flex items-center justify-between mb-2">
          <span className="font-label-xs text-label-xs uppercase font-semibold tracking-wider text-on-surface-variant">
            Contributions Overview
          </span>
          <span className="font-code-inline text-[10px] text-tertiary font-semibold">
            +18.4% MoM
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-surface-container-low p-2 rounded-lg border border-outline-variant/20">
            <span className="font-headline-md text-sm font-semibold text-on-surface block">
              14
            </span>
            <div className="flex items-center gap-1">
              <span className="font-label-xs text-[11px] text-on-surface-variant">
                Segments
              </span>
              <span className="text-[10px] text-primary font-semibold">
                +3 mo
              </span>
            </div>
          </div>
          <div className="bg-surface-container-low p-2 rounded-lg border border-outline-variant/20">
            <span className="font-headline-md text-sm font-semibold text-on-surface block">
              182.4k
            </span>
            <span className="font-label-xs text-[11px] text-on-surface-variant block">
              Clustered Records
            </span>
          </div>
          <div className="bg-surface-container-low p-2 rounded-lg border border-outline-variant/20">
            <span className="font-headline-md text-sm font-semibold text-on-surface block">
              99.4%
            </span>
            <span className="font-label-xs text-[11px] text-on-surface-variant block">
              Ingest Accuracy
            </span>
          </div>
          <div className="bg-surface-container-low p-2 rounded-lg border border-outline-variant/20">
            <span className="font-headline-md text-sm font-semibold text-on-surface block">
              28
            </span>
            <span className="font-label-xs text-[11px] text-on-surface-variant block">
              Rules Deployed
            </span>
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="pt-3 flex flex-col gap-1">
        <a
          href="#preferences"
          className="flex items-center justify-between px-2 py-1.5 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-xs font-body-base"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
              tune
            </span>
            Account Preferences
          </span>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>
        </a>
        <a
          href="#api-keys"
          className="flex items-center justify-between px-2 py-1.5 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-xs font-body-base"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
              key
            </span>
            API Keys
          </span>
          <span className="material-symbols-outlined text-[14px] text-outline-variant">
            chevron_right
          </span>
        </a>
        <a
          href="#signout"
          className="flex items-center justify-between px-2 py-1.5 rounded-lg text-error hover:bg-error-container/20 transition-colors text-xs font-body-base"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">logout</span>
            Sign Out
          </span>
        </a>
      </div>
    </div>
  );
}
