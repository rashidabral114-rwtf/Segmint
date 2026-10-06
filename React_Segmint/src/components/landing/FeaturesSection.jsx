import React from "react";

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-surface" id="features">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-semibold mb-2">
            Capabilities
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Everything you need to understand your customers.
          </h2>
          <p className="font-subtitle text-subtitle text-on-surface-variant mt-3">
            Built with the precision of developer tools and the accessibility of
            modern product analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg">
          {/* Feature 1: Intelligent Segmentation */}
          <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-surface-container-high/40">
            <div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[24px]">
                  filter_alt
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Intelligent Segmentation
              </h3>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-2">
                Group customers based on purchasing behavior, engagement,
                demographics, and custom behavioral event triggers without
                writing complicated SQL.
              </p>
            </div>

            {/* Mini Filter Rule Mockup */}
            <div className="mt-6 p-4 rounded-lg bg-surface-container-low flex flex-col gap-2 font-code-inline text-code-inline border border-outline-variant/10">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-bold">
                  MATCH ALL
                </span>
                <span>of the following conditions:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 bg-surface-container-lowest p-2 rounded shadow-xs text-on-surface">
                <span className="px-2 py-0.5 rounded bg-primary-fixed/20 text-primary font-semibold">
                  Total Spend
                </span>
                <span className="text-outline">&gt;</span>
                <span className="font-semibold">$500.00</span>
                <span className="text-outline">in</span>
                <span className="font-semibold">Last 90 Days</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 bg-surface-container-lowest p-2 rounded shadow-xs text-on-surface">
                <span className="px-2 py-0.5 rounded bg-primary-fixed/20 text-primary font-semibold">
                  Completed Orders
                </span>
                <span className="text-outline">&gt;=</span>
                <span className="font-semibold">3 purchases</span>
              </div>
              <div className="text-tertiary text-label-xs font-label-xs font-semibold flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-[14px]">
                  check_circle
                </span>
                14,812 customers match this definition
              </div>
            </div>
          </div>

          {/* Feature 2: Interactive Analytics */}
          <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-surface-container-high/40">
            <div>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-[24px]">
                  insights
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Interactive Analytics
              </h3>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-2">
                Explore customer trends, revenue contribution, retention, and
                segment distribution through understandable, responsive
                visualizations.
              </p>
            </div>

            {/* Mini Chart Bars Mockup */}
            <div className="mt-6 p-4 rounded-lg bg-surface-container-low flex flex-col gap-3 border border-outline-variant/10">
              <div className="flex items-center justify-between text-label-xs font-label-xs">
                <span className="text-on-surface-variant font-medium">
                  Revenue Contribution by Cohort
                </span>
                <span className="font-mono text-outline">Q3 Distribution</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="flex justify-between text-label-xs mb-1">
                    <span className="text-on-surface">Enterprise Tier</span>
                    <span className="font-mono font-semibold text-primary">
                      58.4%
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "58.4%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-label-xs mb-1">
                    <span className="text-on-surface">Growth Plan</span>
                    <span className="font-mono font-semibold text-secondary">
                      28.2%
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-secondary-container h-full rounded-full"
                      style={{ width: "28.2%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-label-xs mb-1">
                    <span className="text-on-surface">Starter</span>
                    <span className="font-mono font-semibold text-tertiary">
                      13.4%
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-tertiary h-full rounded-full"
                      style={{ width: "13.4%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Automated Insights */}
          <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-surface-container-high/40">
            <div>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-4">
                <span className="material-symbols-outlined text-[24px]">
                  auto_awesome
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Automated Insights
              </h3>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-2">
                Discover non-obvious patterns, compare customer groups
                side-by-side, and identify opportunities using automated
                data-backed suggestions.
              </p>
            </div>

            {/* Sample Insight Pill Box */}
            <div className="mt-6 flex flex-col gap-2.5">
              <div className="p-3.5 rounded-lg bg-tertiary/5 flex items-start gap-3 border border-tertiary/20">
                <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                  lightbulb
                </span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-semibold text-tertiary">
                    High-Impact Discovery
                  </span>
                  <span className="font-body-medium text-body-medium text-on-surface mt-0.5">
                    Returning customers generate{" "}
                    <strong>64% of Q3 revenue</strong> despite accounting for
                    only 22% of total traffic.
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-label-xs font-label-xs text-on-surface-variant border border-outline-variant/10">
                <span>
                  Recommended Playbook: <em>VIP Loyalty Trigger</em>
                </span>
                <a
                  href="#product-showcase"
                  className="text-primary font-semibold flex items-center gap-0.5 hover:underline"
                >
                  Run test
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Feature 4: Actionable Integrations & Exports */}
          <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow border border-surface-container-high/40">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface-variant mb-4">
                <span className="material-symbols-outlined text-[24px]">
                  sync_alt
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Actionable Integrations & Exports
              </h3>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-2">
                Export customer cohorts and reports in convenient formats for
                real-time activation in marketing automation, ad platforms, and
                operational warehouses.
              </p>
            </div>

            {/* Export Formats Pills */}
            <div className="mt-6 p-4 rounded-lg bg-surface-container-low flex flex-col gap-3 border border-outline-variant/10">
              <span className="font-label-xs text-label-xs text-outline uppercase tracking-wider">
                Sync destination formats
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest shadow-xs text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1.5 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    database
                  </span>
                  PostgreSQL
                </span>
                <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest shadow-xs text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1.5 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    cloud_sync
                  </span>
                  Snowflake
                </span>
                <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest shadow-xs text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1.5 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    webhook
                  </span>
                  Webhooks
                </span>
                <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest shadow-xs text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1.5 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[16px] text-outline">
                    description
                  </span>
                  CSV / Parquet
                </span>
                <span className="px-3 py-1.5 rounded-md bg-surface-container-lowest shadow-xs text-label-sm font-label-sm text-on-surface font-semibold flex items-center gap-1.5 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    hub
                  </span>
                  Segment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
