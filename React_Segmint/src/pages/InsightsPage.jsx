import React from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import { automatedInsights } from "../data/otherPagesData";

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Insights"
        title="Automated Behavioral Intelligence"
        badgeText="Real-time ML Watchdog"
        actions={
          <button
            type="button"
            className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-body-medium text-body-medium flex items-center gap-1.5 transition-colors text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">sync</span>
            <span>Refresh Telemetry</span>
          </button>
        }
      />

      {/* Insights Stream */}
      <div className="flex flex-col gap-4">
        {automatedInsights.map((insight) => (
          <div
            key={insight.id}
            className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[24px]">
                  {insight.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-label-xs text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full ${insight.badgeColor}`}
                  >
                    {insight.type}
                  </span>
                  <span className="font-label-xs text-outline text-[11px]">
                    Identified 2h ago
                  </span>
                </div>
                <h3 className="font-headline-md text-base font-semibold text-on-surface mt-1">
                  {insight.title}
                </h3>
                <p className="font-body-base text-xs text-on-surface-variant mt-0.5 max-w-2xl">
                  {insight.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
              <span className="font-label-sm text-xs font-semibold text-on-surface bg-surface-container-low px-3 py-1.5 rounded-lg border border-outline-variant/20 whitespace-nowrap">
                {insight.impact}
              </span>
              <button
                type="button"
                onClick={() =>
                  alert(`Activated recommended playbook for "${insight.title}"`)
                }
                className="px-3.5 py-2 rounded-lg bg-primary-container text-on-primary text-xs font-semibold hover:bg-primary transition-colors shadow-sm whitespace-nowrap"
              >
                Apply Playbook
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
