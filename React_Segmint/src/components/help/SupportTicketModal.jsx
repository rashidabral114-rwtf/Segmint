import React, { useState } from "react";

export default function SupportTicketModal({ isOpen, onClose }) {
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("High (P2)");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Support Incident ticket #SEG-9482 dispatched to Acme Corp Dedicated SRE channel. Current queue position: 1."
    );
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
              support_agent
            </span>
            <h3 className="font-headline-md text-base font-semibold text-on-surface">
              Dispatch Dedicated SRE Support Ticket
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
              Issue Subject
            </label>
            <input
              type="text"
              placeholder="e.g. Snowflake Reverse-CDP sync latency spike"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full h-9 px-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div>
            <label className="font-label-sm font-semibold text-on-surface block mb-1">
              Incident Severity Priority
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full h-9 px-2 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
            >
              <option value="Critical (P1)">Critical (P1 - Production Pipeline Down)</option>
              <option value="High (P2)">High (P2 - Sync Degradation / Latency)</option>
              <option value="Standard (P3)">Standard (P3 - Question / Config Support)</option>
            </select>
          </div>

          <div>
            <label className="font-label-sm font-semibold text-on-surface block mb-1">
              Incident Description & Logs
            </label>
            <textarea
              rows={4}
              placeholder="Describe error codes, pipeline IDs, or attach stack traces..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-on-surface focus:outline-none focus:border-primary"
              required
            ></textarea>
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
              Dispatch Incident #SEG-9482
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
