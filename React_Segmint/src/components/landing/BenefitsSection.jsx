import React from "react";
import { valuePillars } from "../../data/landingData";

export default function BenefitsSection() {
  return (
    <section className="w-full py-20 bg-surface-container-lowest" id="solutions">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          <div className="lg:col-span-5 flex flex-col gap-space-sm">
            <span className="font-label-xs text-label-xs uppercase tracking-wider text-primary font-semibold">
              Value Pillars
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Make customer data easier to work with.
            </h2>
            <p className="font-subtitle text-subtitle text-on-surface-variant">
              Stop waiting for data engineers to write one-off queries. Segmint
              empowers non-technical founders, operators, and growth leads to
              self-serve deep customer intelligence.
            </p>
            <div className="pt-space-md">
              <a
                className="inline-flex items-center gap-space-xs font-body-medium text-body-medium px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-medium hover:bg-primary transition-colors shadow-sm w-fit"
                data-path="pricing"
                href="#pricing"
              >
                <span>Start exploring today</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4">
            {valuePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-surface-container-low/40 flex items-start gap-4 border border-outline-variant/10"
              >
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-body-medium text-body-medium font-semibold text-on-surface">
                    {pillar.title}
                  </h4>
                  <p className="font-body-base text-body-base text-on-surface-variant mt-0.5">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
