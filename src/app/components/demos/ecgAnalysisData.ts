export type LabelPerformancePoint = {
  label: string;
  count: number;
  f1: number;
  precision: number;
  recall: number;
};

export type MetricPair = {
  name: string;
  macroF1: number;
  microF1: number;
};

export const ecgLabelPerformance: LabelPerformancePoint[] = [
  { label: "1AVB", count: 157, f1: 0.42, precision: 0.55, recall: 0.34 },
  { label: "ABQRS", count: 653, f1: 0.47, precision: 0.7, recall: 0.35 },
  { label: "AFIB", count: 308, f1: 0.83, precision: 0.83, recall: 0.83 },
  { label: "AFLT", count: 12, f1: 0.44, precision: 0.4, recall: 0.5 },
  { label: "ALMI", count: 64, f1: 0.22, precision: 0.34, recall: 0.16 },
  { label: "AMI", count: 71, f1: 0, precision: 0, recall: 0 },
  { label: "ANEUR", count: 18, f1: 0.13, precision: 0.17, recall: 0.11 },
  { label: "ASMI", count: 477, f1: 0.41, precision: 0.6, recall: 0.31 },
  { label: "ASMI_AC", count: 24, f1: 0.12, precision: 0.12, recall: 0.12 },
  { label: "ASMI_OLD", count: 14, f1: 0, precision: 0, recall: 0 },
  { label: "BIGU", count: 17, f1: 0.36, precision: 0.32, recall: 0.41 },
  { label: "CLBBB", count: 108, f1: 0.79, precision: 0.84, recall: 0.75 },
  { label: "CRBBB", count: 123, f1: 0.7, precision: 0.79, recall: 0.63 },
  { label: "DIG", count: 40, f1: 0.21, precision: 0.27, recall: 0.17 },
  { label: "EL", count: 18, f1: 0, precision: 0, recall: 0 },
  { label: "HVOLT", count: 10, f1: 0, precision: 0, recall: 0 },
  { label: "ILBBB", count: 15, f1: 0.06, precision: 0.06, recall: 0.07 },
  { label: "ILMI", count: 98, f1: 0.24, precision: 0.4, recall: 0.17 },
  { label: "IMI", count: 505, f1: 0.42, precision: 0.58, recall: 0.33 },
  { label: "IMI_AC", count: 9, f1: 0, precision: 0, recall: 0 },
  { label: "INJAL", count: 24, f1: 0.04, precision: 0.05, recall: 0.04 },
  { label: "INJAS", count: 36, f1: 0.15, precision: 0.17, recall: 0.14 },
  { label: "INVT", count: 63, f1: 0.05, precision: 0.12, recall: 0.03 },
  { label: "IPLMI", count: 11, f1: 0, precision: 0, recall: 0 },
  { label: "IRBBB", count: 227, f1: 0.22, precision: 0.39, recall: 0.15 },
  { label: "ISCAL", count: 141, f1: 0.09, precision: 0.21, recall: 0.06 },
  { label: "ISCAS", count: 27, f1: 0.08, precision: 0.1, recall: 0.07 },
  { label: "ISCIL", count: 35, f1: 0, precision: 0, recall: 0 },
  { label: "ISCIN", count: 50, f1: 0.11, precision: 0.17, recall: 0.08 },
  { label: "ISCLA", count: 24, f1: 0.06, precision: 0.11, recall: 0.04 },
  { label: "ISC_", count: 260, f1: 0.51, precision: 0.7, recall: 0.41 },
  { label: "IVCD", count: 170, f1: 0.03, precision: 0.2, recall: 0.02 },
  { label: "LAFB", count: 328, f1: 0.76, precision: 0.78, recall: 0.74 },
  { label: "LAO/LAE", count: 81, f1: 0.09, precision: 0.18, recall: 0.06 },
  { label: "LMI", count: 45, f1: 0.07, precision: 0.2, recall: 0.04 },
  { label: "LNGQT", count: 23, f1: 0, precision: 0, recall: 0 },
  { label: "LOWT", count: 102, f1: 0.11, precision: 0.29, recall: 0.07 },
  { label: "LPFB", count: 39, f1: 0.52, precision: 0.5, recall: 0.54 },
  { label: "LPR", count: 60, f1: 0.13, precision: 0.18, recall: 0.1 },
  { label: "LVH", count: 427, f1: 0.47, precision: 0.7, recall: 0.36 },
  { label: "LVOLT", count: 37, f1: 0, precision: 0, recall: 0 },
  { label: "NDT", count: 351, f1: 0.14, precision: 0.32, recall: 0.09 },
  { label: "NORM", count: 1927, f1: 0.82, precision: 0.81, recall: 0.83 },
  { label: "NST_", count: 152, f1: 0.08, precision: 0.29, recall: 0.05 },
  { label: "NT_", count: 88, f1: 0.02, precision: 0.2, recall: 0.01 },
  { label: "PAC", count: 90, f1: 0.1, precision: 0.23, recall: 0.07 },
  { label: "PACE", count: 69, f1: 0.7, precision: 0.75, recall: 0.65 },
  { label: "PVC", count: 238, f1: 0.36, precision: 0.63, recall: 0.25 },
  { label: "QWAVE", count: 106, f1: 0.02, precision: 0.1, recall: 0.01 },
  { label: "RAO/RAE", count: 19, f1: 0.31, precision: 0.3, recall: 0.32 },
  { label: "RVH", count: 26, f1: 0.24, precision: 0.31, recall: 0.19 },
  { label: "SARRH", count: 144, f1: 0.1, precision: 0.31, recall: 0.06 },
  { label: "SBRAD", count: 138, f1: 0.55, precision: 0.64, recall: 0.49 },
  { label: "SR", count: 3329, f1: 0.92, precision: 0.88, recall: 0.96 },
  { label: "STACH", count: 169, f1: 0.67, precision: 0.7, recall: 0.63 },
  { label: "STD_", count: 201, f1: 0.12, precision: 0.28, recall: 0.07 },
  { label: "SVARR", count: 32, f1: 0.17, precision: 0.19, recall: 0.16 },
  { label: "VCLVH", count: 172, f1: 0.06, precision: 0.22, recall: 0.03 },
  { label: "WPW", count: 15, f1: 0.36, precision: 0.38, recall: 0.33 },
];

export const metricComparison: MetricPair[] = [
  { name: "Baseline", macroF1: 0.2554798563859156, microF1: 0.6401159257701117 },
  { name: "Class Weighted", macroF1: 0.2708288916362645, microF1: 0.42985327188119254 },
];

export const modelComparison: MetricPair[] = [
  { name: "Logistic Regression", macroF1: 0.2708288916362645, microF1: 0.42985327188119254 },
  { name: "Random Forest", macroF1: 0.11857396045012156, microF1: 0.6131735256682224 },
];

export const interventionComparison: MetricPair[] = [
  { name: "Baseline", macroF1: 0.2554798563859156, microF1: 0.6401159257701117 },
  { name: "Class Weighting", macroF1: 0.2708288916362645, microF1: 0.42985327188119254 },
  { name: "Weighting + Filter", macroF1: 0.25764383924920486, microF1: 0.4039357193806906 },
];

export const ecgSummary = {
  filteredLabelCount: 59,
  avgPredictedLabelsPerEcg: 2.1045871559633027,
  avgTrueLabelsPerEcg: 2.802064220183486,
  zeroF1AfterWeighting: 2,
  macroImprovementFromWeighting: 0.01534903525034892,
  macroImprovementFromCorrelationFiltering: 0.002163982863289282,
};
