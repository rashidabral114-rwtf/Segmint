import React, { useState } from "react";

export default function AdhocReportModal({ isOpen, onClose }) {
  const [reportName, setReportName] = useState("Ad-hoc Segment Delta Export");
  const [cohort, setCohort] = useState("High-Value Advocates");
  const [format, setFormat] = useState("CSV");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ad-hoc job queued! Artifact ready in ~1.4s.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-on-background/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/30 p-6 z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">
              analytics
            </span>
            <h3 className="font-headline-md text-base font-semibold text-on-surface">
              Generate Ad-hoc Analytical Report
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-on-surface-variant hover:text-on-surface rounded-md hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 flex flex-col gap-4 text-xs">
          <div>
            <label className="font-label-sm font-semibold text-on-surface block mb-1">
              Report Name
            </label>
            <input
              type="text"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              className="w-full h-9 px-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-label-sm font-semibold text-on-surface block mb-1">
                Target Cohort
              </label>
              <select
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
                className="w-full h-9 px-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
              >
                <option value="High-Value Advocates">High-Value Advocates</option>
                <option value="Steady Loyalists">Steady Loyalists</option>
                <option value="Seasonal Shoppers">Seasonal Shoppers</option>
                <option value="At-Risk Churners">At-Risk Churners</option>
              </select>
            </div>
            <div>
              <label className="font-label-sm font-semibold text-on-surface block mb-1">
                Delivery Format
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full h-9 px-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
              >
                <option value="CSV">CSV (Flattened Table)</option>
                <option value="Parquet">Apache Parquet (Columnar)</option>
                <option value="JSON">JSON (Nested Event Arrays)</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-surface-container-low flex items-start gap-2 border border-outline-variant/20">
            <span className="material-symbols-outlined text-[18px] text-tertiary mt-0.5">
              verified
            </span>
            <div className="flex flex-col text-on-surface-variant">
              <span className="font-semibold text-on-surface">
                Streaming Execution Pipeline
              </span>
              <span>
                Generated report will be compiled against read-replica memory cache
                within &lt; 2 seconds.
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-outline-variant/30 text-on-surface font-semibold hover:bg-surface-container transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-semibold hover:bg-primary transition-colors shadow-sm"
            >
              Queue Ad-hoc Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
