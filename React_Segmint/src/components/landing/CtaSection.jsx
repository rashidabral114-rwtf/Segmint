import React from "react";

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="rounded-2xl bg-surface-container-lowest shadow-xl p-10 md:p-16 flex flex-col items-center text-center relative overflow-hidden border border-surface-container-high/60">
          {/* Subtle background blur aesthetic */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-6 shadow-md">
              <span className="material-symbols-outlined text-[28px]">
                explore
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Your customer data has a story. Start exploring it.
            </h2>
            <p className="font-subtitle text-subtitle text-on-surface-variant mt-4">
              Join hundreds of forward-thinking teams using Segmint to drive
              higher customer retention, reduce acquisition costs, and maximize
              lifetime value.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-space-sm w-full justify-center">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs font-body-medium text-body-medium px-8 py-3.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all shadow-md hover:shadow-lg font-medium"
                data-path="pricing"
                href="#pricing"
              >
                <span>Start exploring</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center font-body-medium text-body-medium px-6 py-3.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-medium border border-outline-variant/10"
                data-path="solutions"
                href="#solutions"
              >
                Schedule live demo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-label-xs font-label-xs text-outline">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  check
                </span>
                No credit card required
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  check
                </span>
                14-day free trial
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  check
                </span>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
