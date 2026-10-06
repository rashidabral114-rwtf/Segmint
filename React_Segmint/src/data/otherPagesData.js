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

export const docModules = [
  {
    id: "MODULE_01",
    icon: "flag",
    title: "Getting Started & Architecture",
    description: "Foundations of canonical identity resolution, distributed indexing, and core pipeline mechanics.",
    articleCount: 14,
    articles: [
      { title: "Platform Quickstart: Ingesting your first 10k profiles", readTime: "4 min" },
      { title: "Canonical Identity Graph & Entity Resolution", readTime: "6 min" },
      { title: "Core Terminology: Centroids, Inertia, Ensembles", readTime: "3 min" },
    ],
  },
  {
    id: "MODULE_02",
    icon: "database",
    title: "Ingestion & Warehouses",
    description: "Direct lakehouse adapters, Debezium change data capture, schema mutation governance, and batch loads.",
    articleCount: 22,
    articles: [
      { title: "Connecting Snowflake, BigQuery & Databricks", readTime: "5 min" },
      { title: "Real-Time Telemetry Streaming via CDC & Kafka", readTime: "7 min" },
      { title: "DLQ Remediation & Schema Strict Enforcing", readTime: "4 min" },
    ],
  },
  {
    id: "MODULE_03",
    icon: "hub",
    title: "Clustering & ML Engine",
    description: "Mathematical tuning of iterative centroid convergence, dimensional scalar transforms, and automated drift.",
    articleCount: 19,
    articles: [
      { title: "K-Means Hyperparameter Tuning & Silhouette", readTime: "8 min" },
      { title: "Z-Score Normalization vs MinMax Scalers", readTime: "5 min" },
      { title: "Automated Recalibration & Drift Thresholds", readTime: "6 min" },
    ],
  },
  {
    id: "MODULE_04",
    icon: "filter_alt",
    title: "Segment Rules & Query Engine",
    description: "Constructing multi-tier boolean logic, time-decay coefficients, and historical back-populating cohort gates.",
    articleCount: 17,
    articles: [
      { title: "Building Composite Rules with Nested AND/OR", readTime: "5 min" },
      { title: "Tracking Behavioral Decay & Historical Windows", readTime: "4 min" },
      { title: "Segment Membership Audit Logs & Versioning", readTime: "3 min" },
    ],
  },
  {
    id: "MODULE_05",
    icon: "ios_share",
    title: "Automated Exports & Delivery",
    description: "Synchronizing cohort changes down to marketing cloud destinations, CRM endpoints, and object stores.",
    articleCount: 25,
    articles: [
      { title: "PGP-Encrypted Parquet Dumps to Amazon S3", readTime: "6 min" },
      { title: "High-Throughput Webhooks for Customer.io", readTime: "4 min" },
      { title: "Automated Slack & Mailgun Digest Formatting", readTime: "3 min" },
    ],
  },
  {
    id: "MODULE_06",
    icon: "shield",
    title: "Governance, RBAC & Security",
    description: "Enterprise boundary enforcement, cryptographic access tokens, PII sanitization masks, and audit tracks.",
    articleCount: 11,
    articles: [
      { title: "Mandatory 2FA & SAML / Okta SSO Integration", readTime: "5 min" },
      { title: "SOC-2 Type II & PII Field Masking Best Practices", readTime: "7 min" },
      { title: "Zero-Downtime API Key Rotation Strategy", readTime: "4 min" },
    ],
  },
];

export const faqItems = [
  {
    id: "faq-1",
    icon: "scatter_plot",
    question: "Why did my K-Means cluster count automatically shift from k=6 to k=4?",
    answerParts: [
      "Segmint executes a continuous silhouette validation test during nocturnal recalculations. If the mean silhouette coefficient across your high-dimensional space drops below the system stability baseline (s < 0.65), the clustering supervisor invokes the Elbow heuristic.",
      "This automatically merges overlapping centroids with an inter-cluster Euclidean distance under 0.14σ to preserve analytical significance. You can pin a fixed k in Segment Settings → Recalibration Policies → Static Clustered K.",
    ],
    defaultOpen: true,
  },
  {
    id: "faq-2",
    icon: "error_outline",
    question: "How do I resolve 'E_SCHEMA_TYPE_MISMATCH' errors in the Kafka ingestion pipe?",
    answerParts: [
      "This error triggers when incoming Avro or JSON telemetry payloads breach the registered schema contract (e.g., an ISO-8601 string arriving in a field mapped as Unix Epoch timestamp integer).",
    ],
    codeSnippet: "$ segmint quarantine inspect --topic=customer-events-stream --error=E_SCHEMA_TYPE_MISMATCH",
    answerFollowup: "You can inject a live casting transform under Data Sources → Schema Registry or re-route malformed records to your designated Dead Letter Queue (DLQ) without interrupting the stream consumer.",
    defaultOpen: false,
  },
  {
    id: "faq-3",
    icon: "alt_route",
    question: "Can I export segments directly into Salesforce and HubSpot CRM simultaneously?",
    answerParts: [
      "Yes. Segmint's Multi-Destination Dispatcher guarantees parallel fan-out replication. When an entity qualifies or churns out of a cohort, webhook dispatchers publish discrete idempotency tokens (X-Segmint-Idempotency-Key) to both CRM connectors concurrently. Field transform rules are applied independently per destination adapter.",
    ],
    defaultOpen: false,
  },
  {
    id: "faq-4",
    icon: "speed",
    question: "What is the computational latency for real-time rule evaluation?",
    answerParts: [
      "Profile qualification rules operate against a distributed in-memory evaluation grid powered by Redis Enterprise and Rust WASM runtimes. The p95 SLA for single-profile rule evaluation upon webhook arrival is 92ms, with full downstream trigger dispatch completed under 320ms globally.",
    ],
    defaultOpen: false,
  },
];

export const teamRoster = [
  {
    name: "Elena Scott (You)",
    email: "elena@acme.io",
    role: "Owner",
    avatarBg: "bg-primary-fixed text-on-primary-fixed",
    initials: "ES",
    twoFactorStatus: "Hardware Enforced",
    verified: true,
  },
  {
    name: "David Vance",
    email: "d.vance@acme.io",
    role: "Data Eng",
    avatarBg: "bg-secondary-fixed text-on-secondary-fixed",
    initials: "DV",
    twoFactorStatus: "Active",
    verified: true,
  },
  {
    name: "Marcus Thorne",
    email: "m.thorne@acme.io",
    role: "Growth Analyst",
    avatarBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    initials: "MT",
    twoFactorStatus: "Active",
    verified: true,
  },
  {
    name: "Sophia Chen",
    email: "sophia@acme.io",
    role: "Read-Only",
    avatarBg: "bg-surface-variant text-on-surface-variant",
    initials: "SC",
    twoFactorStatus: "Pending",
    verified: false,
  },
];

