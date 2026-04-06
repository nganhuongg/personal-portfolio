import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "../ui/card";
import diagnosticLabelsDistributionImage from "../../../assets/ecg-plots/distribution_of_diagnostic_labels.png";
import f1DistributionImage from "../../../assets/ecg-plots/f1_score_vs_label_frequency.png";
import {
  ecgLabelPerformance,
  ecgSummary,
  interventionComparison,
  metricComparison,
  modelComparison,
  type MetricPair,
} from "./ecgAnalysisData";

const COLORS = {
  primary: "#2D6A4F",
  secondary: "#40916C",
  accent: "#74C69D",
  soft: "#B7E4C7",
  warning: "#D97706",
  danger: "#B91C1C",
};

function formatMetric(value: number) {
  return value.toFixed(3);
}

function CaseStudySection({
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

function ChartShell({
  title,
  description,
  chartClassName = "h-80",
  children,
}: {
  title: string;
  description: string;
  chartClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-border/70 bg-card/90 p-6 shadow-sm">
      <div className="space-y-5">
        <div className="space-y-2">
          <h5 className="text-lg text-primary">{title}</h5>
          <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
        </div>
        <div className={chartClassName}>{children}</div>
      </div>
    </Card>
  );
}

function PlotImageCard({
  title,
  description,
  imageSrc,
  alt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}) {
  return (
    <ChartShell
      title={title}
      description={description}
      chartClassName="h-auto"
    >
      <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
        <img src={imageSrc} alt={alt} className="h-auto w-full object-cover" />
      </div>
    </ChartShell>
  );
}

export function DatasetDistributionChart() {
  return (
    <PlotImageCard
      title="Distribution of Diagnostic Labels"
      description="This generated plot replaces the recreated bar chart so the interactive report now uses your latest ECG artifact directly. It makes the long-tail imbalance visible in the same form produced by your analysis workflow."
      imageSrc={diagnosticLabelsDistributionImage}
      alt="Distribution of diagnostic labels for ECG classification"
    />
  );
}

export function MetricComparisonChart({
  data,
}: {
  data: MetricPair[];
}) {
  return (
    <ChartShell
      title="Macro vs Micro F1"
      description="Macro F1 tracks rare labels much more harshly than Micro F1. The persistent gap between these two views is the clearest notebook-level signal that the problem is imbalance, not a lack of overall predictive signal."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 18, left: 8, bottom: 52 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fontSize: 11 }}
            label={{ value: "Experiment", position: "insideBottom", offset: -8 }}
          />
          <YAxis
            domain={[0, 1]}
            label={{ value: "F1 score", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value: number) => [formatMetric(value), "F1"]} />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 16 }} />
          <Bar dataKey="macroF1" name="Macro F1" fill={COLORS.primary} radius={[8, 8, 0, 0]} />
          <Bar dataKey="microF1" name="Micro F1" fill={COLORS.secondary} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function PerformanceScatterPlot() {
  return (
    <PlotImageCard
      title="Distribution of F1 Against Label Frequency"
      description="This generated plot replaces the recreated scatter chart so the report now uses the latest F1-versus-support artifact from your ECG workflow. It keeps the key message intact: rare labels cluster at weak F1 while frequent labels dominate the upper range."
      imageSrc={f1DistributionImage}
      alt="F1 score versus label frequency for ECG classification"
    />
  );
}

export function ModelComparisonChart({
  data,
}: {
  data: MetricPair[];
}) {
  return (
    <ChartShell
      title="Model Comparison"
      description="Increasing model complexity did not solve the hard part of the task. Random Forest kept a decent Micro F1 but collapsed on Macro F1, which means it still failed on the rare classes that matter most."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 18, left: 8, bottom: 52 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fontSize: 11 }}
            label={{ value: "Model", position: "insideBottom", offset: -8 }}
          />
          <YAxis
            domain={[0, 1]}
            label={{ value: "F1 score", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value: number) => [formatMetric(value), "F1"]} />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 16 }} />
          <Bar dataKey="macroF1" name="Macro F1" fill={COLORS.primary} radius={[8, 8, 0, 0]} />
          <Bar dataKey="microF1" name="Micro F1" fill={COLORS.warning} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function InterventionComparisonChart({
  data,
}: {
  data: MetricPair[];
}) {
  return (
    <ChartShell
      title="Intervention Comparison"
      description="Class weighting delivered the most meaningful Macro F1 lift in the notebook, while correlation filtering barely moved the result. That makes the constraint look data-driven: imbalance matters more than trimming feature redundancy."
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 18, left: 8, bottom: 52 }}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.25} />
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fontSize: 11 }}
            label={{ value: "Intervention", position: "insideBottom", offset: -8 }}
          />
          <YAxis
            domain={[0, 1]}
            label={{ value: "F1 score", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(value: number) => [formatMetric(value), "F1"]} />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: 16 }} />
          <Bar dataKey="macroF1" name="Macro F1" fill={COLORS.primary} radius={[8, 8, 0, 0]} />
          <Bar dataKey="microF1" name="Micro F1" fill={COLORS.soft} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartShell>
  );
}

export function ECGAnalysisDashboard() {
  const dominantLabels = [...ecgLabelPerformance]
    .sort((a, b) => b.count - a.count)
    .slice(0, 4)
    .map((entry) => entry.label)
    .join(", ");

  return (
    <div className="space-y-10">
      <Card className="overflow-hidden border-primary/15 bg-gradient-to-br from-primary/8 via-card to-accent/10 p-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              ECG Case Study
            </div>
            <div className="space-y-3">
              <h3 className="text-3xl">ECGAnalysisDashboard</h3>
              <p className="max-w-3xl text-base text-foreground/80">
                A notebook-to-frontend translation of the ECG classification study. The central finding is that class imbalance is the dominant bottleneck: weighting helps, correlation filtering barely helps, and a more complex Random Forest still struggles on rare labels.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="border-primary/15 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Labels Analyzed
              </p>
              <p className="mt-2 text-3xl text-primary">{ecgSummary.filteredLabelCount}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Filtered labels retained in the notebook evaluation.
              </p>
            </Card>
            <Card className="border-primary/15 bg-card/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Best Macro F1
              </p>
              <p className="mt-2 text-3xl text-primary">
                {formatMetric(metricComparison[1].macroF1)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Achieved by class-weighted logistic regression.
              </p>
            </Card>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Dominant Labels
          </p>
          <p className="mt-3 text-lg text-primary">{dominantLabels}</p>
        </Card>
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Weighted Gain
          </p>
          <p className="mt-3 text-lg text-primary">
            +{formatMetric(ecgSummary.macroImprovementFromWeighting)} Macro F1
          </p>
        </Card>
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Corr Filter Gain
          </p>
          <p className="mt-3 text-lg text-primary">
            +{formatMetric(ecgSummary.macroImprovementFromCorrelationFiltering)} Macro F1
          </p>
        </Card>
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Zero-F1 Labels
          </p>
          <p className="mt-3 text-lg text-primary">{ecgSummary.zeroF1AfterWeighting}</p>
          <p className="mt-1 text-sm text-muted-foreground">After class weighting.</p>
        </Card>
      </div>

      <CaseStudySection
        eyebrow="Data Distribution"
        title="A few diagnoses dominate the sample volume"
        summary="The notebook filtered the task down to 59 labels, but the support remains highly skewed. Most labels live in the long tail while only a small handful carry enough examples to consistently train strong decision boundaries."
      >
        <DatasetDistributionChart />
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why the tail matters
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Even after filtering, the notebook still evaluates 59 labels. Showing 30 classes instead of only the top few makes the imbalance visible: support falls off quickly after the dominant diagnoses, so many pathological labels never get enough examples to learn stable decision boundaries.
          </p>
        </Card>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Performance Metrics"
        title="Macro F1 tells the real story"
        summary="Micro F1 looks acceptable because common labels dominate the aggregate. Macro F1 stays much lower, which exposes how unevenly the system performs across rare and frequent diagnoses."
      >
        <MetricComparisonChart data={metricComparison} />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Diagnosis"
        title="Rare labels fall behind as support drops"
        summary="This scatter plot pairs each label's support with its extracted F1 score from the notebook classification report. The upward trend is exactly what we would expect from an imbalance-limited classifier."
      >
        <PerformanceScatterPlot />
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Experiments"
        title="Changing the model helps less than changing the class balance signal"
        summary="Two notebook experiments reinforce the same conclusion. Weighting the classes improves rare-label sensitivity more than feature pruning, while Random Forest adds complexity without fixing macro performance."
      >
        <Card className="border-border/70 bg-card/90 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why compare One-vs-Rest Logistic Regression and Random Forest
          </p>
          <div className="mt-3 space-y-3 text-sm text-muted-foreground">
            <p>
              One-vs-Rest logistic regression is a strong baseline for this ECG task because the
              labels are multi-label, the outputs need to stay interpretable per diagnosis, and
              class weighting can be applied directly to push the model toward rare-condition recall.
            </p>
            <p>
              Random Forest was included as a higher-capacity comparison to test whether nonlinear
              feature interactions would recover the tail classes better than a simpler linear
              boundary. The notebook result is useful precisely because it shows that extra model
              complexity alone does not fix the imbalance bottleneck.
            </p>
          </div>
        </Card>
        <div className="grid gap-6 xl:grid-cols-2">
          <ModelComparisonChart data={modelComparison} />
          <InterventionComparisonChart data={interventionComparison} />
        </div>
      </CaseStudySection>

      <CaseStudySection
        eyebrow="Conclusion"
        title="The limiting factor is data imbalance, not model complexity"
        summary="The notebook evidence is consistent across every view: supports are long-tailed, per-label F1 rises with frequency, weighting helps more than correlation filtering, and Random Forest does not rescue macro performance. The right next step is better minority-class coverage, not a more expressive model."
      >
        <Card className="border-primary/15 bg-primary/6 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Evidence 1
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Macro F1 rises from {formatMetric(metricComparison[0].macroF1)} to{" "}
                {formatMetric(metricComparison[1].macroF1)} with class weighting.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Evidence 2
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Correlation filtering adds only {formatMetric(ecgSummary.macroImprovementFromCorrelationFiltering)} Macro F1, so feature redundancy is not the main blocker.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                Evidence 3
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Random Forest drops to {formatMetric(modelComparison[1].macroF1)} Macro F1, showing that extra model complexity does not solve the tail-class problem.
              </p>
            </div>
          </div>
        </Card>
      </CaseStudySection>
    </div>
  );
}
