import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import AdhocReportModal from "../components/reports/AdhocReportModal";
import { scheduledReports } from "../data/otherPagesData";

export default function ReportsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Reports"
        title="Scheduled & Ad-hoc Exports"
        badgeText="3 Automated Delivery Jobs"
        actions={
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="h-9 px-3 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>New Ad-hoc Report</span>
          </button>
        }
      />

      {/* Reports Table */}
      <div className="rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs uppercase tracking-wider">
                <th className="p-3.5">Report Identifier</th>
                <th className="p-3.5">Cadence / Schedule</th>
                <th className="p-3.5">Target Destination</th>
                <th className="p-3.5">Recipients</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Last Run</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {scheduledReports.map((report) => (
                <tr key={report.id} className="hover:bg-surface-container-low/40">
                  <td className="p-3.5">
                    <div className="flex flex-col">
                      <span className="font-semibold text-on-surface">
                        {report.name}
                      </span>
                      <span className="font-code-inline text-[10px] text-outline">
                        {report.id}
                      </span>
                    </div>
                  </td>
                  <td className="p-3.5 font-medium text-on-surface">
                    {report.frequency}
                  </td>
                  <td className="p-3.5 font-code-inline text-on-surface-variant">
                    {report.format}
                  </td>
                  <td className="p-3.5 text-outline truncate max-w-xs">
                    {report.recipients}
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-semibold text-[10px]">
                      {report.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-on-surface-variant text-[11px]">
                    {report.lastRun}
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      type="button"
                      onClick={() =>
                        alert(`Downloading latest artifact for ${report.id}...`)
                      }
                      className="px-2.5 py-1 rounded-md text-primary bg-surface-container hover:bg-primary-container hover:text-on-primary font-semibold transition-all text-xs"
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ad-hoc Report Generator Modal */}
      <AdhocReportModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
