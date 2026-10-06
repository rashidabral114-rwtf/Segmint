import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import {
  analyticsFunnel,
  retentionCohortMatrix,
} from "../data/otherPagesData";

export default function AnalyticsPage() {
  const [granularity, setGranularity] = useState("weekly");

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Analytics"
        title="Cohort Retention & Funnel Analytics"
        badgeText="Granular Multi-Touch Attribution"
        actions={
          <div className="flex bg-surface-container-low p-0.5 rounded-lg border border-outline-variant/20">
            <button
              id="btn-weekly"
              type="button"
              onClick={() => setGranularity("weekly")}
              className={`px-3 py-1 text-xs font-body-medium rounded transition-all ${
                granularity === "weekly"
                  ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Weekly Cadence
            </button>
            <button
              id="btn-monthly"
              type="button"
              onClick={() => setGranularity("monthly")}
              className={`px-3 py-1 text-xs font-body-medium rounded transition-all ${
                granularity === "monthly"
                  ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Monthly Cadence
            </button>
          </div>
        }
      />

      {/* Funnel Qualification Breakdown */}
      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
        <h3 className="font-headline-md text-base font-semibold text-on-surface mb-4">
          Pipeline Qualification & Activation Funnel
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsFunnel.map((item, idx) => (
            <div
              key={item.stage}
              className="p-4 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 relative"
            >
              <div className="flex items-center justify-between text-xs text-outline mb-1">
                <span>Stage 0{idx + 1}</span>
                <span className="font-mono font-semibold text-primary">
                  {item.percentage}
                </span>
              </div>
              <span className="font-headline-md text-xl font-bold text-on-surface block">
                {item.count}
              </span>
              <span className="font-body-base text-xs text-on-surface-variant mt-1 block">
                {item.stage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cohort Retention Matrix */}
      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
        <div className="flex items-center justify-between pb-3 border-b border-surface-container">
          <div>
            <h3 className="font-headline-md text-base font-semibold text-on-surface">
              Multi-Month Retention Cohort Matrix
            </h3>
            <p className="font-body-base text-xs text-on-surface-variant mt-0.5">
              Viewing active rate percentage indexed to Month 0 baseline.
            </p>
          </div>
          <span className="text-xs text-outline font-mono">
            Mode: {granularity.toUpperCase()}
          </span>
        </div>

        <div className="w-full overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs uppercase tracking-wider">
                <th className="p-3">Cohort</th>
                <th className="p-3">Volume</th>
                <th className="p-3">Month 0</th>
                <th className="p-3">Month 1</th>
                <th className="p-3">Month 2</th>
                <th className="p-3">Month 3</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {retentionCohortMatrix.map((row) => (
                <tr key={row.cohort} className="hover:bg-surface-container-low/40">
                  <td className="p-3 font-semibold text-on-surface">{row.cohort}</td>
                  <td className="p-3 font-mono text-on-surface-variant">{row.size}</td>
                  <td className="p-3 font-mono text-tertiary font-semibold">{row.m0}</td>
                  <td className="p-3 font-mono text-on-surface">{row.m1}</td>
                  <td className="p-3 font-mono text-on-surface">{row.m2}</td>
                  <td className="p-3 font-mono text-on-surface">{row.m3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
