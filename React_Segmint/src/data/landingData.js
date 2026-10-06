export const navLinks = [
  { label: "Product", href: "#", path: "product" },
  { label: "Features", href: "#features", path: "features" },
  { label: "Solutions", href: "#solutions", path: "solutions" },
  { label: "How it works", href: "#how-it-works", path: "how-it-works" },
  { label: "Pricing", href: "#pricing", path: "pricing" },
];

export const trustedCompanies = [
  "SUPABASE",
  "VERCEL",
  "LINEAR",
  "RAMP",
  "RAYCAST",
];

export const socialProofMetrics = [
  { value: "99.99%", label: "Pipeline Uptime", valueColor: "text-on-surface" },
  { value: "< 40ms", label: "Query Latency", valueColor: "text-primary" },
  { value: "100%", label: "SOC2 Compliant", valueColor: "text-tertiary" },
];

export const heroMetrics = [
  {
    label: "Total Customers",
    value: "48,290",
    change: "+12.4%",
    changeColor: "text-tertiary",
  },
  {
    label: "Active Rate",
    value: "68.2%",
    change: "+3.1%",
    changeColor: "text-tertiary",
  },
  {
    label: "Avg Order Val",
    value: "$142.50",
    change: "+$8.20",
    changeColor: "text-tertiary",
  },
  {
    label: "Mo. Retention",
    value: "94.1%",
    change: "Stable",
    changeColor: "text-secondary",
  },
];

export const heroCohorts = [
  {
    name: "High-Value Advocates",
    count: "16,420 (34%)",
    percentage: 34,
    colorClass: "bg-primary-container",
  },
  {
    name: "Recent First-timers",
    count: "13,040 (27%)",
    percentage: 27,
    colorClass: "bg-tertiary",
  },
  {
    name: "Seasonal Shoppers",
    count: "11,100 (23%)",
    percentage: 23,
    colorClass: "bg-secondary-container",
  },
  {
    name: "At-Risk Churners",
    count: "7,730 (16%)",
    percentage: 16,
    colorClass: "bg-error",
  },
];

export const capabilities = [
  {
    id: "intelligent-segmentation",
    icon: "filter_alt",
    iconBg: "bg-primary-fixed/30",
    iconColor: "text-primary",
    title: "Intelligent Segmentation",
    description:
      "Group customers based on purchasing behavior, engagement, demographics, and custom behavioral event triggers without writing complicated SQL.",
    mockupType: "filter-rules",
  },
  {
    id: "interactive-analytics",
    icon: "insights",
    iconBg: "bg-secondary-fixed/50",
    iconColor: "text-secondary",
    title: "Interactive Analytics",
    description:
      "Explore customer trends, revenue contribution, retention, and segment distribution through understandable, responsive visualizations.",
    mockupType: "revenue-bars",
  },
  {
    id: "automated-insights",
    icon: "auto_awesome",
    iconBg: "bg-tertiary-fixed/50",
    iconColor: "text-tertiary",
    title: "Automated Insights",
    description:
      "Discover non-obvious patterns, compare customer groups side-by-side, and identify opportunities using automated data-backed suggestions.",
    mockupType: "insight-pill",
  },
  {
    id: "actionable-exports",
    icon: "sync_alt",
    iconBg: "bg-surface-container-highest",
    iconColor: "text-on-surface-variant",
    title: "Actionable Integrations & Exports",
    description:
      "Export customer cohorts and reports in convenient formats for real-time activation in marketing automation, ad platforms, and operational warehouses.",
    mockupType: "export-formats",
  },
];

export const workflowSteps = [
  {
    step: "1",
    phase: "Connect",
    title: "Import your data",
    description:
      "Upload a standard CSV or connect directly to PostgreSQL, Stripe, or BigQuery with read-only credentials.",
    badge: "Auto-detecting 14 schema attributes...",
  },
  {
    step: "2",
    phase: "Analyze",
    title: "Discover your segments",
    description:
      "Select visual segmentation criteria or run unsupervised ML clustering (RFM, K-Means) in a single click.",
    badge: "4 distinct clusters identified",
  },
  {
    step: "3",
    phase: "Activate",
    title: "Explore & take action",
    description:
      "Visualize segment trends, share dashboards with your team, and dispatch synced cohorts to your marketing CRM.",
    badge: "POST /v1/cohorts/high-advocates",
  },
];

export const globalCohortMatrix = [
  {
    name: "Power Users",
    size: "8,920 (18.5%)",
    avgLtv: "$1,480.00",
    churnRisk: "Low (1.2%)",
    churnBadgeClass: "bg-tertiary/10 text-tertiary",
    engagementPercent: 92,
    colorClass: "bg-primary-container",
  },
  {
    name: "Steady Loyalists",
    size: "19,400 (40.2%)",
    avgLtv: "$620.00",
    churnRisk: "Medium (4.8%)",
    churnBadgeClass: "bg-surface-container text-on-surface-variant",
    engagementPercent: 65,
    colorClass: "bg-secondary-container",
  },
  {
    name: "Dormant & Inactive",
    size: "12,180 (25.2%)",
    avgLtv: "$94.50",
    churnRisk: "Critical (28.4%)",
    churnBadgeClass: "bg-error/10 text-error",
    engagementPercent: 12,
    colorClass: "bg-error",
  },
];

export const previewInsightCards = [
  {
    tag: "Predictive Trend",
    title: "Retention uplift on second order",
    body: "Users purchasing twice in 14 days have a 4.1x higher 1-year retention rate.",
  },
  {
    tag: "Cohort Dynamics",
    title: "Cart abandonment variance",
    body: "Desktop users show 32% lower abandonment when custom discounts are personalized.",
  },
  {
    tag: "Automated Recommendation",
    title: "Win-back timing optimization",
    body: "Sending reactivation nudges at day 21 yields 3.4x more conversions than at day 45.",
  },
];

export const valuePillars = [
  {
    title: "Spend less time manually organizing customer information",
    body: "Automated ingestion deduplicates, normalizes, and groups behavioral records instantly.",
  },
  {
    title: "Identify valuable customer groups before competitors do",
    body: "Surface early signals of high-propensity buyers before they reach enterprise sales qualification.",
  },
  {
    title: "Understand how different segments behave across seasons",
    body: "Compare seasonality curves side-by-side to predict stock requirements and marketing spend efficiency.",
  },
  {
    title: "Make informed marketing and business decisions with confidence",
    body: "Back creative campaigns and lifecycle emails with statistical certainty rather than gut instincts.",
  },
  {
    title: "Share live interactive insights effortlessly across teams",
    body: "Send secure link previews or embed live cohort counters into internal team dashboards and Notion docs.",
  },
];

export const footerNav = {
  Product: [
    { label: "Overview", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Enterprise", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status Telemetry", href: "#" },
    { label: "Security & Trust", href: "#" },
    { label: "Customer Stories", href: "#" },
  ],
  Company: [
    { label: "About Segmint", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Engineering", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
