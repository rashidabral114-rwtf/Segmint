import React from "react";
import {
  globalCohortMatrix,
  previewInsightCards,
} from "../../data/landingData";

export default function ShowcaseSection() {
  return (
    <section className="w-full py-20 bg-surface" id="product-showcase">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-semibold mb-2">
            The Interface
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            From raw data to real understanding.
          </h2>
          <p className="font-subtitle text-subtitle text-on-surface-variant mt-2">
            A unified view that brings marketing, product, and data engineering
            teams onto the same page.
          </p>
        </div>

        {/* Unified Deep Dive Dashboard Mockup */}
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl p-6 md:p-8 flex flex-col gap-6 border border-surface-container-high/60">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-surface-container">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">
                  dataset
                </span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface leading-none">
                  Global Cohort Matrix
                </h4>
                <span className="font-label-xs text-label-xs text-outline">
                  Dataset: All Platform Accounts • Realtime
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface text-body-medium font-body-medium hover:bg-surface-container-highest transition-colors flex items-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  tune
                </span>
                Filter
              </button>
              <button
                className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-body-medium font-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  download
                </span>
                Export Segment
              </button>
            </div>
          </div>

          {/* Segment Distribution Breakdown Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-body-medium text-body-medium">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant text-label-xs font-label-xs uppercase tracking-wider">
                  <th className="py-3 px-4 rounded-l-lg">Segment Name</th>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Avg LTV</th>
                  <th className="py-3 px-4">Churn Risk</th>
                  <th className="py-3 px-4">Engagement</th>
                  <th className="py-3 px-4 rounded-r-lg text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {globalCohortMatrix.map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-surface-container-low/40 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-semibold text-on-surface flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${row.colorClass}`}
                      ></span>
                      {row.name}
                    </td>
                    <td className="py-3.5 px-4 font-mono">{row.size}</td>
                    <td className="py-3.5 px-4 font-mono font-semibold">
                      {row.avgLtv}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded-full text-label-xs font-semibold ${row.churnBadgeClass}`}
                      >
                        {row.churnRisk}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="w-24 bg-surface-container-high h-2 rounded-full overflow-hidden">
                        <div
                          className={`${row.colorClass} h-full rounded-full`}
                          style={{ width: `${row.engagementPercent}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="text-primary hover:underline cursor-pointer text-label-xs font-semibold">
                        Inspect →
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3 Insight Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {previewInsightCards.map((card) => (
              <div
                key={card.title}
                className="p-4 rounded-lg bg-surface-container-low/40 flex flex-col gap-1 border border-outline-variant/10"
              >
                <span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">
                  {card.tag}
                </span>
                <span className="font-body-medium text-body-medium font-semibold text-on-surface">
                  {card.title}
                </span>
                <p className="font-body-base text-body-base text-on-surface-variant mt-1">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
