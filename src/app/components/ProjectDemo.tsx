import { Card } from "./ui/card";
import { EDAAgentDashboard } from "./demos/EDAAgentDashboard";
import { ECGAnalysisDashboard } from "./demos/ECGAnalysisDashboard";

interface ProjectDemoProps {
  projectId: string;
}

export function ProjectDemo({ projectId }: ProjectDemoProps) {
  if (
    projectId === "teacher-allocation" ||
    projectId === "environmental-dashboard"
  ) {
    return null;
  }

  if (projectId === "eda-agent") {
    return (
      <Card className="p-8 bg-gradient-to-br from-muted/30 to-accent/10 border-accent/30">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl text-primary">Interactive Demo</h3>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Interactive rendering of the autonomous EDA audit report, focused on risk ranking, outliers, correlations, and dataset structure.
            </p>
          </div>
          <EDAAgentDashboard />
        </div>
      </Card>
    );
  }

  if (projectId === "ecg-classification") {
    return (
      <Card className="p-8 bg-gradient-to-br from-muted/30 to-accent/10 border-accent/30">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl text-primary">Interactive Demo</h3>
            <p className="max-w-3xl text-sm text-muted-foreground">
              Structured notebook findings translated into reusable React charts for the ECG classification case study.
            </p>
          </div>
          <ECGAnalysisDashboard />
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-muted/30 to-accent/10 border-accent/30">
      <div className="space-y-4">
        <h3 className="text-xl text-primary">Interactive Demo</h3>
        <div className="bg-card rounded-xl p-16 flex items-center justify-center min-h-[320px] border-2 border-dashed border-border">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-2">
              Demo visualization for <span className="font-mono text-primary">{projectId}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Interactive component will be added here
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
