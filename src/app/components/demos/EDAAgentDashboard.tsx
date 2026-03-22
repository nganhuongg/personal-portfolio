import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../ui/card";
import workflowImage from "../../../assets/eda-plots/structure.png";
import missingHeatmapImage from "../../../assets/eda-plots/missing_heatmap.png";
import aTreeDistributionImage from "../../../assets/eda-plots/a-tree-distribution-full.png";
import aTreeBoxplotImage from "../../../assets/eda-plots/a-tree-boxplot-full.png";
import aTreeCorrelationImage from "../../../assets/eda-plots/a-tree-correlation-full.png";
import bTreeDistributionImage from "../../../assets/eda-plots/b-tree-distribution-full.png";
import bTreeBoxplotImage from "../../../assets/eda-plots/b-tree-boxplot-full.png";
import bTreeCorrelationImage from "../../../assets/eda-plots/b-tree-correlation-full.png";
import cTreeDistributionImage from "../../../assets/eda-plots/c-tree-distribution-full.png";
import cTreeBoxplotImage from "../../../assets/eda-plots/c-tree-boxplot-full.png";
import cTreeCorrelationImage from "../../../assets/eda-plots/c-tree-correlation-full.png";
import dTreeDistributionImage from "../../../assets/eda-plots/d-tree-distribution-full.png";
import dTreeBoxplotImage from "../../../assets/eda-plots/d-tree-boxplot-full.png";
import dTreeCorrelationImage from "../../../assets/eda-plots/d-tree-correlation-full.png";
import {
  anomalyFindings,
  correlationFindings,
  correlationVisuals,
  edaAuditSummary,
  generatedVisuals,
  insightSupport,
  missingnessByColumn,
  numericAudit,
  topRiskColumns,
} from "./edaAgentData";

const COLORS = {
  primary: "#2D6A4F",
  secondary: "#40916C",
  accent: "#74C69D",
  soft: "#B7E4C7",
  warning: "#D97706",
};

const plotImageMap = {
  a_tree_distribution: aTreeDistributionImage,
  a_tree_boxplot: aTreeBoxplotImage,
  a_tree_correlation: aTreeCorrelationImage,
  b_tree_distribution: bTreeDistributionImage,
  b_tree_boxplot: bTreeBoxplotImage,
  b_tree_correlation: bTreeCorrelationImage,
  c_tree_distribution: cTreeDistributionImage,
  c_tree_boxplot: cTreeBoxplotImage,
  c_tree_correlation: cTreeCorrelationImage,
  d_tree_distribution: dTreeDistributionImage,
  d_tree_boxplot: dTreeBoxplotImage,
  d_tree_correlation: dTreeCorrelationImage,
};

function formatRisk(value: number) {
  return value.toFixed(3);
}

function formatPct(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

function Section({
  eyebrow,
  title,
  summary,
  children,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <div className="space-y-2">
          <h4 className="text-2xl">{title}</h4>
          <p className="max-w-3xl text-base text-muted-foreground">{summary}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border/70 bg-card/90 p-6 shadow-sm">
      <div className="space-y-5">
        <div className="space-y-2">
          <h5 className="text-lg text-primary">{title}</h5>
          <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </Card>
  );
}

function WorkflowIntro() {
  return (
    <ChartCard
      title="Agent Workflow"
      description="The demo starts with the agent pipeline itself, because the value of the project is not just the final charts. The workflow shows how deterministic profiling, orchestration, critique, analysis, and visualization connect into one audit loop."
    >
      <div className="space-y-4">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
          <img
            src={workflowImage}
            alt="EDA agent workflow and graph flow diagram"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <p className="text-sm font-semibold text-foreground">Input</p>
            <p className="mt-2 text-sm text-muted-foreground">
              User dataset enters a deterministic profiler that produces structured metadata and runtime state.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <p className="text-sm font-semibold text-foreground">Reasoning loop</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Orchestrator, signal extraction, risk planner, and critic form the audit loop before deeper analysis starts.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <p className="text-sm font-semibold text-foreground">Output</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Final result combines structured explanation, generated plots, and a portfolio-ready summary layer.
            </p>
          </div>
        </div>
      </div>
    </ChartCard>
  );
}

function RiskRankingChart() {
  const data = [...topRiskColumns].sort((a, b) => a.risk - b.risk);

  return (
    <ChartCard
      title="Top Risk Columns"
      description="This ranking comes directly from the latest deterministic audit report. It shows that the agent is prioritizing tree-cover and temperature columns rather than spending time on low-signal metadata."
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 12, right: 18, left: 20, bottom: 12 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
            <XAxis
              type="number"
              label={{ value: "Risk score", position: "insideBottom", offset: -4 }}
            />
            <YAxis
              type="category"
              dataKey="column"
              width={128}
              interval={0}
              tick={{ fontSize: 11 }}
              label={{ value: "Column", angle: -90, position: "insideLeft" }}
            />
            <Tooltip formatter={(value: number) => [formatRisk(value), "Risk"]} />
            <Bar dataKey="risk" radius={[0, 10, 10, 0]}>
              {data.map((item) => (
                <Cell
                  key={item.column}
                  fill={item.risk >= 0.2 ? COLORS.warning : item.risk >= 0.05 ? COLORS.secondary : COLORS.soft}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

function MissingnessHotspotCard() {
  return (
    <ChartCard
      title="Missingness Heatmap"
      description="This section now uses the actual generated `missing_heatmap.png` artifact from the EDA agent, so the report shows the same missingness evidence that the pipeline produced."
    >
      <div className="space-y-5">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
          <img
            src={missingHeatmapImage}
            alt="Generated missing-value heatmap from the EDA agent report"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {missingnessByColumn
            .filter((item) => item.missingCount > 0)
            .map((item) => (
              <div key={item.column} className="rounded-xl border border-border/60 bg-muted/20 p-4">
                <p className="text-sm font-semibold text-foreground">{item.column}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.missingCount} missing values ({formatPct(item.missingRatio)})
                </p>
              </div>
            ))}
        </div>
      </div>
    </ChartCard>
  );
}

function OutlierProfileChart() {
  return (
    <ChartCard
      title="Outlier Profile"
      description="The audit report highlights selective outlier behavior across tree-cover variables. This chart compares the count and ratio directly so the outlier burden is visible without switching back to the raw report."
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={numericAudit} margin={{ top: 12, right: 18, left: 8, bottom: 52 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
            <XAxis
              dataKey="column"
              interval={0}
              angle={-18}
              textAnchor="end"
              height={58}
              tick={{ fontSize: 11 }}
              label={{ value: "Numeric column", position: "insideBottom", offset: -8 }}
            />
            <YAxis
              yAxisId="left"
              label={{ value: "Outlier count", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={formatPct}
              label={{ value: "Outlier ratio", angle: 90, position: "insideRight" }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [
                name === "Outlier Ratio" ? formatPct(value) : value.toLocaleString(),
                name,
              ]}
            />
            <Bar yAxisId="left" dataKey="outlierCount" name="Outlier Count" fill={COLORS.primary} radius={[8, 8, 0, 0]} />
            <Bar yAxisId="right" dataKey="outlierRatio" name="Outlier Ratio" fill={COLORS.accent} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

function CorrelationReportCard() {
  return (
    <ChartCard
      title="Correlation Findings"
      description="This section combines the strongest report-style Pearson findings with the generated A, B, C, and D correlation heatmaps so the narrative and visual evidence stay together."
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          {correlationFindings.map((item) => (
            <div key={`${item.left}-${item.right}`} className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">
                {item.left} ↔ {item.right}
              </p>
              <p className="mt-2 text-sm text-primary">Pearson&apos;s r = {item.pearsonR.toFixed(4)}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {correlationVisuals.map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
                <img
                  src={plotImageMap[item.imageKey as keyof typeof plotImageMap]}
                  alt={item.title}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}

function SupportingIdeasCard() {
  return (
    <ChartCard
      title="Supporting Ideas"
      description="This replaces the older generic data-quality block with a more argument-driven format. Each point helps explain why the agent's findings matter and how they can guide the next analysis step."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {insightSupport.map((item) => (
          <div key={item.title} className="rounded-xl border border-border/60 bg-muted/20 p-4">
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

function AnomalyListCard() {
  return (
    <ChartCard
      title="Anomaly Checklist"
      description="The audit output is still preserved in checklist form so the demo keeps a direct bridge back to the agent's deterministic findings."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {anomalyFindings.map((finding) => (
          <div key={finding} className="flex items-start rounded-xl border border-border/60 bg-muted/15 p-3 text-sm text-muted-foreground">
            <span className="mr-3 mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
            {finding}
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

function GeneratedPlotsGallery() {
  return (
    <ChartCard
      title="Generated Plot Evidence"
      description="This section now focuses on the full distribution and boxplot set for A, B, C, and D so the evidence gallery stays centered on spread, quartiles, and outlier shape."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {generatedVisuals.map((item) => (
          <div key={item.title} className="space-y-3">
            <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
              <img
                src={plotImageMap[item.imageKey as keyof typeof plotImageMap]}
                alt={item.title}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

export function EDAAgentDashboard() {
  return (
    <div className="space-y-10">
      <Card className="overflow-hidden border-primary/15 bg-gradient-to-br from-primary/8 via-card to-accent/10 p-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              EDA Agent Demo
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl">Deterministic Data Audit Dashboard</h3>
              <p className="max-w-3xl text-base text-foreground/80">
                This version of the demo follows your agent workflow first, then walks through risk ranking, actual row-level missingness, report-style Pearson correlation findings, and the generated plot evidence from the latest dataset.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <Card className="border-primary/15 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Audit Steps
              </p>
              <p className="mt-2 text-3xl text-primary">{edaAuditSummary.totalSteps}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Executed in the latest report.
              </p>
            </Card>
            <Card className="border-primary/15 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Columns Analyzed
              </p>
              <p className="mt-2 text-3xl text-primary">{edaAuditSummary.columnsAnalyzed}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Measured directly from the CSV.
              </p>
            </Card>
            <Card className="border-primary/15 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Pending Issues
              </p>
              <p className="mt-2 text-3xl text-primary">{edaAuditSummary.pendingInvestigations}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                No pending investigations in the report.
              </p>
            </Card>
          </div>
        </div>
      </Card>

      <Section
        eyebrow="Workflow"
        title="The demo opens with the agent system itself"
        summary="Before showing findings, the portfolio now explains how the audit is produced. This makes the project feel like an agent product, not just a dashboard of post-hoc charts."
      >
        <WorkflowIntro />
      </Section>

      <Section
        eyebrow="Prioritization"
        title="Risk ranking still drives the first analyst move"
        summary="The latest report keeps the same core pattern: tree-cover and delta LST variables dominate the risk list, so the agent immediately focuses the audit on the environmental signal."
      >
        <RiskRankingChart />
      </Section>

      <Section
        eyebrow="Missingness"
        title="Missingness is sparse but localized"
        summary="Instead of a generic summary card, the demo now shows the generated missing-value heatmap and the exact missing count for the affected columns."
      >
        <MissingnessHotspotCard />
      </Section>

      <Section
        eyebrow="Distribution"
        title="Outliers remain selective, not global"
        summary="The report's outlier findings are now shown only where they matter most. B Tree cover % carries the sharpest outlier burden, while the rest of the canopy variables show lighter but still visible irregularity."
      >
        <OutlierProfileChart />
      </Section>

      <Section
        eyebrow="Correlation"
        title="Pearson relationships and heatmaps now sit together"
        summary="The correlation section now pairs analyst-style findings with the generated A, B, C, and D heatmaps so the written interpretation and image evidence are in one place."
      >
        <CorrelationReportCard />
      </Section>

      <Section
        eyebrow="Interpretation"
        title="Supporting ideas make the report easier to defend"
        summary="This section reframes the old data-quality block into supporting arguments. It is designed to help a reviewer understand why the agent's outputs are meaningful, not just what it flagged."
      >
        <div className="grid gap-6 xl:grid-cols-2">
          <SupportingIdeasCard />
          <AnomalyListCard />
        </div>
      </Section>

      <Section
        eyebrow="Evidence"
        title="Generated plots now focus on distribution and boxplot coverage"
        summary="The gallery keeps the full A, B, C, and D distribution and boxplot artifacts so the report still shows concrete outputs without repeating the correlation heatmaps."
      >
        <GeneratedPlotsGallery />
      </Section>
    </div>
  );
}
