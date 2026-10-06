import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import {
  dashboardMetrics,
  segmentDistributionData,
  highImpactSegments,
} from "../data/dashboardData";

export default function DashboardOverviewPage() {
  const [retentionRange, setRetentionRange] = useState("90D");
  const [distributionMode, setDistributionMode] = useState("Revenue");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredSegments = highImpactSegments.filter((seg) =>
    seg.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* Breadcrumb & Heading Strip */}
      <BreadcrumbStrip
        currentSection="Overview"
        title="Intelligence Dashboard"
        badgeText="12 Saved Segments • Auto-Sync Enabled"
        actions={
          <>
            <button
              type="button"
              className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-body-medium text-body-medium flex items-center gap-1.5 transition-colors shadow-xs text-xs"
            >
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                tune
              </span>
              <span>Filter View</span>
            </button>
            <button
              type="button"
              className="h-9 px-3 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm text-xs"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>New Segment</span>
            </button>
          </>
        }
      />

      {/* 1. Metric KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {dashboardMetrics.map((metric) => (
          <div
            key={metric.id}
            className="bg-surface-container-lowest rounded-xl p-space-md shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/10"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-xs text-label-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_drop_up
                  </span>
                  {metric.change}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-metric-lg text-metric-lg text-on-surface tracking-tight font-semibold">
                  {metric.value}
                </span>
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  {metric.comparison || metric.badge}
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 flex items-end justify-between border-t border-surface-container">
              <div className="flex flex-col">
                <span className="font-label-xs text-label-xs text-on-surface font-medium">
                  {metric.footnote}
                </span>
                <span className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">
                  {metric.subtext}
                </span>
              </div>

              {/* Sparkline Visuals */}
              {metric.type === "sparkline" && (
                <svg
                  className="w-20 h-7 overflow-visible text-primary"
                  fill="none"
                  viewBox="0 0 80 28"
                >
                  <path
                    d="M0 22 C 15 22, 18 17, 30 19 C 42 21, 48 8, 60 11 C 68 13, 72 4, 80 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M0 22 C 15 22, 18 17, 30 19 C 42 21, 48 8, 60 11 C 68 13, 72 4, 80 2 L 80 28 L 0 28 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  ></path>
                </svg>
              )}

              {metric.type === "progress" && (
                <div className="w-16 flex flex-col gap-1">
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${metric.percentage}%` }}
                    ></div>
                  </div>
                  <span className="font-label-xs text-label-xs text-right text-on-surface-variant">
                    {metric.percentage}%
                  </span>
                </div>
              )}

              {metric.type === "bars" && (
                <div className="flex items-end gap-1 h-6">
                  <span className="w-1.5 bg-primary/30 rounded-t h-2"></span>
                  <span className="w-1.5 bg-primary/40 rounded-t h-3"></span>
                  <span className="w-1.5 bg-primary/50 rounded-t h-3.5"></span>
                  <span className="w-1.5 bg-primary/60 rounded-t h-4"></span>
                  <span className="w-1.5 bg-primary/80 rounded-t h-5"></span>
                  <span className="w-1.5 bg-primary rounded-t h-6"></span>
                </div>
              )}

              {metric.type === "line" && (
                <svg
                  className="w-20 h-7 overflow-visible text-secondary"
                  fill="none"
                  viewBox="0 0 80 28"
                >
                  <path
                    d="M0 24 C 20 20, 30 18, 45 10 C 58 5, 68 8, 80 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Main Analytics Split (60% / 40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        {/* Left: Growth & Cohort Retention Velocity (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-xs flex flex-col justify-between border border-outline-variant/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Growth & Retention Velocity
                </h2>
                <span
                  className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer"
                  title="Calculated using real-time event pipeline"
                >
                  info
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Multi-cohort volume vs active churn trend
              </p>
            </div>

            {/* Range Switcher */}
            <div className="inline-flex p-0.5 rounded-lg bg-surface-container-low self-start sm:self-auto">
              {["30D", "90D", "1Y", "All"].map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setRetentionRange(range)}
                  className={`px-2.5 py-1 text-xs font-body-medium rounded-md transition-colors ${
                    retentionRange === range
                      ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Legend */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm py-2">
            <div className="flex items-center gap-4 text-xs font-label-sm">
              <span className="flex items-center gap-1.5 text-on-surface">
                <span className="w-3 h-1 bg-primary rounded-full"></span>
                Total Customers
              </span>
              <span className="flex items-center gap-1.5 text-on-surface">
                <span className="w-3 h-1 bg-secondary-container rounded-full"></span>
                Active Cohort
              </span>
              <span className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-3 h-1 bg-outline-variant rounded-full"></span>
                Churn Trend
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-xs text-label-xs font-semibold">
              <span className="material-symbols-outlined text-[14px]">
                local_fire_department
              </span>
              <span>Peak Acq. W28: +1,420 signups</span>
            </div>
          </div>

          {/* Area Chart SVG */}
          <div className="relative w-full h-64 mt-2">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 680 230"
            >
              <defs>
                <linearGradient id="totalGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#315efb" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#315efb" stopOpacity="0.0"></stop>
                </linearGradient>
                <linearGradient id="activeGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7896fe" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#7896fe" stopOpacity="0.0"></stop>
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[20, 65, 110, 155, 200].map((y) => (
                <line
                  key={y}
                  stroke="#f1f3ff"
                  strokeWidth="1.5"
                  x1="40"
                  x2="670"
                  y1={y}
                  y2={y}
                ></line>
              ))}

              {/* Y-Axis Labels */}
              <text
                className="fill-current text-on-surface-variant font-code-inline text-[10px]"
                textAnchor="end"
                x="32"
                y="24"
              >
                50k
              </text>
              <text
                className="fill-current text-on-surface-variant font-code-inline text-[10px]"
                textAnchor="end"
                x="32"
                y="69"
              >
                40k
              </text>
              <text
                className="fill-current text-on-surface-variant font-code-inline text-[10px]"
                textAnchor="end"
                x="32"
                y="114"
              >
                30k
              </text>
              <text
                className="fill-current text-on-surface-variant font-code-inline text-[10px]"
                textAnchor="end"
                x="32"
                y="159"
              >
                20k
              </text>
              <text
                className="fill-current text-on-surface-variant font-code-inline text-[10px]"
                textAnchor="end"
                x="32"
                y="204"
              >
                10k
              </text>

              {/* Chart Paths */}
              <path
                d="M 45 155 Q 120 148, 190 120 T 350 95 T 510 50 T 665 30 L 665 200 L 45 200 Z"
                fill="url(#totalGradient)"
              ></path>
              <path
                d="M 45 155 Q 120 148, 190 120 T 350 95 T 510 50 T 665 30"
                fill="none"
                stroke="#315efb"
                strokeLinecap="round"
                strokeWidth="2.5"
              ></path>
              <path
                d="M 45 178 Q 120 170, 190 150 T 350 135 T 510 98 T 665 80 L 665 200 L 45 200 Z"
                fill="url(#activeGradient)"
              ></path>
              <path
                d="M 45 178 Q 120 170, 190 150 T 350 135 T 510 98 T 665 80"
                fill="none"
                stroke="#7896fe"
                strokeLinecap="round"
                strokeWidth="2"
              ></path>

              {/* Event Marker */}
              <line
                opacity="0.4"
                stroke="#315efb"
                strokeDasharray="2 2"
                strokeWidth="1"
                x1="510"
                x2="510"
                y1="20"
                y2="200"
              ></line>
              <circle
                cx="510"
                cy="50"
                fill="#315efb"
                r="4.5"
                stroke="#ffffff"
                strokeWidth="2"
              ></circle>
            </svg>

            {/* X-Axis */}
            <div className="flex justify-between px-10 pt-1 font-label-xs text-label-xs text-on-surface-variant font-code-inline">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
                (m) => (
                  <span key={m}>{m}</span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right: Segment Distribution Donut (5 cols) */}
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-xs flex flex-col justify-between border border-outline-variant/10">
          <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Segment Distribution
              </h2>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Breakdown by current cohort footprint
              </p>
            </div>

            <div className="p-0.5 rounded-lg bg-surface-container-low flex text-xs">
              {["Revenue", "Accounts"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setDistributionMode(mode)}
                  className={`px-2 py-1 rounded-md transition-all ${
                    distributionMode === mode
                      ? "bg-surface-container-lowest text-primary shadow-xs font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Donut Chart SVG */}
          <div className="flex items-center justify-center my-3">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="48"
                  stroke="#f1f3ff"
                  strokeWidth="16"
                ></circle>
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="48"
                  stroke="#315efb"
                  strokeDasharray="102.5 301.59"
                  strokeDashoffset="0"
                  strokeWidth="16"
                ></circle>
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="48"
                  stroke="#7896fe"
                  strokeDasharray="81.4 301.59"
                  strokeDashoffset="-102.5"
                  strokeWidth="16"
                ></circle>
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="48"
                  stroke="#b6c4ff"
                  strokeDasharray="69.3 301.59"
                  strokeDashoffset="-183.9"
                  strokeWidth="16"
                ></circle>
                <circle
                  cx="60"
                  cy="60"
                  fill="none"
                  r="48"
                  stroke="#ffdad6"
                  strokeDasharray="48.2 301.59"
                  strokeDashoffset="-253.2"
                  strokeWidth="16"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                  $4.28M
                </span>
                <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                  Total Volume
                </span>
              </div>
            </div>
          </div>

          {/* Segment list items */}
          <div className="flex flex-col gap-2 pt-2">
            {segmentDistributionData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${item.colorClass} shrink-0`}
                  ></span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-body-medium text-body-medium text-on-surface truncate text-xs">
                      {item.name}
                    </span>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      {item.accounts}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <span className="font-body-medium text-body-medium text-on-surface text-xs font-semibold">
                    {item.revenue}
                  </span>
                  <span
                    className={`font-label-xs text-label-xs px-1.5 py-0.5 rounded ${item.badgeClass} font-semibold`}
                  >
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. High-Impact Customer Segments Table */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs flex flex-col gap-space-md border border-outline-variant/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs border-b border-surface-container">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              High-Impact Customer Segments
            </h2>
            <p className="font-subtitle text-subtitle text-on-surface-variant text-xs mt-0.5">
              Real-time performance across RFM clusters and behavioral cohorts.
            </p>
          </div>

          <div className="flex items-center gap-space-sm">
            <div className="relative w-48 sm:w-60">
              <span className="material-symbols-outlined text-[16px] absolute left-3 top-2.5 text-on-surface-variant">
                search
              </span>
              <input
                type="text"
                placeholder="Filter segments..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container transition-all"
              />
            </div>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs uppercase tracking-wider rounded-lg">
                <th className="py-2.5 px-3 rounded-l-lg">Segment Name</th>
                <th className="py-2.5 px-3">Customers</th>
                <th className="py-2.5 px-3">Revenue Contribution</th>
                <th className="py-2.5 px-3 text-right">Avg Order Value</th>
                <th className="py-2.5 px-3">Churn Risk</th>
                <th className="py-2.5 px-3">Last Sync</th>
                <th className="py-2.5 px-3 text-right rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {filteredSegments.map((seg) => (
                <tr
                  key={seg.id}
                  className="hover:bg-surface-container-low/70 transition-colors group"
                >
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${seg.indicatorColor}`}
                      ></span>
                      <span className="font-body-medium text-body-medium text-on-surface font-semibold">
                        {seg.name}
                      </span>
                      <span
                        className={`font-label-xs text-label-xs px-1.5 py-0.5 rounded ${seg.tagClass}`}
                      >
                        {seg.tag}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className="font-body-medium text-body-medium text-on-surface">
                      {seg.customers}
                    </span>
                    <span className="text-on-surface-variant text-[11px] ml-1">
                      ({seg.customerPct})
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <span className="font-body-medium text-body-medium text-on-surface font-semibold">
                        {seg.revenue}
                      </span>
                      <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div
                          className={`h-full ${seg.indicatorColor} rounded-full`}
                          style={{ width: `${seg.revenuePct}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-right font-code-inline text-on-surface font-medium">
                    {seg.avgOrderValue}
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      {seg.churnRisk}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-on-surface-variant font-code-inline text-[11px]">
                    {seg.lastSync}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-md text-primary bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-all font-body-medium text-xs font-semibold"
                    >
                      Inspect →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
