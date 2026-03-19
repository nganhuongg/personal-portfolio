export type RiskPoint = {
  column: string;
  risk: number;
};

export type NumericAuditPoint = {
  column: string;
  count: number;
  minimum: number;
  median: number;
  maximum: number;
  outlierCount: number;
  outlierRatio: number;
};

export type MissingnessPoint = {
  column: string;
  missingCount: number;
  missingRatio: number;
};

export type CorrelationFinding = {
  left: string;
  right: string;
  pearsonR: number;
  note: string;
};

export type InsightPoint = {
  title: string;
  body: string;
};

export type PlotGalleryItem = {
  title: string;
  caption: string;
  imageKey: string;
};

export const edaAuditSummary = {
  totalSteps: 22,
  columnsAnalyzed: 12,
  pendingInvestigations: 0,
};

export const topRiskColumns: RiskPoint[] = [
  { column: "A Tree cover %", risk: 0.2684 },
  { column: "B Tree cover %", risk: 0.2536 },
  { column: "C Tree cover %", risk: 0.1629 },
  { column: "D Tree cover %", risk: 0.1242 },
  { column: "D δLST (°C)", risk: 0.0675 },
  { column: "A δLST (°C)", risk: 0.0618 },
  { column: "B δLST (°C)", risk: 0.0553 },
  { column: "C δLST (°C)", risk: 0.0133 },
];

export const numericAudit: NumericAuditPoint[] = [
  {
    column: "A Tree cover %",
    count: 106,
    minimum: 4.953,
    median: 31.111,
    maximum: 73.509,
    outlierCount: 2,
    outlierRatio: 0.0185,
  },
  {
    column: "B Tree cover %",
    count: 107,
    minimum: 5.857,
    median: 19.528,
    maximum: 58.992,
    outlierCount: 7,
    outlierRatio: 0.0654,
  },
  {
    column: "C Tree cover %",
    count: 107,
    minimum: 3.91,
    median: 16.893,
    maximum: 45.522,
    outlierCount: 3,
    outlierRatio: 0.028,
  },
  {
    column: "D Tree cover %",
    count: 107,
    minimum: 3.71,
    median: 14.654,
    maximum: 38.136,
    outlierCount: 1,
    outlierRatio: 0.0093,
  },
];

export const missingnessByColumn: MissingnessPoint[] = [
  { column: "Lansat Date", missingCount: 0, missingRatio: 0 },
  { column: "Urban area", missingCount: 0, missingRatio: 0 },
  { column: "State", missingCount: 0, missingRatio: 0 },
  { column: "A δLST (°C)", missingCount: 0, missingRatio: 0 },
  { column: "B δLST (°C)", missingCount: 0, missingRatio: 0 },
  { column: "C δLST (°C)", missingCount: 0, missingRatio: 0 },
  { column: "D δLST (°C)", missingCount: 0, missingRatio: 0 },
  { column: "D-A (°C)", missingCount: 0, missingRatio: 0 },
  { column: "A Tree cover %", missingCount: 2, missingRatio: 0.0185 },
  { column: "B Tree cover %", missingCount: 1, missingRatio: 0.0093 },
  { column: "C Tree cover %", missingCount: 1, missingRatio: 0.0093 },
  { column: "D Tree cover %", missingCount: 1, missingRatio: 0.0093 },
];

export const missingCellMap: Record<string, number[]> = {
  "Lansat Date": [],
  "Urban area": [],
  State: [],
  "A δLST (°C)": [],
  "B δLST (°C)": [],
  "C δLST (°C)": [],
  "D δLST (°C)": [],
  "D-A (°C)": [],
  "A Tree cover %": [2, 55],
  "B Tree cover %": [2],
  "C Tree cover %": [2],
  "D Tree cover %": [2],
};

export const correlationFindings: CorrelationFinding[] = [
  {
    left: "B Tree cover %",
    right: "C Tree cover %",
    pearsonR: 0.8835389902197959,
    note: "Strongest positive canopy correlation in the dataset.",
  },
  {
    left: "C Tree cover %",
    right: "D Tree cover %",
    pearsonR: 0.8550426296090914,
    note: "Adjacent tree-cover groups continue to move together tightly.",
  },
  {
    left: "A Tree cover %",
    right: "B Tree cover %",
    pearsonR: 0.84191298857973,
    note: "A and B canopy coverage share very similar structure.",
  },
  {
    left: "A Tree cover %",
    right: "A δLST (°C)",
    pearsonR: -0.42922562974295575,
    note: "Higher tree cover aligns with lower local temperature difference.",
  },
  {
    left: "D Tree cover %",
    right: "D δLST (°C)",
    pearsonR: -0.2951833230443273,
    note: "The cooling relationship exists in D as well, but more weakly.",
  },
  {
    left: "A δLST (°C)",
    right: "D-A (°C)",
    pearsonR: -0.8634504583937529,
    note: "Temperature delta structure is strongly tied to the D-A contrast variable.",
  },
];

export const insightSupport: InsightPoint[] = [
  {
    title: "Canopy variables are the main risk surface",
    body: "All top-risk columns are tree-cover or δLST variables, so the agent correctly concentrates its effort on the environmental signal rather than metadata columns.",
  },
  {
    title: "Most missingness is localized, not widespread",
    body: "Only the tree-cover columns have missing values, and even there the count is small. This supports downstream imputation or careful row filtering instead of a full data-source reset.",
  },
  {
    title: "Correlation is structural, not incidental",
    body: "Pearson correlations above 0.84 between canopy groups suggest repeated measurement structure or highly related spatial segments, which is exactly the kind of redundancy an audit should surface early.",
  },
  {
    title: "Cooling signal appears directionally consistent",
    body: "Negative correlations between tree cover and δLST indicate a plausible environmental story: more canopy tends to align with lower heat intensity.",
  },
];

export const anomalyFindings = [
  "A Tree cover % shows some outliers.",
  "A Tree cover % has strong linear relationships with peer features.",
  "B Tree cover % shows some outliers.",
  "B Tree cover % has strong linear relationships with peer features.",
  "C Tree cover % shows some outliers.",
  "C Tree cover % has strong linear relationships with peer features.",
  "D Tree cover % shows some outliers.",
  "D Tree cover % has strong linear relationships with peer features.",
  "D δLST (°C) shows some outliers.",
  "D δLST (°C) has strong linear relationships with peer features.",
  "A δLST (°C) shows some outliers.",
  "A δLST (°C) has strong linear relationships with peer features.",
];

export const generatedVisuals: PlotGalleryItem[] = [
  {
    title: "Missingness Heatmap",
    caption: "The generated audit heatmap confirms that missingness is concentrated in the tree-cover columns rather than spread across the whole table.",
    imageKey: "missing_heatmap",
  },
  {
    title: "A Tree Cover Distribution",
    caption: "Distribution output used by the agent to estimate spread, skew, and central tendency for the A canopy group.",
    imageKey: "a_tree_distribution",
  },
  {
    title: "B Tree Cover Boxplot",
    caption: "Boxplot evidence for why B Tree cover % was flagged with the strongest outlier profile among the canopy variables.",
    imageKey: "b_tree_boxplot",
  },
  {
    title: "C Tree Cover Correlation Heatmap",
    caption: "A generated peer-correlation view showing how strongly the canopy variables align in the C segment.",
    imageKey: "c_tree_correlation",
  },
  {
    title: "D Tree Cover Distribution",
    caption: "Another generated plot included to show how the audit report keeps per-column evidence available for manual review.",
    imageKey: "d_tree_distribution",
  },
];
