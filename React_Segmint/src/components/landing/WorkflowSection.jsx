import React from "react";

export default function WorkflowSection() {
  return (
    <section className="w-full py-20 bg-surface-container-lowest" id="how-it-works">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-semibold mb-2">
            Workflow
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            From raw data to actionable cohorts in minutes
          </h2>
          <p className="font-subtitle text-subtitle text-on-surface-variant mt-2">
            Connect your stack once and explore continuously without waiting on
            data team backlog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
          {/* Step 1 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-low/50 border border-outline-variant/10">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center font-mono text-body-medium">
                1
              </span>
              <span className="font-label-xs text-label-xs text-outline">
                Connect
              </span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Import your data
              </h4>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-1">
                Upload a standard CSV or connect directly to PostgreSQL,
                Stripe, or BigQuery with read-only credentials.
              </p>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-surface-container-lowest shadow-xs flex flex-col items-center text-center gap-2 border border-outline-variant/10">
              <span className="material-symbols-outlined text-[32px] text-primary">
                upload_file
              </span>
              <span className="font-label-sm text-label-sm font-medium text-on-surface">
                Drag & drop customer_events.csv
              </span>
              <span className="font-code-inline text-code-inline text-outline">
                Auto-detecting 14 schema attributes...
              </span>
              <div className="w-full bg-surface-container-high h-1 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-low/50 border border-outline-variant/10">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center font-mono text-body-medium">
                2
              </span>
              <span className="font-label-xs text-label-xs text-outline">
                Analyze
              </span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Discover your segments
              </h4>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-1">
                Select visual segmentation criteria or run unsupervised ML
                clustering (RFM, K-Means) in a single click.
              </p>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-surface-container-lowest shadow-xs flex flex-col gap-2 border border-outline-variant/10">
              <div className="flex items-center justify-between text-label-xs font-semibold text-on-surface">
                <span>Recency / Frequency / Monetary</span>
                <span className="text-tertiary">Active</span>
              </div>
              <div className="flex items-center gap-2 text-label-xs">
                <span className="px-2 py-0.5 bg-surface-container-high rounded text-on-surface">
                  Recency: &lt; 14d
                </span>
                <span className="px-2 py-0.5 bg-surface-container-high rounded text-on-surface">
                  Freq: 5+
                </span>
              </div>
              <div className="flex items-center gap-2 text-label-xs text-outline">
                <span className="material-symbols-outlined text-[14px]">
                  psychology
                </span>
                4 distinct clusters identified
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-4 p-6 rounded-xl bg-surface-container-low/50 border border-outline-variant/10">
            <div className="flex items-center justify-between">
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center font-mono text-body-medium">
                3
              </span>
              <span className="font-label-xs text-label-xs text-outline">
                Activate
              </span>
            </div>
            <div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                Explore & take action
              </h4>
              <p className="font-body-medium text-body-medium text-on-surface-variant mt-1">
                Visualize segment trends, share dashboards with your team, and
                dispatch synced cohorts to your marketing CRM.
              </p>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-surface-container-lowest shadow-xs flex flex-col gap-2 border border-outline-variant/10">
              <div className="flex items-center justify-between text-label-xs">
                <span className="font-semibold text-on-surface">
                  Continuous Webhook
                </span>
                <span className="text-primary font-mono text-label-xs">
                  200 OK
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="text-on-surface-variant text-label-xs">
                  Customer.io sync active
                </span>
              </div>
              <span className="font-code-inline text-code-inline text-outline truncate">
                POST /v1/cohorts/high-advocates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
