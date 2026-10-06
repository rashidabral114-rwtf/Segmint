import React, { useState } from "react";

export default function ProfilePage() {
  const [isPublic, setIsPublic] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [fullName, setFullName] = useState("Elena Scott");
  const [email, setEmail] = useState("elena@acme.io");
  const [roleTitle, setRoleTitle] = useState("Principal Architect");
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-space-xs text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider mb-2">
        <span>Workspaces</span>
        <span className="text-outline-variant">/</span>
        <span>Acme Corp</span>
        <span className="text-outline-variant">/</span>
        <span className="text-primary font-body-medium">User Profile &amp; Preferences</span>
      </div>

      {/* Profile Header Hero Card */}
      <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xs mb-space-lg border border-outline-variant/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline-lg font-bold text-2xl shadow-sm">
                ES
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-tertiary border-2 border-surface-container-lowest"></span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                  {fullName}
                </h1>
                <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-label-xs text-xs font-semibold">
                  Workspace Owner
                </span>
                <span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-xs text-xs font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  2FA Active
                </span>
              </div>
              <p className="font-body-base text-body-base text-on-surface-variant mt-1 flex items-center gap-2 flex-wrap text-sm">
                <span>{roleTitle}</span>
                <span className="text-outline-variant">•</span>
                <span>{email}</span>
                <span className="text-outline-variant">•</span>
                <span>Joined January 2024</span>
              </p>
            </div>
          </div>

          {/* Visibility Switch */}
          <div className="flex items-center gap-4 bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/30 self-start md:self-auto">
            <div className="flex flex-col">
              <span className="font-label-xs text-label-xs font-semibold text-on-surface">
                Profile Visibility
              </span>
              <span className="font-label-xs text-[11px] text-on-surface-variant">
                {isPublic
                  ? "Visible to workspace team (Public)"
                  : "Only visible to admins (Private)"}
              </span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={isPublic}
              onClick={() => setIsPublic(!isPublic)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isPublic ? "bg-primary" : "bg-outline-variant"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                  isPublic ? "translate-x-5" : "translate-x-0"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </section>

      {/* Contributions Metric Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-space-lg">
        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-xs">
          <div className="flex items-center justify-between text-on-surface-variant mb-1 font-label-xs text-label-xs uppercase font-semibold">
            <span>Segments</span>
            <span className="text-primary font-semibold font-code-inline">+3 mo</span>
          </div>
          <span className="font-headline-md text-2xl font-bold text-on-surface block">
            14
          </span>
          <span className="font-label-xs text-xs text-on-surface-variant mt-1 block">
            Active clustering models
          </span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-xs">
          <div className="flex items-center justify-between text-on-surface-variant mb-1 font-label-xs text-label-xs uppercase font-semibold">
            <span>Clustered Records</span>
            <span className="text-tertiary font-semibold font-code-inline">+18.4%</span>
          </div>
          <span className="font-headline-md text-2xl font-bold text-on-surface block">
            182.4k
          </span>
          <span className="font-label-xs text-xs text-on-surface-variant mt-1 block">
            Profiles dynamically assigned
          </span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-xs">
          <div className="flex items-center justify-between text-on-surface-variant mb-1 font-label-xs text-label-xs uppercase font-semibold">
            <span>Ingest Accuracy</span>
            <span className="text-tertiary font-semibold font-code-inline">99.4%</span>
          </div>
          <span className="font-headline-md text-2xl font-bold text-on-surface block">
            99.4%
          </span>
          <span className="font-label-xs text-xs text-on-surface-variant mt-1 block">
            Identity match precision
          </span>
        </div>

        <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-xs">
          <div className="flex items-center justify-between text-on-surface-variant mb-1 font-label-xs text-label-xs uppercase font-semibold">
            <span>Rules Deployed</span>
            <span className="text-secondary font-semibold font-code-inline">28 Live</span>
          </div>
          <span className="font-headline-md text-2xl font-bold text-on-surface block">
            28
          </span>
          <span className="font-label-xs text-xs text-on-surface-variant mt-1 block">
            Active qualification gates
          </span>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
        {/* Left Column: Profile Settings & Info (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <section className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/30 shadow-xs">
            <h2 className="font-headline-md text-body-medium font-semibold text-on-surface mb-space-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                manage_accounts
              </span>
              Account Details
            </h2>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-base focus:bg-surface-container-lowest focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-base focus:bg-surface-container-lowest focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">
                  Workspace Role &amp; Title
                </label>
                <input
                  type="text"
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                  className="w-full h-9 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-base text-body-base focus:bg-surface-container-lowest focus:outline-none transition-all"
                />
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  className={`h-9 px-4 rounded-lg font-body-medium text-body-medium text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5 ${
                    isSaved
                      ? "bg-tertiary text-on-primary"
                      : "bg-primary-container text-on-primary hover:bg-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isSaved ? "check_circle" : "save"}
                  </span>
                  <span>{isSaved ? "Profile Saved" : "Update Profile"}</span>
                </button>
              </div>
            </form>
          </section>

          {/* Security & 2FA Information */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/30 shadow-xs">
            <h2 className="font-headline-md text-body-medium font-semibold text-on-surface mb-space-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                security
              </span>
              Authentication &amp; Security
            </h2>

            <div className="space-y-3">
              <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">
                    verified_user
                  </span>
                  <div>
                    <span className="font-body-medium text-body-medium text-on-surface font-semibold block text-sm">
                      Hardware Security Key (FIDO2 / WebAuthn)
                    </span>
                    <span className="font-label-xs text-xs text-on-surface-variant">
                      YubiKey 5 NFC registered and enforced for all session logins.
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-tertiary-container/15 text-tertiary font-label-xs text-[11px] font-semibold">
                  Enabled
                </span>
              </div>

              <div className="p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-on-surface-variant text-[22px]">
                    devices
                  </span>
                  <div>
                    <span className="font-body-medium text-body-medium text-on-surface font-semibold block text-sm">
                      Active Browser Sessions
                    </span>
                    <span className="font-label-xs text-xs text-on-surface-variant">
                      Current session: Chrome on Windows (US-East)
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => alert("All other active sessions revoked.")}
                  className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high font-label-xs text-xs transition-colors"
                >
                  Revoke Others
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Contributions Timeline & Shortcuts (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-space-lg">
          {/* Recent Contributions Stream */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/30 shadow-xs">
            <h2 className="font-headline-md text-body-medium font-semibold text-on-surface mb-space-md flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">
                history
              </span>
              Recent Contributions
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">
                  commit
                </span>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    Updated High-LTV Advocates k-means
                  </span>
                  <span className="font-body-base text-[11px] text-on-surface-variant mt-0.5">
                    Adjusted convergence tolerance to 1e-4 and re-clustered 16.4k accounts.
                  </span>
                  <span className="font-label-xs text-[10px] text-outline mt-1 font-code-inline">
                    2 hours ago
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[16px] text-tertiary mt-0.5">
                  sync
                </span>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    Connected Snowflake Ingestion pipe
                  </span>
                  <span className="font-body-base text-[11px] text-on-surface-variant mt-0.5">
                    Verified schema mapping for account_id primary entity key.
                  </span>
                  <span className="font-label-xs text-[10px] text-outline mt-1 font-code-inline">
                    Yesterday
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5">
                  functions
                </span>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="font-body-medium text-xs font-semibold text-on-surface">
                    Authored Custom RFM Decay Formula v2
                  </span>
                  <span className="font-body-base text-[11px] text-on-surface-variant mt-0.5">
                    Implemented exponential recency dampening with half-life of 21 days.
                  </span>
                  <span className="font-label-xs text-[10px] text-outline mt-1 font-code-inline">
                    4 days ago
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Nav Card */}
          <section className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/30 shadow-xs">
            <span className="font-label-xs text-label-xs uppercase font-semibold tracking-wider text-on-surface-variant block mb-3">
              Workspace Shortcuts
            </span>
            <div className="flex flex-col gap-1.5">
              <a
                href="/settings"
                className="flex items-center justify-between p-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-xs font-body-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    settings
                  </span>
                  Workspace Administration
                </span>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
              </a>

              <a
                href="/datasources"
                className="flex items-center justify-between p-2 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-colors text-xs font-body-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                    database
                  </span>
                  Connected Data Pipelines
                </span>
                <span className="material-symbols-outlined text-[14px] text-outline-variant">
                  chevron_right
                </span>
              </a>

              <button
                type="button"
                onClick={() => alert("Signed out of Segmint workspace.")}
                className="flex items-center justify-between p-2 rounded-lg text-error hover:bg-error-container/20 transition-colors text-xs font-body-medium text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">
                    logout
                  </span>
                  Sign Out of Session
                </span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
