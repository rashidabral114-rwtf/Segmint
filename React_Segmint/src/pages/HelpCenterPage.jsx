import React, { useState } from "react";
import SupportTicketModal from "../components/help/SupportTicketModal";
import {
  quickSearchTags,
  cliSnippets,
  docModules,
  faqItems,
} from "../data/otherPagesData";

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);

  const fillSearch = (query) => {
    setSearchQuery(query);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSnippet(index);
      setTimeout(() => {
        setCopiedSnippet(null);
      }, 1500);
    });
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* 1. Breadcrumbs & System Status Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
            Workspaces
          </span>
          <span className="text-outline-variant text-xs">/</span>
          <span className="font-label-xs text-label-xs text-on-surface font-semibold uppercase tracking-wider">
            Acme Corp
          </span>
          <span className="text-outline-variant text-xs">/</span>
          <span className="font-label-xs text-label-xs text-primary font-semibold uppercase tracking-wider">
            Help Center &amp; Knowledge Base
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-xs text-label-xs tracking-tight text-on-surface-variant font-medium">
              DOCS v2.4.0 <span className="text-outline-variant mx-1">•</span>
              <strong className="text-tertiary font-semibold">
                All Systems Operational
              </strong>
            </span>
          </div>
          <a
            className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm border border-outline-variant/30 transition-colors flex items-center gap-1.5"
            href="#changelog"
            onClick={(e) => {
              e.preventDefault();
              alert("Segmint API Changelog v2.4.2: Real-time K-means centroids optimization live.");
            }}
          >
            <span className="material-symbols-outlined text-[15px] text-primary">
              commit
            </span>
            <span>API Changelog</span>
            <span className="font-code-inline text-code-inline text-[10px] text-primary font-semibold">
              v2.4.2
            </span>
          </a>
          <button
            type="button"
            className="px-3.5 py-1.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-body-medium text-body-medium shadow-xs flex items-center gap-1.5 transition-all"
            onClick={() => setTicketModalOpen(true)}
          >
            <span className="material-symbols-outlined text-[16px]">
              support_agent
            </span>
            <span>Submit Support Ticket</span>
          </button>
        </div>
      </div>

      {/* 2. Knowledge Search Hero */}
      <section className="relative my-8 p-8 md:p-10 rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-xs">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-tertiary/5 blur-2xl pointer-events-none"></div>
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-xs text-label-xs mb-3 font-semibold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[13px]">
              auto_stories
            </span>
            Segmint Engineering Docs
          </div>
          <h1 className="font-headline-lg text-headline-lg tracking-tight text-on-surface font-semibold">
            How can we assist your segmentation pipeline?
          </h1>
          <p className="font-subtitle text-subtitle text-on-surface-variant mt-2 max-w-2xl">
            Explore documentation, mathematical clustering algorithms, schema mappings, integration guides, and live system diagnostics.
          </p>

          {/* Advanced Search Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-2 bg-surface rounded-xl p-1.5 border border-outline-variant/40 shadow-xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all">
            <div className="flex items-center gap-2 pl-3 flex-1 min-w-0">
              <span className="material-symbols-outlined text-[20px] text-outline">
                search
              </span>
              <input
                id="docsSearch"
                className="w-full bg-transparent border-0 outline-none text-on-surface placeholder:text-outline-variant font-body-base text-body-base"
                placeholder="Search algorithms, error codes (e.g. E_SCHEMA_TYPE_MISMATCH), endpoints..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 pr-1">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="bg-surface-container-low text-on-surface-variant border border-outline-variant/30 rounded-lg px-2.5 py-1.5 font-label-sm text-label-sm outline-none cursor-pointer hover:bg-surface-container transition-colors"
              >
                <option>All Topics</option>
                <option>Ingestion &amp; Sync</option>
                <option>K-Means &amp; ML</option>
                <option>Rule Builder</option>
                <option>Exports &amp; Webhooks</option>
                <option>RBAC &amp; Security</option>
              </select>
              <span className="hidden md:inline-flex items-center gap-0.5 px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-code-inline text-code-inline text-[11px] border border-outline-variant/20">
                ⌘K
              </span>
            </div>
          </div>

          {/* Quick Tag Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-3.5">
            <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold mr-1">
              Suggested:
            </span>
            {quickSearchTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className="px-2.5 py-1 rounded-md bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm border border-outline-variant/30 transition-all"
                onClick={() => fillSearch(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Documentation Categories Grid (3 cols x 2 rows) */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
              Documentation Modules
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">
              System specifications, math primitives, and deployment blueprints.
            </p>
          </div>
          <button
            type="button"
            className="font-label-sm text-label-sm text-primary hover:text-on-primary-fixed-variant font-medium flex items-center gap-1 transition-colors"
            onClick={() => alert("Browsing complete engineering documentation index.")}
          >
            <span>Browse Index</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {docModules.map((mod) => (
            <div
              key={mod.id}
              className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/30 hover:border-outline-variant/70 shadow-xs transition-all hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      {mod.icon}
                    </span>
                  </div>
                  <span className="font-code-inline text-code-inline text-[11px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded border border-outline-variant/20">
                    {mod.id}
                  </span>
                </div>
                <h3 className="font-body-medium text-body-medium text-on-surface font-semibold text-base mb-1">
                  {mod.title}
                </h3>
                <p className="font-body-base text-body-base text-on-surface-variant text-xs line-clamp-2 mb-4 leading-relaxed">
                  {mod.description}
                </p>

                <ul className="space-y-2 border-t border-outline-variant/20 pt-3.5">
                  {mod.articles.map((art, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Viewing article: ${art.title}`);
                        }}
                        className="group/item flex items-center justify-between text-on-surface hover:text-primary transition-colors"
                      >
                        <span className="font-body-base text-body-base text-xs font-normal truncate pr-2">
                          {art.title}
                        </span>
                        <span className="font-label-xs text-label-xs text-on-surface-variant whitespace-nowrap bg-surface-container-low px-1.5 py-0.5 rounded">
                          {art.readTime}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  {mod.articleCount} Articles
                </span>
                <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-colors">
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Troubleshooting & Live Health Matrix */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left Column: FAQ & Technical Problem Resolution (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                Troubleshooting &amp; Mechanics FAQ
              </h2>
              <p className="font-body-base text-body-base text-on-surface-variant">
                Detailed answers to complex pipeline dynamics and error exceptions.
              </p>
            </div>
            <span className="font-label-xs text-label-xs px-2.5 py-1 rounded bg-surface-container-low text-on-surface-variant border border-outline-variant/20">
              4 Core Guides
            </span>
          </div>

          {/* Accordion FAQ items */}
          {faqItems.map((faq) => (
            <details
              key={faq.id}
              className="group bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-4 transition-all open:shadow-xs"
              defaultOpen={faq.defaultOpen}
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none font-body-medium text-body-medium font-semibold text-on-surface">
                <div className="flex items-center gap-2.5 pr-2">
                  <span
                    className={`material-symbols-outlined text-[18px] ${
                      faq.icon === "error_outline"
                        ? "text-error"
                        : faq.icon === "alt_route"
                        ? "text-tertiary"
                        : "text-primary"
                    }`}
                  >
                    {faq.icon}
                  </span>
                  <span>{faq.question}</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-outline-variant group-open:rotate-180 transition-transform">
                  keyboard_arrow_down
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-outline-variant/20 text-on-surface-variant font-body-base text-body-base text-xs leading-relaxed space-y-2">
                {faq.answerParts.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {faq.codeSnippet && (
                  <div className="bg-surface-container-low p-2.5 rounded-lg border border-outline-variant/30 font-code-inline text-code-inline text-[11px] text-on-surface">
                    {faq.codeSnippet}
                  </div>
                )}
                {faq.answerFollowup && <p>{faq.answerFollowup}</p>}
              </div>
            </details>
          ))}
        </div>

        {/* Right Column: Live Support & Developer Diagnostics Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Operational Diagnostics Widget */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary">
                  check_circle
                </span>
                <span className="font-body-medium text-body-medium font-semibold text-on-surface text-sm">
                  Cluster Infrastructure Status
                </span>
              </div>
              <span className="font-code-inline text-code-inline text-[11px] text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded font-medium">
                US-EAST-1
              </span>
            </div>
            <div className="mt-3.5 space-y-2.5">
              <div className="flex items-center justify-between font-body-base text-body-base text-xs">
                <span className="text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Ingestion Gateway
                </span>
                <span className="font-code-inline text-code-inline text-[11px] text-on-surface font-medium">
                  99.99% • 14.2k req/s
                </span>
              </div>
              <div className="flex items-center justify-between font-body-base text-body-base text-xs">
                <span className="text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  ML Clustering Engine
                </span>
                <span className="font-code-inline text-code-inline text-[11px] text-on-surface font-medium">
                  v3.1.2 Centroids Online
                </span>
              </div>
              <div className="flex items-center justify-between font-body-base text-body-base text-xs">
                <span className="text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Webhook Dispatcher
                </span>
                <span className="font-code-inline text-code-inline text-[11px] text-on-surface font-medium">
                  184ms Latency
                </span>
              </div>
              <div className="flex items-center justify-between font-body-base text-body-base text-xs">
                <span className="text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Warehouse Sync Workers
                </span>
                <span className="font-code-inline text-code-inline text-[11px] text-on-surface font-medium">
                  0 Task Backlog
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-label-xs text-label-xs text-on-surface-variant">
                Last checked 42s ago
              </span>
              <button
                type="button"
                className="font-label-xs text-label-xs text-primary hover:underline font-semibold flex items-center gap-0.5"
                onClick={() => alert("Status dashboard is operational across all clusters.")}
              >
                <span>Public Incident Status</span>
                <span className="material-symbols-outlined text-[13px]">
                  open_in_new
                </span>
              </button>
            </div>
          </div>

          {/* Dedicated Enterprise Support Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
              <span className="font-body-medium text-body-medium font-semibold text-on-surface text-sm">
                Enterprise SLA &amp; Support Tier
              </span>
              <span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-semibold uppercase tracking-wider">
                TIER 1 ENTERPRISE
              </span>
            </div>
            <div className="mt-3.5 flex items-start gap-3">
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full object-cover border border-outline-variant/30"
                  alt="Marcus Vance Solutions Lead"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU159J_yV4CK2YLfI7dLm5BByqI3lZIHiDE3eLmnRb5IJorfDJSaq5MvaoEyVWCYmuiUGeA0V_hD6XxXAySPr5jrwO36ExDWEIMbQ19hHRD8V3I4NbGl0LpR0KvvaEypcFbDa3KS9G31WzXH-fuzt8igz-OhLbSp9RVii-Ew3RJbAjK7-Lyw86i6tJ8IQfgFbJtbb8KVHmBjjLePtwM0zdDv0UE5NSKvbQ084MrAqmuf9r3z4TZSY"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-body-medium text-body-medium text-xs font-semibold text-on-surface truncate">
                    Marcus Vance
                  </span>
                  <span className="text-[10px] text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded font-medium">
                    Solutions Lead
                  </span>
                </div>
                <span className="font-label-xs text-label-xs text-on-surface-variant mt-0.5">
                  Assigned to Acme Corp • Avg reply: 6m
                </span>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => alert("Joining #segmint-acme-corp dedicated Slack channel.")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-xs text-label-xs font-semibold transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      chat
                    </span>
                    #segmint-acme-corp
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Scheduling Architecture Review session with Marcus Vance.")}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs transition-colors"
                  >
                    Book Architecture Review
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/20 text-xs text-on-surface-variant flex items-center justify-between">
              <span>
                Priority P1 Response Guarantee: <strong>&lt; 15 mins</strong>
              </span>
              <span className="text-tertiary font-semibold flex items-center gap-0.5">
                24/7/365 On-Call
              </span>
            </div>
          </div>

          {/* Developer SDK Install Snips */}
          <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="font-label-xs text-label-xs font-semibold uppercase tracking-wider text-surface-dim">
                Developer Toolkits
              </span>
              <span className="font-code-inline text-code-inline text-[11px] text-tertiary-fixed font-mono">
                v2.4.2 Latest
              </span>
            </div>
            <div className="space-y-2">
              {cliSnippets.map((snippet, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-on-background/60 px-3 py-2 rounded-lg font-code-inline text-code-inline text-xs"
                >
                  <span className="text-surface-dim select-all">
                    {snippet.command}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(snippet.command, idx)}
                    className="text-surface-dim hover:text-white transition-colors"
                    title="Copy snippet"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedSnippet === idx ? "done" : "content_copy"}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Feedback & Community Resource Strip */}
      <footer className="mt-4 pt-6 pb-4 border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Helpfulness voting */}
        <div className="flex items-center gap-3">
          <span className="font-body-medium text-body-medium text-xs text-on-surface font-medium">
            Was this documentation hub helpful?
          </span>
          {feedbackGiven ? (
            <span className="font-label-xs text-label-xs text-tertiary font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                check_circle
              </span>
              Thank you for your feedback!
            </span>
          ) : (
            <div className="flex items-center gap-1.5" id="feedbackContainer">
              <button
                type="button"
                className="px-2.5 py-1 rounded-md border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs flex items-center gap-1 transition-colors"
                onClick={() => setFeedbackGiven(true)}
              >
                <span className="material-symbols-outlined text-[14px] text-tertiary">
                  thumb_up
                </span>
                Yes
              </button>
              <button
                type="button"
                className="px-2.5 py-1 rounded-md border border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs flex items-center gap-1 transition-colors"
                onClick={() => setFeedbackGiven(true)}
              >
                <span className="material-symbols-outlined text-[14px] text-error">
                  thumb_down
                </span>
                No
              </button>
            </div>
          )}
        </div>

        {/* External Links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-label-sm text-label-sm text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Segmint Discord community link.");
            }}
          >
            <span className="material-symbols-outlined text-[16px]">forum</span>
            Discord Community
          </a>
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Segmint open-source dbt packages repository.");
            }}
          >
            <span className="material-symbols-outlined text-[16px]">code</span>
            dbt Packages (GitHub)
          </a>
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Opening Interactive REST & GraphQL API Playground.");
            }}
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            Interactive API Playground
          </a>
          <span className="text-outline-variant">•</span>
          <span className="text-on-surface-variant font-code-inline text-code-inline text-[11px]">
            Segmint Inc. © 2025
          </span>
        </div>
      </footer>

      {/* Support Ticket Modal */}
      <SupportTicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />
    </div>
  );
}
