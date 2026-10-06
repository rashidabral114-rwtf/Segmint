// Segments & Clustering Data
export const clusterSummary = {
  optimalK: 4,
  silhouetteScore: 0.782,
  inertiaScore: "1.42e5",
  totalClustered: "48,290 records",
  iterations: 12,
  convergenceTime: "1.2s",
};

export const clusterDistribution = [
  {
    clusterId: "C1",
    name: "High-LTV Advocates",
    size: "16,420 (34%)",
    avgRecency: "4.2 days",
    avgFrequency: "14.2 orders",
    avgSpend: "$420.00",
    color: "bg-primary",
  },
  {
    clusterId: "C2",
    name: "Steady Loyalists",
    size: "13,040 (27%)",
    avgRecency: "12.8 days",
    avgFrequency: "8.1 orders",
    avgSpend: "$185.50",
    color: "bg-secondary-container",
  },
  {
    clusterId: "C3",
    name: "Seasonal Shoppers",
    size: "11,100 (23%)",
    avgRecency: "38.5 days",
    avgFrequency: "4.2 orders",
    avgSpend: "$95.20",
    color: "bg-secondary-fixed-dim",
  },
  {
    clusterId: "C4",
    name: "At-Risk Churners",
    size: "7,730 (16%)",
    avgRecency: "84.1 days",
    avgFrequency: "2.1 orders",
    avgSpend: "$74.00",
    color: "bg-error",
  },
];

// Analytics Data
export const analyticsFunnel = [
  { stage: "Audience Ingested", count: "148,290", percentage: "100%" },
  { stage: "Behavioral Qualification", count: "98,420", percentage: "66.3%" },
  { stage: "Clustered into Cohort", count: "48,290", percentage: "32.5%" },
  { stage: "Dispatched to Destination", count: "42,100", percentage: "28.3%" },
];

export const retentionCohortMatrix = [
  { cohort: "Sep 2024", size: "12,400", m0: "100%", m1: "88.2%", m2: "79.4%", m3: "74.1%" },
  { cohort: "Aug 2024", size: "11,850", m0: "100%", m1: "86.5%", m2: "77.8%", m3: "72.4%" },
  { cohort: "Jul 2024", size: "10,920", m0: "100%", m1: "85.1%", m2: "76.0%", m3: "70.9%" },
  { cohort: "Jun 2024", size: "10,100", m0: "100%", m1: "84.3%", m2: "74.9%", m3: "69.5%" },
];

// Insights Data
export const automatedInsights = [
  {
    id: "ins-1",
    type: "High-Impact Opportunity",
    title: "Second-order retention uplift",
    description: "Customers who place a second order within 14 days have a 4.1x higher lifetime retention rate.",
    impact: "+$182K ARR potential",
    badgeColor: "bg-tertiary/10 text-tertiary",
    icon: "lightbulb",
  },
  {
    id: "ins-2",
    type: "Cluster Drift Warning",
    title: "Seasonal Shoppers churn acceleration",
    description: "Recency window has lengthened from 28 days to 42 days over the last 30 days.",
    impact: "1,240 accounts at risk",
    badgeColor: "bg-error/10 text-error",
    icon: "warning",
  },
  {
    id: "ins-3",
    type: "Acquisition Channel Synergy",
    title: "Direct API cohorts exhibit lowest churn",
    description: "Customers onboarded via API endpoints retain at 96.2% versus 81.4% through web signup.",
    impact: "SLA benchmark exceeded",
    badgeColor: "bg-primary/10 text-primary",
    icon: "insights",
  },
];

// Reports Data
export const scheduledReports = [
  {
    id: "REP-01",
    name: "Weekly Executive Cohort Summary",
    frequency: "Every Monday 08:00 UTC",
    format: "CSV & PDF",
    recipients: "founders@acme.io, growth@acme.io",
    status: "Active",
    lastRun: "Yesterday at 08:00",
  },
  {
    id: "REP-02",
    name: "Daily Churn Risk Flagged Accounts",
    frequency: "Daily at 00:00 UTC",
    format: "Webhook + Slack",
    recipients: "#growth-alerts",
    status: "Active",
    lastRun: "14 hours ago",
  },
  {
    id: "REP-03",
    name: "Monthly RFM Distribution Matrix",
    frequency: "1st of each month",
    format: "Parquet to S3",
    recipients: "data-warehouse@acme.io",
    status: "Active",
    lastRun: "Oct 01, 2024",
  },
];

// Data Sources Data
export const dataSourcesList = [
  {
    id: "ds-1",
    name: "Production PostgreSQL",
    type: "Warehouse Read-Replica",
    status: "Healthy",
    statusColor: "bg-tertiary-container/15 text-tertiary",
    latency: "12ms",
    recordsSynced: "4.8M events",
    icon: "database",
  },
  {
    id: "ds-2",
    name: "Snowflake Ingestion Pipe",
    type: "Reverse-CDP Sync",
    status: "Healthy",
    statusColor: "bg-tertiary-container/15 text-tertiary",
    latency: "38ms",
    recordsSynced: "12.4M events",
    icon: "cloud_sync",
  },
  {
    id: "ds-3",
    name: "Stripe Billing Webhook",
    type: "Real-time Event Stream",
    status: "Active",
    statusColor: "bg-tertiary-container/15 text-tertiary",
    latency: "5ms",
    recordsSynced: "182K events",
    icon: "payments",
  },
  {
    id: "ds-4",
    name: "Customer.io Outbound Sync",
    type: "Webhook Dispatch",
    status: "Active",
    statusColor: "bg-tertiary-container/15 text-tertiary",
    latency: "24ms",
    recordsSynced: "94K payloads",
    icon: "send",
  },
];

// Help Center Data
export const quickSearchTags = [
  "K-Means Silhouette Score",
  "Snowflake Reverse-CDP Setup",
  "Custom RFM Formulas",
  "Kafka DLQ Troubleshooting",
  "IP Allowlisting for Webhooks",
];

export const cliSnippets = [
  { label: "JavaScript / TypeScript SDK", command: "npm install @segmint/sdk" },
  { label: "Python Client Library", command: "pip install segmint-python" },
];
