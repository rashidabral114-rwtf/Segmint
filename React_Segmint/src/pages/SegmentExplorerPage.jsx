import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";

export default function SegmentExplorerPage() {
  const [matchType, setMatchType] = useState("ALL");
  const [conditions, setConditions] = useState([
    { id: 1, field: "Total Spend (LTV)", operator: ">=", value: "$500.00" },
    { id: 2, field: "Completed Purchases", operator: ">=", value: "3 orders" },
    { id: 3, field: "Last Activity Window", operator: "<=", value: "30 days" },
  ]);

  const addCondition = () => {
    setConditions([
      ...conditions,
      {
        id: Date.now(),
        field: "Total Spend (LTV)",
        operator: ">=",
        value: "$100.00",
      },
    ]);
  };

  const removeCondition = (id) => {
    setConditions(conditions.filter((c) => c.id !== id));
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Segment Explorer"
        title="Visual Cohort Rule Builder"
        badgeText="14,812 Customers Match"
        actions={
          <button
            type="button"
            className="h-9 px-3 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">save</span>
            <span>Save Cohort Rule</span>
          </button>
        }
      />

      {/* Visual Rule Builder Card */}
      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 flex flex-col gap-5">
        <div className="flex items-center justify-between pb-3 border-b border-surface-container">
          <div className="flex items-center gap-2">
            <span className="font-label-xs uppercase font-semibold text-on-surface-variant">
              Match Conditions:
            </span>
            <div className="flex bg-surface-container-low p-0.5 rounded-lg text-xs">
              {["ALL", "ANY"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setMatchType(type)}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    matchType === type
                      ? "bg-surface-container-lowest text-primary shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Match {type}
                </button>
              ))}
            </div>
          </div>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/15 text-tertiary text-xs font-semibold">
            <span className="material-symbols-outlined text-[14px]">
              check_circle
            </span>
            Estimated 14,812 audience size (30.7%)
          </span>
        </div>

        {/* Condition Rows */}
        <div className="flex flex-col gap-3">
          {conditions.map((cond, idx) => (
            <div
              key={cond.id}
              className="p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="font-label-xs uppercase text-outline px-2 py-0.5 bg-surface-container rounded font-mono">
                  #{idx + 1}
                </span>
                <select
                  value={cond.field}
                  onChange={(e) => {
                    const updated = [...conditions];
                    updated[idx].field = e.target.value;
                    setConditions(updated);
                  }}
                  className="h-9 px-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20 text-xs text-on-surface font-medium"
                >
                  <option value="Total Spend (LTV)">Total Spend (LTV)</option>
                  <option value="Completed Purchases">Completed Purchases</option>
                  <option value="Last Activity Window">Last Activity Window</option>
                  <option value="Country / Geography">Country / Geography</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={cond.operator}
                  onChange={(e) => {
                    const updated = [...conditions];
                    updated[idx].operator = e.target.value;
                    setConditions(updated);
                  }}
                  className="h-9 px-3 rounded-lg bg-surface-container-lowest border border-outline-variant/20 text-xs text-on-surface font-medium"
                >
                  <option value=">=">&gt;= (Greater or Equal)</option>
                  <option value="<=">&lt;= (Less or Equal)</option>
                  <option value="=">= (Equals Exactly)</option>
                  <option value="!=">!= (Not Equal)</option>
                </select>

                <input
                  type="text"
                  value={cond.value}
                  onChange={(e) => {
                    const updated = [...conditions];
                    updated[idx].value = e.target.value;
                    setConditions(updated);
                  }}
                  className="h-9 px-3 w-32 rounded-lg bg-surface-container-lowest border border-outline-variant/20 text-xs text-on-surface font-medium"
                />

                <button
                  type="button"
                  onClick={() => removeCondition(cond.id)}
                  className="p-1.5 text-outline hover:text-error rounded-lg hover:bg-surface-container transition-colors"
                  title="Remove condition"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between">
          <button
            type="button"
            onClick={addCondition}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container text-xs font-semibold text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">add</span>
            <span>Add Condition</span>
          </button>
        </div>
      </div>
    </div>
  );
}
