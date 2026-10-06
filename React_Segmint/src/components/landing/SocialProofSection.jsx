import React from "react";
import { trustedCompanies, socialProofMetrics } from "../../data/landingData";

export default function SocialProofSection() {
  return (
    <section className="w-full bg-surface-container-lowest py-8 shadow-sm border-y border-surface-container-high/40">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col">
            <span className="font-label-xs text-label-xs uppercase tracking-wider text-outline">
              Engineered for high-growth stacks
            </span>
            <div className="flex flex-wrap items-center gap-6 mt-3 text-on-surface-variant opacity-75">
              {trustedCompanies.map((company) => (
                <span
                  key={company}
                  className="font-headline-md text-headline-md tracking-tighter font-semibold hover:opacity-100 transition-opacity cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          <div className="h-10 w-px bg-surface-container-high hidden md:block"></div>

          <div className="grid grid-cols-3 gap-space-lg w-full md:w-auto">
            {socialProofMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span
                  className={`font-metric-sm text-metric-sm font-semibold ${metric.valueColor}`}
                >
                  {metric.value}
                </span>
                <span className="font-label-xs text-label-xs text-outline">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
