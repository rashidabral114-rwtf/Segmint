import React from "react";

export default function CustomerDrawer({ customer, onClose }) {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-on-background/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-container-lowest shadow-2xl flex flex-col border-l border-outline-variant/30 animate-in slide-in-from-right duration-200">
          {/* Drawer Header */}
          <div className="h-14 px-6 border-b border-outline-variant/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-headline-md text-sm font-semibold text-on-surface">
                Customer Intelligence Profile
              </span>
              <span className="font-code-inline text-[11px] text-outline">
                {customer.id}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-6">
            {/* Customer Avatar & Headline */}
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shadow-sm ${customer.avatarBg}`}
              >
                {customer.avatarText}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-headline-md text-base font-semibold text-on-surface truncate">
                  {customer.name}
                </span>
                <span className="font-body-base text-xs text-on-surface-variant truncate">
                  {customer.email}
                </span>
                <div className="mt-1 flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${customer.segmentColor}`}
                  ></span>
                  <span className="font-label-xs text-xs font-semibold text-on-surface">
                    {customer.segment}
                  </span>
                </div>
              </div>
            </div>

            {/* RFM Score & Health */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-xs text-label-xs uppercase font-semibold text-on-surface-variant">
                  RFM Behavioral Score
                </span>
                <span className="font-code-inline text-xs font-semibold text-primary">
                  {customer.rfmScore}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-surface-container-lowest p-2 rounded-lg">
                  <span className="font-label-xs text-[10px] text-outline block">
                    Recency
                  </span>
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    {customer.recency}
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-2 rounded-lg">
                  <span className="font-label-xs text-[10px] text-outline block">
                    Frequency
                  </span>
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    {customer.frequency}
                  </span>
                </div>
                <div className="bg-surface-container-lowest p-2 rounded-lg">
                  <span className="font-label-xs text-[10px] text-outline block">
                    Monetary
                  </span>
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    {customer.monetary}
                  </span>
                </div>
              </div>
            </div>

            {/* Predictive Intelligence */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
                <span className="font-label-xs text-label-xs text-outline uppercase block">
                  Predicted 1Y LTV
                </span>
                <span className="font-metric-sm text-metric-sm font-semibold text-on-surface mt-1 block">
                  {customer.predictedLtv}
                </span>
                <span className="text-[10px] text-tertiary font-semibold">
                  Top 5% percentile
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
                <span className="font-label-xs text-label-xs text-outline uppercase block">
                  Risk of Churn
                </span>
                <span className="font-metric-sm text-metric-sm font-semibold text-on-surface mt-1 block">
                  {customer.riskOfChurn}
                </span>
                <span className="text-[10px] text-tertiary font-semibold">
                  Low churn velocity
                </span>
              </div>
            </div>

            {/* Recent Orders Table */}
            <div>
              <span className="font-label-xs text-label-xs uppercase font-semibold text-on-surface-variant block mb-2">
                Recent Transaction History
              </span>
              <div className="rounded-lg border border-outline-variant/20 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-surface-container-low font-label-xs text-on-surface-variant">
                    <tr>
                      <th className="p-2.5">Order ID</th>
                      <th className="p-2.5">Date</th>
                      <th className="p-2.5">Amount</th>
                      <th className="p-2.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {customer.recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-surface-container-low/50">
                        <td className="p-2.5 font-code-inline font-medium text-on-surface">
                          {order.id}
                        </td>
                        <td className="p-2.5 text-on-surface-variant">
                          {order.date}
                        </td>
                        <td className="p-2.5 font-semibold text-on-surface">
                          {order.amount}
                        </td>
                        <td className="p-2.5 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-semibold">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Drawer Actions */}
          <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => alert(`Exporting payload for ${customer.name}...`)}
              className="flex-1 py-2 px-3 rounded-lg border border-outline-variant/30 bg-surface-container-lowest text-on-surface text-xs font-semibold hover:bg-surface-container transition-colors"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={() => alert(`Webhook dispatched for ${customer.id}`)}
              className="flex-1 py-2 px-3 rounded-lg bg-primary-container text-on-primary text-xs font-semibold hover:bg-primary transition-colors shadow-sm"
            >
              Trigger Sync
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
