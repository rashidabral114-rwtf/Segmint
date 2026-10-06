import React, { useState } from "react";
import { Link } from "react-router-dom";
import { heroMetrics, heroCohorts } from "../../data/landingData";

export default function HeroSection() {
  const [retentionRange, setRetentionRange] = useState("30D");

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-space-md z-10">
            <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-semibold">
                Customer Intelligence, Simplified
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              Understand your customers. <br />
              <span className="text-primary-container">
                Discover your next opportunity.
              </span>
            </h1>

            <p className="font-subtitle text-subtitle text-on-surface-variant max-w-xl">
              Turn customer data into meaningful segments, uncover behavioral
              patterns, and make smarter business decisions — all from one
              intuitive workspace.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <Link
                className="inline-flex items-center justify-center gap-space-xs font-body-medium text-body-medium px-5 py-3 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all shadow-md hover:shadow-lg"
                data-path="pricing"
                to="/dashboard"
              >
                <span>Get started for free</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <a
                className="inline-flex items-center justify-center gap-space-xs font-body-medium text-body-medium px-5 py-3 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm"
                href="#product-showcase"
              >
                <span
                  className="material-symbols-outlined text-primary text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
                <span>Explore the platform</span>
              </a>
            </div>

            <div className="pt-space-md flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span
                className="material-symbols-outlined text-tertiary text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span>
                Built for teams that want clarity from their data. Over{" "}
                <strong className="text-on-surface font-semibold">
                  4.2M customer events
                </strong>{" "}
                analyzed weekly.
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Product Preview Studio */}
          <div className="lg:col-span-7 relative">
            {/* Background glow circle */}
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden relative border border-surface-container-high/60">
              {/* Studio Window Bar */}
              <div className="bg-surface-container-low px-4 py-2.5 flex items-center justify-between border-b border-surface-container">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-error/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-container/70"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-tertiary/70"></div>
                  <span className="ml-2 font-code-inline text-code-inline text-outline font-medium">
                    segmint-studio // production
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    live sync
                  </span>
                  <span className="font-code-inline text-code-inline text-outline">
                    v2.4.2
                  </span>
                </div>
              </div>

              {/* Dashboard Mini Header Metrics */}
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3 bg-surface-container-lowest">
                {heroMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-lg bg-surface-container-low/60 flex flex-col gap-1 border border-outline-variant/10"
                  >
                    <span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <div className="flex items-baseline justify-between">
                      <span className="font-metric-sm text-metric-sm text-on-surface">
                        {metric.value}
                      </span>
                      <span
                        className={`font-label-xs text-label-xs font-semibold ${metric.changeColor}`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dual Split Workspace */}
              <div className="p-4 pt-1 grid grid-cols-1 md:grid-cols-12 gap-3 bg-surface-container-lowest">
                {/* Left: Segment Cluster Overview */}
                <div className="md:col-span-6 p-4 rounded-xl bg-surface-container-low/40 flex flex-col gap-3 border border-outline-variant/10">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                      Identified Cohorts
                    </span>
                    <span className="font-label-xs text-label-xs text-outline">
                      Automated RFM
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {heroCohorts.map((cohort) => (
                      <div
                        key={cohort.name}
                        className="flex flex-col gap-1 bg-surface-container-lowest p-2 rounded-lg shadow-sm border border-outline-variant/10"
                      >
                        <div className="flex items-center justify-between text-label-sm font-label-sm">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${cohort.colorClass}`}
                            ></span>
                            <span className="font-medium text-on-surface text-xs">
                              {cohort.name}
                            </span>
                          </div>
                          <span className="font-mono text-outline text-xs">
                            {cohort.count}
                          </span>
                        </div>
                        <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`${cohort.colorClass} h-full rounded-full transition-all duration-500`}
                            style={{ width: `${cohort.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Live Customer Retention Curve */}
                <div className="md:col-span-6 p-4 rounded-xl bg-surface-container-low/40 flex flex-col gap-3 border border-outline-variant/10">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                      Cohort Retention Curve
                    </span>
                    <div className="flex bg-surface-container-high p-0.5 rounded-md text-label-xs font-label-xs">
                      {["30D", "90D", "1Y"].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setRetentionRange(range)}
                          className={`px-2 py-0.5 rounded transition-all ${
                            retentionRange === range
                              ? "bg-surface-container-lowest text-on-surface font-semibold shadow-xs"
                              : "text-outline hover:text-on-surface"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SVG Area Chart */}
                  <div className="relative w-full h-32 flex items-end">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 300 120"
                    >
                      <defs>
                        <linearGradient
                          id="heroCurveGradient"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#315EFB"
                            stopOpacity="0.3"
                          ></stop>
                          <stop
                            offset="100%"
                            stopColor="#315EFB"
                            stopOpacity="0.0"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,110 Q 50,85 100,70 T 200,45 T 300,15 L 300,120 L 0,120 Z"
                        fill="url(#heroCurveGradient)"
                      ></path>
                      <path
                        d="M 0,110 Q 50,85 100,70 T 200,45 T 300,15"
                        stroke="#315EFB"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      ></path>
                      {/* Highlight marker */}
                      <circle
                        className="animate-pulse"
                        cx="200"
                        cy="45"
                        fill="#315EFB"
                        r="4"
                      ></circle>
                    </svg>
                    <div className="absolute top-2 right-4 bg-surface-container-lowest px-2 py-1 rounded shadow text-label-xs font-mono text-primary font-semibold">
                      +24.8% LTV
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-label-xs font-label-xs text-outline">
                    <span>W1: 100%</span>
                    <span>W2: 88.4%</span>
                    <span>W3: 81.2%</span>
                    <span>W4: 78.5%</span>
                    <span className="text-tertiary font-semibold">W8: 74.2%</span>
                  </div>
                </div>
              </div>

              {/* Activity Stream Footer */}
              <div className="p-3.5 bg-surface-container-low/70 flex items-center justify-between text-label-xs font-label-xs border-t border-surface-container">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    bolt
                  </span>
                  <span className="text-on-surface-variant">
                    <strong className="text-on-surface">Event ingested:</strong>{" "}
                    User{" "}
                    <code className="font-code-inline text-on-surface px-1 bg-surface-container rounded">
                      #usr_892b
                    </code>{" "}
                    matched into <em>High-Value Advocates</em>
                  </span>
                </div>
                <span className="text-outline font-code-inline">
                  2 seconds ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
