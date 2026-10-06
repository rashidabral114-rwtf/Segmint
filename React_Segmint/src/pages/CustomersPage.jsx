import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import CustomerDrawer from "../components/customers/CustomerDrawer";
import { customersList } from "../data/customersData";

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [selectedSegment, setSelectedSegment] = useState("all");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customersList.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesSegment =
      selectedSegment === "all" || c.segment === selectedSegment;
    return matchesSearch && matchesSegment;
  });

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Customers"
        title="Customer Directory"
        badgeText="48,290 Profiles Synced"
        actions={
          <button
            type="button"
            className="h-9 px-3 rounded-lg bg-primary-container text-on-primary font-body-medium text-body-medium hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">
              person_add
            </span>
            <span>Import Customers</span>
          </button>
        }
      />

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-72">
          <span className="material-symbols-outlined text-[18px] absolute left-3 top-2.5 text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            placeholder="Search by customer name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container-low text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="h-9 px-3 rounded-lg bg-surface-container-low border border-outline-variant/20 text-xs text-on-surface focus:outline-none focus:border-primary"
          >
            <option value="all">All Cohorts & Segments</option>
            <option value="High-Value Advocates">High-Value Advocates</option>
            <option value="Steady Loyalists">Steady Loyalists</option>
            <option value="Seasonal Shoppers">Seasonal Shoppers</option>
            <option value="At-Risk Churners">At-Risk Churners</option>
          </select>
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs uppercase tracking-wider">
                <th className="p-3.5">Customer</th>
                <th className="p-3.5">Assigned Segment</th>
                <th className="p-3.5">Total Spend</th>
                <th className="p-3.5">Orders</th>
                <th className="p-3.5">Last Seen</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer)}
                  className="hover:bg-surface-container-low/60 transition-colors cursor-pointer group"
                >
                  <td className="p-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${customer.avatarBg}`}
                      >
                        {customer.avatarText}
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-body-medium text-on-surface font-semibold truncate">
                          {customer.name}
                        </span>
                        <span className="font-body-base text-[11px] text-on-surface-variant truncate">
                          {customer.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3.5">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface text-[11px] font-medium">
                      <span
                        className={`w-2 h-2 rounded-full ${customer.segmentColor}`}
                      ></span>
                      {customer.segment}
                    </span>
                  </td>
                  <td className="p-3.5 font-code-inline font-semibold text-on-surface">
                    {customer.totalSpend}
                  </td>
                  <td className="p-3.5 font-mono text-on-surface-variant">
                    {customer.orderCount} orders
                  </td>
                  <td className="p-3.5 font-code-inline text-[11px] text-on-surface-variant">
                    {customer.lastSeen}
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-semibold ${customer.statusClass}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCustomer(customer);
                      }}
                      className="px-2.5 py-1 rounded-md text-primary bg-surface-container group-hover:bg-primary-container group-hover:text-on-primary font-semibold transition-all text-xs"
                    >
                      Inspect →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over Profile Drawer */}
      <CustomerDrawer
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
      />
    </div>
  );
}
