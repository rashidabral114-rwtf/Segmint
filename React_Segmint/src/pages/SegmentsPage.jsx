import React, { useState } from "react";
import BreadcrumbStrip from "../components/layout/BreadcrumbStrip";
import {
  clusterSummary,
  clusterDistribution,
} from "../data/otherPagesData";

export default function SegmentsPage() {
  const [kValue, setKValue] = useState(clusterSummary.optimalK);
  const [clusterState, setClusterState] = useState("idle"); // idle | running | converged

  const handleRunCluster = () => {
    setClusterState("running");
    setTimeout(() => {
      setClusterState("converged");
      setTimeout(() => {
        setClusterState("idle");
      }, 2200);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      <BreadcrumbStrip
        currentSection="Segments"
        title="K-Means Clustering Engine"
        badgeText="Model: RFM-Euclidean v2.4"
        actions={
          <button
            type="button"
            className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-body-medium text-body-medium flex items-center gap-1.5 transition-colors text-xs"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span>Configure Features</span>
          </button>
        }
      />

      {/* Top Clustering Configuration Studio */}
      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-label-xs text-label-xs uppercase font-semibold text-primary">
            Algorithmic Cohort Partitioning
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            K-Means Centroid Tuning
          </h2>
          <p className="font-body-base text-xs text-on-surface-variant">
            Adjust target cluster count to discover natural groupings based on
            Recency (days), Frequency (order cadence), and Monetary value (USD).
          </p>
        </div>

        {/* Interactive Slider & Run Button */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
          <div className="flex flex-col gap-1 w-full sm:w-48">
            <div className="flex items-center justify-between text-xs font-semibold text-on-surface">
              <span>Cluster Count</span>
              <span className="text-primary font-mono" id="k-value-display">
                k = {kValue}
              </span>
            </div>
            <input
              id="k-slider"
              type="range"
              min={2}
              max={10}
              value={kValue}
              onChange={(e) => setKValue(Number(e.target.value))}
              className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <button
            id="run-cluster-btn"
            type="button"
            disabled={clusterState === "running"}
            onClick={handleRunCluster}
            className={`h-10 px-5 rounded-lg font-body-medium text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
              clusterState === "running"
                ? "bg-primary opacity-80 text-on-primary pointer-events-none"
                : clusterState === "converged"
                ? "bg-tertiary text-on-tertiary"
                : "bg-primary-container text-on-primary hover:bg-primary"
            }`}
          >
            {clusterState === "running" && (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  refresh
                </span>
                <span>Optimizing Centroids...</span>
              </>
            )}
            {clusterState === "converged" && (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  check
                </span>
                <span>Convergence Reached (1.2s)</span>
              </>
            )}
            {clusterState === "idle" && (
              <>
                <span className="material-symbols-outlined text-[18px]">
                  play_arrow
                </span>
                <span>Re-run Optimization</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Model Diagnostic Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
          <span className="font-label-xs uppercase text-outline block">
            Silhouette Score
          </span>
          <span className="font-metric-lg font-semibold text-on-surface block mt-1">
            {clusterSummary.silhouetteScore}
          </span>
          <span className="text-[10px] text-tertiary font-semibold">
            Optimal separation (&gt; 0.70)
          </span>
        </div>
        <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
          <span className="font-label-xs uppercase text-outline block">
            Inertia / WCSS
          </span>
          <span className="font-metric-lg font-semibold text-on-surface block mt-1 font-mono">
            {clusterSummary.inertiaScore}
          </span>
          <span className="text-[10px] text-on-surface-variant">
            Elbow point reached
          </span>
        </div>
        <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
          <span className="font-label-xs uppercase text-outline block">
            Clustered Records
          </span>
          <span className="font-metric-lg font-semibold text-on-surface block mt-1">
            {clusterSummary.totalClustered}
          </span>
          <span className="text-[10px] text-primary font-semibold">
            100% coverage
          </span>
        </div>
        <div className="p-4 rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
          <span className="font-label-xs uppercase text-outline block">
            Iterations to Converge
          </span>
          <span className="font-metric-lg font-semibold text-on-surface block mt-1">
            {clusterSummary.iterations} steps
          </span>
          <span className="text-[10px] text-tertiary font-semibold">
            Duration: {clusterSummary.convergenceTime}
          </span>
        </div>
      </div>

      {/* Cluster Distribution Table */}
      <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-xs border border-outline-variant/10">
        <h3 className="font-headline-md text-base font-semibold text-on-surface mb-3">
          Identified Centroid Profiles
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-xs uppercase tracking-wider">
                <th className="p-3">Cluster ID</th>
                <th className="p-3">Segment Name</th>
                <th className="p-3">Cohort Size</th>
                <th className="p-3">Avg Recency</th>
                <th className="p-3">Avg Frequency</th>
                <th className="p-3 text-right">Avg Monetary Spend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {clusterDistribution.map((cluster) => (
                <tr key={cluster.clusterId} className="hover:bg-surface-container-low/50">
                  <td className="p-3 font-mono font-semibold text-primary">
                    {cluster.clusterId}
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${cluster.color}`}></span>
                      <span className="font-semibold text-on-surface">
                        {cluster.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 font-mono text-on-surface">
                    {cluster.size}
                  </td>
                  <td className="p-3 text-on-surface-variant">
                    {cluster.avgRecency}
                  </td>
                  <td className="p-3 text-on-surface-variant">
                    {cluster.avgFrequency}
                  </td>
                  <td className="p-3 text-right font-code-inline font-semibold text-on-surface">
                    {cluster.avgSpend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
