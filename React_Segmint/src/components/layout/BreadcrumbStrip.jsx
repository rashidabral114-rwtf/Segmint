import React from "react";

export default function BreadcrumbStrip({
  currentSection,
  title,
  subtitle,
  badgeText,
  actions,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
      <div className="flex flex-col gap-1">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
          <span>Workspaces</span>
          <span className="text-outline-variant">/</span>
          <span>Acme Corp</span>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface font-body-medium text-body-medium">
            {currentSection}
          </span>
        </div>

        {/* Title & Badge */}
        <div className="flex flex-wrap items-center gap-space-sm mt-0.5">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            {title}
          </h1>
          {badgeText && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-tertiary font-label-xs text-label-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              {badgeText}
            </span>
          )}
        </div>

        {subtitle && (
          <p className="font-subtitle text-subtitle text-on-surface-variant text-xs mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Header Utilities / Actions */}
      {actions && (
        <div className="flex flex-wrap items-center gap-space-sm">
          {actions}
        </div>
      )}
    </div>
  );
}
