import React from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import { dataSourcesList } from "../data/otherPagesData";

export default function DataSourcesPage() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Data Sources"
        title="Warehouse & Pipeline Integrations"
        badgeText="4 Active Connectors"
        actions={
          <button
            type="button"
            onClick={() => alert("Launching Data Connector Wizard...")}
            className="h-9 px-3 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Connect New Source</span>
          </button>
        }
      />

      {/* Grid of Data Source Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {dataSourcesList.map((source) => (
          <div
            key={source.id}
            className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    {source.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-base font-semibold text-on-surface">
                    {source.name}
                  </h3>
                  <span className="font-body-base text-xs text-on-surface-variant">
                    {source.type}
                  </span>
                </div>
              </div>

              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${source.statusColor}`}
              >
                {source.status}
              </span>
            </div>

            <div className="p-3 rounded-lg bg-surface-container-low/60 flex items-center justify-between text-xs border border-outline-variant/10">
              <div>
                <span className="text-outline block text-[10px]">
                  Query Latency
                </span>
                <span className="font-code-inline font-semibold text-on-surface">
                  {source.latency}
                </span>
              </div>
              <div className="text-right">
                <span className="text-outline block text-[10px]">
                  Records Ingested
                </span>
                <span className="font-code-inline font-semibold text-on-surface">
                  {source.recordsSynced}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-surface-container flex items-center justify-between">
              <span className="font-code-inline text-[11px] text-outline">
                {source.id} // live
              </span>
              <button
                type="button"
                onClick={() => alert(`Testing pipeline sync for ${source.name}...`)}
                className="text-primary hover:underline text-xs font-semibold"
              >
                Test Connection →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
