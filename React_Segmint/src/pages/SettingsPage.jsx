import React, { useState } from "react";
import { teamRoster } from "../data/otherPagesData";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Clustering & ML Engine");
  const [kValue, setKValue] = useState(4);
  const [legalName, setLegalName] = useState("Acme Corp");
  const [timezone, setTimezone] = useState("UTC (Coordinated Universal Time)");
  const [primaryKey, setPrimaryKey] = useState("account_id — Master Canonical Account Hash");
  const [tolerance, setTolerance] = useState("1e-4");
  const [maxIterations, setMaxIterations] = useState(300);
  const [reclusterSchedule, setReclusterSchedule] = useState("Weekly on Sunday 00:00 UTC");
  
  // Toggles
  const [silhouetteValidation, setSilhouetteValidation] = useState(true);
  const [iqrTrimming, setIqrTrimming] = useState(true);
  const [standardScaler, setStandardScaler] = useState(true);
  const [pgpVerification, setPgpVerification] = useState(true);
  const [analystWebhooks, setAnalystWebhooks] = useState(true);
  const [strict2FA, setStrict2FA] = useState(true);

  // Search filter for teammates
  const [memberFilter, setMemberFilter] = useState("");

  // Button States
  const [isSaved, setIsSaved] = useState(false);
  const [pingState, setPingState] = useState("idle"); // 'idle' | 'dispatching' | 'success'
  const [copiedKey, setCopiedKey] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  };

  const handleDiscard = () => {
    setLegalName("Acme Corp");
    setKValue(4);
    setTolerance("1e-4");
    setMaxIterations(300);
    setSilhouetteValidation(true);
    setIqrTrimming(true);
    setStandardScaler(true);
    setPgpVerification(true);
    setAnalystWebhooks(true);
    setStrict2FA(true);
  };

  const handleSendPing = () => {
    setPingState("dispatching");
    setTimeout(() => {
      setPingState("success");
      setTimeout(() => {
        setPingState("idle");
      }, 2200);
    }, 750);
  };

  const copyToClipboard = (text, keyId) => {
    navigator.clipboard.writeText(text);
    if (keyId === "slug") {
      setCopiedSlug(true);
      setTimeout(() => setCopiedSlug(false), 2000);
    } else {
      setCopiedKey(keyId);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const filteredMembers = teamRoster.filter(
    (m) =>
      m.name.toLowerCase().includes(memberFilter.toLowerCase()) ||
      m.email.toLowerCase().includes(memberFilter.toLowerCase()) ||
      m.role.toLowerCase().includes(memberFilter.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Top Command & Status Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
            <span>Workspaces</span>
            <span className="text-outline-variant">/</span>
            <span>Acme Corp</span>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-body-medium">
              Settings &amp; Preferences
            </span>
          </div>
          <div className="flex items-center gap-space-sm mt-0.5">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Settings &amp; Workspace Administration
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
              Acme Corp — Production Tier
            </span>
          </div>
          <p className="font-subtitle text-subtitle text-on-surface-variant max-w-4xl text-sm leading-relaxed">
            Manage workspace governance, clustering engine thresholds, team role permissions, API security keys, and automated webhook dispatchers.
          </p>
        </div>

        {/* Persistent Global Save Actions */}
        <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
          <button
            onClick={handleDiscard}
            className="h-9 px-space-md rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-medium text-body-medium shadow-xs transition-all duration-150 flex items-center gap-1.5"
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              history
            </span>
            Discard Changes
          </button>
          <button
            id="save-button"
            onClick={handleSave}
            className={`h-9 px-space-md rounded-lg font-body-medium text-body-medium shadow-xs transition-all duration-150 flex items-center gap-1.5 ${
              isSaved
                ? "bg-tertiary text-on-primary"
                : "bg-primary-container text-on-primary hover:bg-primary"
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isSaved ? "check_circle" : "save"}
            </span>
            <span>{isSaved ? "Saved" : "Save Preferences"}</span>
          </button>
        </div>
      </div>

      {/* Horizontal Settings Navigation Tab Strip */}
      <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-xl mb-space-lg overflow-x-auto">
        {[
          { label: "General & Organization" },
          { label: "Team & Access (RBAC)", badge: "8" },
          { label: "Clustering & ML Engine", dot: true },
          { label: "API Keys & Webhooks", statusBadge: "2 Active" },
          { label: "Data Retention & Audit" },
          { label: "Billing & Usage", external: true },
        ].map((tab) => {
          const isActive = activeTab === tab.label;
          return (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`px-space-sm py-1.5 rounded-lg font-body-medium text-body-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                isActive
                  ? "bg-surface-container-lowest text-primary shadow-xs"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              {tab.dot && <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container-high text-on-surface font-label-xs text-[10px]">
                  {tab.badge}
                </span>
              )}
              {tab.statusBadge && (
                <span className="px-1.5 py-0.2 rounded-full bg-tertiary-container/15 text-tertiary font-label-xs text-[10px]">
                  {tab.statusBadge}
                </span>
              )}
              {tab.external && (
                <span className="material-symbols-outlined text-[14px] text-on-surface-variant">
                  arrow_outward
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Grid Workspace Panels */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
        {/* Left Column: Core Infrastructure & Machine Learning Config (7 cols) */}
        <div className="xl:col-span-7 flex flex-col gap-space-lg">
          {/* 1. General Workspace Profile */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center justify-between pb-space-sm mb-space-md border-b-0">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  domain
                </span>
                <h2 className="font-headline-md text-body-medium font-semibold text-on-surface">
                  General Workspace Profile
                </h2>
              </div>
              <span className="font-code-inline text-[11px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
                UUID: c894-40fa-8c91
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Workspace Legal Name
                </label>
                <input
                  className="h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-base focus:bg-surface-container-lowest focus:outline-none transition-all"
                  type="text"
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Workspace Canonical Slug
                </label>
                <div className="flex rounded-lg bg-surface-container-low p-0.5 overflow-hidden">
                  <input
                    className="flex-1 bg-transparent px-space-sm text-on-surface-variant font-code-inline text-code-inline focus:outline-none select-all"
                    readOnly
                    type="text"
                    value="acme-prod.segmint.io"
                  />
                  <button
                    onClick={() => copyToClipboard("acme-prod.segmint.io", "slug")}
                    className="px-space-xs hover:bg-surface-container-high rounded text-on-surface-variant hover:text-on-surface transition-colors flex items-center"
                    title="Copy slug"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copiedSlug ? "check" : "content_copy"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Primary Timezone
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-base focus:outline-none"
                >
                  <option>UTC (Coordinated Universal Time)</option>
                  <option>America/New_York (EST/EDT)</option>
                  <option>America/Los_Angeles (PST/PDT)</option>
                  <option>Europe/London (GMT/BST)</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-on-surface-variant">
                  Default Ledger Currency
                </label>
                <div className="h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface flex items-center justify-between font-body-base text-body-base">
                  <span className="flex items-center gap-1.5">
                    <span className="font-code-inline text-xs font-semibold text-primary">
                      USD
                    </span>
                    <span>US Dollar ($)</span>
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    lock
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-label-sm text-on-surface-variant">
                    Primary Entity Identifier Key
                  </label>
                  <span className="font-label-xs text-[11px] text-tertiary flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">
                      verified
                    </span>
                    Unique Indexed Column
                  </span>
                </div>
                <select
                  value={primaryKey}
                  onChange={(e) => setPrimaryKey(e.target.value)}
                  className="h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-code-inline text-code-inline focus:outline-none"
                >
                  <option>account_id — Master Canonical Account Hash</option>
                  <option>external_id — Client ERP Reference</option>
                  <option>email — Primary Contact Identity</option>
                  <option>crm_contact_id — Salesforce / HubSpot Global Unique ID</option>
                </select>
              </div>
            </div>
          </section>

          {/* 2. Clustering & Machine Learning Engine Configuration */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  hub
                </span>
                <div>
                  <h2 className="font-headline-md text-body-medium font-semibold text-on-surface">
                    K-Means Clustering &amp; ML Studio Defaults
                  </h2>
                  <p className="font-label-xs text-label-xs text-on-surface-variant">
                    Global parameters enforced during cohort segmentation runs and automated repartitioning.
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-container/10 text-tertiary font-label-xs text-label-xs font-semibold">
                Engine v3.1
              </span>
            </div>

            <div className="p-space-md bg-surface-container-low rounded-lg mb-space-md flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  model_training
                </span>
                <div>
                  <div className="font-body-medium text-body-medium text-on-surface">
                    Automatic Silhouette Validation
                  </div>
                  <div className="font-label-xs text-label-xs text-on-surface-variant">
                    Halt and flag pipeline runs when cohesion drops beneath optimal cluster density.
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-code-inline text-xs text-on-surface font-semibold">
                  &gt; 0.65 S-Score
                </span>
                <input
                  type="checkbox"
                  checked={silhouetteValidation}
                  onChange={(e) => setSilhouetteValidation(e.target.checked)}
                  className="w-4 h-4 text-primary rounded bg-surface-container-highest cursor-pointer accent-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {/* Hyperparameter: Clusters K */}
              <div className="flex flex-col gap-1.5 p-space-sm bg-surface-container-low rounded-lg">
                <div className="flex items-center justify-between">
                  <label className="font-label-sm text-label-sm text-on-surface">
                    Default Cluster Target (k)
                  </label>
                  <span
                    id="k-value"
                    className="font-code-inline text-xs font-semibold text-primary px-2 py-0.5 bg-surface-container-lowest rounded"
                  >
                    {kValue} clusters
                  </span>
                </div>
                <input
                  id="k-slider"
                  type="range"
                  min="2"
                  max="10"
                  value={kValue}
                  onChange={(e) => setKValue(Number(e.target.value))}
                  className="w-full accent-primary h-1.5 bg-surface-container-highest rounded-lg cursor-pointer my-2"
                />
                <div className="flex justify-between text-[10px] text-on-surface-variant font-code-inline">
                  <span>k=2 (Broad)</span>
                  <span>k=6 (Balanced)</span>
                  <span>k=10 (Granular)</span>
                </div>
              </div>

              {/* Convergence Tolerance */}
              <div className="flex flex-col gap-1.5 p-space-sm bg-surface-container-low rounded-lg justify-between">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface">
                    Convergence Tolerance (ε)
                  </label>
                  <p className="font-label-xs text-label-xs text-on-surface-variant">
                    Frobenius norm stopping criteria
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={tolerance}
                    onChange={(e) => setTolerance(e.target.value)}
                    className="h-8 px-2 w-full rounded bg-surface-container-lowest font-code-inline text-code-inline text-on-surface focus:outline-none"
                  />
                  <span className="font-label-xs text-on-surface-variant shrink-0">
                    float64
                  </span>
                </div>
              </div>

              {/* Max Iterations */}
              <div className="flex flex-col gap-1.5 p-space-sm bg-surface-container-low rounded-lg justify-between">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface">
                    Max Iterations (Epochs)
                  </label>
                  <p className="font-label-xs text-label-xs text-on-surface-variant">
                    Ceiling iteration steps before termination
                  </p>
                </div>
                <input
                  type="number"
                  value={maxIterations}
                  onChange={(e) => setMaxIterations(Number(e.target.value))}
                  className="h-8 px-2 rounded bg-surface-container-lowest font-code-inline text-code-inline text-on-surface focus:outline-none"
                />
              </div>

              {/* Auto Recluster Cadence */}
              <div className="flex flex-col gap-1.5 p-space-sm bg-surface-container-low rounded-lg justify-between">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface">
                    Auto-Recluster Schedule
                  </label>
                  <p className="font-label-xs text-label-xs text-on-surface-variant">
                    Cron scheduled ML recalibration
                  </p>
                </div>
                <select
                  value={reclusterSchedule}
                  onChange={(e) => setReclusterSchedule(e.target.value)}
                  className="h-8 px-2 rounded bg-surface-container-lowest font-body-base text-body-base text-on-surface focus:outline-none"
                >
                  <option>Weekly on Sunday 00:00 UTC</option>
                  <option>Daily at 02:00 UTC (High compute)</option>
                  <option>Bi-weekly (1st &amp; 15th)</option>
                  <option>Manual Trigger Only</option>
                </select>
              </div>
            </div>

            {/* Toggles Section */}
            <div className="mt-space-md pt-space-sm grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
              <label className="flex items-start gap-space-xs p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={iqrTrimming}
                  onChange={(e) => setIqrTrimming(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-primary accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-body-medium text-body-medium text-on-surface">
                    IQR 1.5x Outlier Trimming
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    Prune statistical anomalies in dimension arrays before computing centroid distances.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-space-xs p-space-sm rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={standardScaler}
                  onChange={(e) => setStandardScaler(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-primary accent-primary"
                />
                <div className="flex flex-col">
                  <span className="font-body-medium text-body-medium text-on-surface">
                    StandardScaler (Z-Score Normalization)
                  </span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant">
                    Transforms metric axes to zero-mean and unit-variance to eliminate dimensional skew.
                  </span>
                </div>
              </label>
            </div>
          </section>

          {/* 3. Granular RBAC & Security Enforcement */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  security
                </span>
                <h2 className="font-headline-md text-body-medium font-semibold text-on-surface">
                  Security Policies &amp; Workspace Auditing
                </h2>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-semibold">
                SOC-2 Type II Active
              </span>
            </div>

            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    key
                  </span>
                  <div>
                    <div className="font-body-medium text-body-medium text-on-surface">
                      Require PGP verification on all cohort exports
                    </div>
                    <div className="font-label-xs text-label-xs text-on-surface-variant">
                      CSV/Parquet downloads will be signed and encrypted with workspace public keyring.
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={pgpVerification}
                  onChange={(e) => setPgpVerification(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    send_time_extension
                  </span>
                  <div>
                    <div className="font-body-medium text-body-medium text-on-surface">
                      Allow Analysts to trigger automated external webhooks
                    </div>
                    <div className="font-label-xs text-label-xs text-on-surface-variant">
                      Permits non-admin members to pipe clustered segment lists directly into downstream CDPs.
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={analystWebhooks}
                  onChange={(e) => setAnalystWebhooks(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    encrypted
                  </span>
                  <div>
                    <div className="font-body-medium text-body-medium text-on-surface">
                      Strict Two-Factor Authentication (2FA) Mandatory
                    </div>
                    <div className="font-label-xs text-label-xs text-on-surface-variant">
                      Revoke all session tokens for workspace collaborators without hardware or TOTP tokens.
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={strict2FA}
                  onChange={(e) => setStrict2FA(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: API Keys, Webhooks, Team Roster & Danger Zone (5 cols) */}
        <div className="xl:col-span-5 flex flex-col gap-space-lg">
          {/* 4. API Credentials & Developer Access */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  vpn_key
                </span>
                <h2 className="font-headline-md text-body-medium font-semibold text-on-surface">
                  API Credentials &amp; Telemetry
                </h2>
              </div>
              <button
                className="px-space-xs py-1 rounded bg-surface-container text-primary hover:bg-surface-container-high font-label-xs text-label-xs font-semibold flex items-center gap-1 transition-colors"
                type="button"
                onClick={() => alert("Generate New Key modal")}
              >
                <span className="material-symbols-outlined text-[14px]">
                  add
                </span>
                New Key
              </button>
            </div>
            <p className="font-label-xs text-label-xs text-on-surface-variant mb-space-md">
              Ingestion keys authenticate customer streaming events into the Segmint clustering pipeline.
            </p>

            {/* Keys List */}
            <div className="flex flex-col gap-space-xs mb-space-md">
              {/* Key 1 */}
              <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    <span className="font-body-medium text-body-medium text-on-surface font-semibold">
                      Production Ingestion Key
                    </span>
                  </div>
                  <span className="font-label-xs text-[10px] text-tertiary bg-tertiary-container/10 px-2 py-0.5 rounded-full font-medium">
                    Last active 2m ago
                  </span>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest px-2.5 py-1.5 rounded font-code-inline text-code-inline text-on-surface">
                  <span className="tracking-tight text-xs">
                    sgm_live_9f8a8479e0...73a
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        copyToClipboard("sgm_live_9f8a8479e0_secret_73a", "key1")
                      }
                      className="p-1 text-on-surface-variant hover:text-on-surface rounded hover:bg-surface-container transition-colors"
                      title="Copy Key"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {copiedKey === "key1" ? "check" : "content_copy"}
                      </span>
                    </button>
                    <button
                      onClick={() => alert("Revoke Production Ingestion Key?")}
                      className="p-1 text-error hover:bg-error-container/20 rounded transition-colors"
                      title="Revoke Key"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between text-[11px] text-on-surface-variant">
                  <span>Created 14 days ago</span>
                  <span>Rate limit: 5,000 req/sec</span>
                </div>
              </div>

              {/* Key 2 */}
              <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="font-body-medium text-body-medium text-on-surface font-semibold">
                      Staging Webhook Dispatcher
                    </span>
                  </div>
                  <span className="font-label-xs text-[10px] text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full font-medium">
                    Created 45d ago
                  </span>
                </div>
                <div className="flex items-center justify-between bg-surface-container-lowest px-2.5 py-1.5 rounded font-code-inline text-code-inline text-on-surface">
                  <span className="tracking-tight text-xs">
                    sgm_test_2b4198cc2...09e
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        copyToClipboard("sgm_test_2b4198cc2_secret_09e", "key2")
                      }
                      className="p-1 text-on-surface-variant hover:text-on-surface rounded hover:bg-surface-container transition-colors"
                      title="Copy Key"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        {copiedKey === "key2" ? "check" : "content_copy"}
                      </span>
                    </button>
                    <button
                      onClick={() => alert("Revoke Staging Key?")}
                      className="p-1 text-error hover:bg-error-container/20 rounded transition-colors"
                      title="Revoke Key"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Webhook Endpoint Section */}
            <div className="pt-space-xs">
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-label-sm text-label-sm text-on-surface">
                  Telemetry Ingestion Webhook
                </label>
                <span className="font-label-xs text-xs text-tertiary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  200 OK (84ms)
                </span>
              </div>
              <div className="flex gap-1.5 mb-2">
                <div className="flex-1 bg-surface-container-low rounded-lg px-2.5 py-1.5 font-code-inline text-[11px] text-on-surface truncate flex items-center">
                  https://api.acme.corp/v1/telemetry/segmint-sync
                </div>
                <button
                  id="ping-btn"
                  onClick={handleSendPing}
                  className={`px-space-sm py-1.5 text-xs font-body-medium rounded-lg transition-colors flex items-center gap-1 shrink-0 ${
                    pingState === "dispatching"
                      ? "bg-surface-container opacity-75"
                      : pingState === "success"
                      ? "bg-surface-container text-tertiary"
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                  }`}
                  type="button"
                >
                  {pingState === "dispatching" ? (
                    <>
                      <span className="material-symbols-outlined text-[14px] animate-spin">
                        refresh
                      </span>
                      <span>Dispatching...</span>
                    </>
                  ) : pingState === "success" ? (
                    <>
                      <span className="material-symbols-outlined text-[14px] text-tertiary">
                        check
                      </span>
                      <span>200 OK</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[14px]">
                        bolt
                      </span>
                      <span>Send Ping</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* 5. Team Members & RBAC Matrix */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center justify-between mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  groups
                </span>
                <h2 className="font-headline-md text-body-medium font-semibold text-on-surface">
                  Team Access &amp; Permissions
                </h2>
              </div>
              <button
                className="px-space-xs py-1 rounded bg-primary text-on-primary hover:bg-primary-container font-label-xs text-label-xs font-semibold flex items-center gap-1 transition-colors"
                type="button"
                onClick={() => alert("Invite Teammate modal")}
              >
                <span className="material-symbols-outlined text-[14px]">
                  person_add
                </span>
                Invite
              </button>
            </div>

            {/* Search filter */}
            <div className="relative mb-space-sm">
              <span className="material-symbols-outlined absolute left-2.5 top-2 text-[16px] text-on-surface-variant">
                search
              </span>
              <input
                className="w-full h-8 pl-8 pr-2 bg-surface-container-low rounded-lg text-xs font-body-base text-on-surface focus:outline-none"
                placeholder="Filter active teammates..."
                type="text"
                value={memberFilter}
                onChange={(e) => setMemberFilter(e.target.value)}
              />
            </div>

            {/* Teammate Rows */}
            <div className="flex flex-col gap-2">
              {filteredMembers.map((member) => (
                <div
                  key={member.email}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container-low transition-colors"
                >
                  <div className="flex items-center gap-space-xs min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full ${member.avatarBg} font-bold text-xs flex items-center justify-center shrink-0`}
                    >
                      {member.initials}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-body-medium text-xs font-semibold text-on-surface truncate">
                        {member.name}
                      </span>
                      <span className="font-label-xs text-[10px] text-on-surface-variant truncate">
                        {member.email}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`px-2 py-0.5 rounded font-label-xs text-[10px] font-semibold ${
                        member.role === "Owner"
                          ? "bg-primary/10 text-primary"
                          : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {member.role}
                    </span>
                    <span
                      className={`material-symbols-outlined text-[16px] ${
                        member.verified ? "text-tertiary" : "text-outline"
                      }`}
                      title={`2FA ${member.twoFactorStatus}`}
                    >
                      {member.verified ? "verified_user" : "pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Danger Zone & Destructive Actions */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs">
            <div className="flex items-center gap-space-xs mb-space-xs text-error">
              <span className="material-symbols-outlined text-[20px]">
                warning
              </span>
              <h2 className="font-headline-md text-body-medium font-semibold">
                Danger Zone
              </h2>
            </div>
            <p className="font-label-xs text-label-xs text-on-surface-variant mb-space-md">
              Irreversible modifications affecting production telemetry and tenant database clusters.
            </p>
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                <div className="flex flex-col pr-2">
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    Purge Unassigned Cohort Cache
                  </span>
                  <span className="font-label-xs text-[11px] text-on-surface-variant">
                    Evict cold Redis centroid mappings older than 30 days.
                  </span>
                </div>
                <button
                  onClick={() => alert("Purge unassigned cache initiated.")}
                  className="px-space-sm py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-medium text-xs transition-colors shrink-0"
                  type="button"
                >
                  Purge Cache
                </button>
              </div>

              <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                <div className="flex flex-col pr-2">
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    Transfer Ownership
                  </span>
                  <span className="font-label-xs text-[11px] text-on-surface-variant">
                    Reassign primary billing and legal root authority.
                  </span>
                </div>
                <button
                  onClick={() => alert("Transfer ownership flow initiated.")}
                  className="px-space-sm py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-body-medium text-xs transition-colors shrink-0"
                  type="button"
                >
                  Transfer
                </button>
              </div>

              <div className="flex items-center justify-between p-space-sm bg-error-container/20 rounded-lg">
                <div className="flex flex-col pr-2">
                  <span className="font-body-medium text-xs font-semibold text-error">
                    Delete Workspace
                  </span>
                  <span className="font-label-xs text-[11px] text-error/80">
                    Permanent purge of all segmentation pipelines and logs.
                  </span>
                </div>
                <button
                  onClick={() => {
                    if (window.confirm("Are you sure you want to permanently delete Acme workspace?")) {
                      alert("Workspace deletion requested.");
                    }
                  }}
                  className="px-space-sm py-1.5 rounded bg-error text-on-error hover:opacity-90 font-body-medium text-xs transition-opacity shrink-0"
                  type="button"
                >
                  Delete Acme
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
