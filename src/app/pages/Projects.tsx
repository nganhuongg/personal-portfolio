import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { ProjectDemo } from "../components/ProjectDemo";

type ProjectLink = {
  label: string;
  href: string;
  icon: typeof Github;
};

type StandardProject = {
  id: string;
  title: string;
  tech: string[];
  links: ProjectLink[];
  problem: string;
  useCase: string;
  technicalImplementation: string;
  results: string[];
  demoId?: string;
};

type EcgProject = {
  id: string;
  title: string;
  tech: string[];
  links: ProjectLink[];
  reportStyle: true;
};

type Project = StandardProject | EcgProject;

const projects: Project[] = [
  {
    id: "teacher-allocation",
    title: "TeachMap",
    tech: ["C++", "Graph Algorithms", "Min-Cost Max-Flow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tony-buildd/Soda-hack",
        icon: Github,
      },
      {
        label: "Demo",
        href: "https://teacherallocation.vercel.app/",
        icon: ExternalLink,
      },
    ],
    problem:
      "TeachMap started from a rural access problem, not just a scheduling one. The slides frame a system where remote schools face a 63,000+ teacher shortage while 5,091 teachers are left unemployed or placed in already-sufficient schools, and many assignments are still made without any distance logic. In mountainous regions, that means children stay far from opportunity because the allocation process does not account for the road teachers actually have to travel.",
    useCase:
      "The tool is designed for provincial education departments that currently rely on spreadsheets and phone calls to personal contacts when staffing remote schools. TeachMap gives them one distance-aware allocation plan that can move teachers toward schools with real need while reducing placements so far from home that retention becomes fragile.",
    technicalImplementation:
      "I built the core optimizer in C++ as a min-cost max-flow network where teacher supply, school demand, and feasible placements are encoded directly in the graph. The solver uses extended Bellman-Ford augmenting paths to search for globally lower-cost assignments instead of convenience-based local matches. Around that engine, I shipped an end-to-end system with a Next.js frontend, a Flask API, and analytics outputs so administrators could generate allocations and compare optimizer performance against baseline strategies.",
    results: [
      "Reduced total teacher travel distance by 400+ km and saved 50+ staff hours for a Vietnamese provincial Department of Education.",
      "Benchmarked the min-cost max-flow solver against a greedy baseline and observed an average 40% reduction in total travel distance at similar computational cost on regular allocation workloads.",
      "Turned a manual process built on Excel sheets and personal calls into a repeatable allocation model grounded in school demand and road distance.",
    ],
  },
  {
    id: "eda-agent",
    title: "Risk-Driven EDA Agent",
    tech: ["Python", "Pandas", "Pydantic", "LLMs", "pytest"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nganhuongg/eda-agent",
        icon: Github,
      },
    ],
    problem:
      "The core problem was not just speeding up exploratory analysis, but making AI-assisted EDA trustworthy enough for real business data. Sending raw CSVs straight to a language model creates three risks at once: privacy exposure, hallucinated statistics, and no clear accountability for which numbers are real. I built the project around the idea that the system should solve those problems structurally, through architecture, rather than relying on prompt wording alone.",
    useCase:
      "The agent is for someone who wants a first-pass business report from a CSV without handing raw rows to an external model and without accepting unverified AI claims. It profiles the dataset, decides which columns deserve deeper investigation, generates grounded findings, and writes both a deterministic report and an optional narrative rewrite for readers who want a faster business summary.",
    technicalImplementation:
      "I designed the agent as a layered pipeline with one shared runtime state acting as session memory. Deterministic profilers first compute signals such as mean, skewness, missing ratio, outlier ratio, and temporal deltas, and only those summarized signals are passed to the LLM, never raw rows. A risk planner ranks which columns to analyze next, execution tools run the actual dataframe-level checks behind a strict access boundary, and the analyst agent returns structured JSON through Pydantic-validated schemas. The key control mechanism is a feedback-threaded Ralph Loop: at Gate 1, the agent revises a column finding when the critic rejects claims; at Gate 2, the assembled report is checked again for grounded numbers, labels, and ranking quality. The critic itself is fully deterministic Python, using `math.isclose()` against precomputed signals and analysis results, which avoids the usual LLM-evaluates-LLM trust failure. I also kept deterministic and narrative outputs separate: `report.md` stays fully grounded, while `report_llm.md` is an optional readability layer.",
    results: [
      "Built a signals-only analysis workflow that keeps confidential raw data confined to deterministic Python modules instead of exposing full rows to the language model.",
      "Implemented a deterministic critic and two-gate self-correction loop so grounded findings can be revised automatically before they reach the final report.",
      "Produced both a trustworthy deterministic report and a separate narrative rewrite, while covering the pipeline with 60+ unit tests to catch regressions as the system evolves.",
    ],
    demoId: "eda-agent",
  },
  {
    id: "ecg-classification",
    title: "ECG Classification",
    tech: ["Python", "TensorFlow", "scikit-learn"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nganhuongg/ECG-classification",
        icon: Github,
      },
    ],
    reportStyle: true,
  },
  {
    id: "environmental-dashboard",
    title: "Environmental Data Dashboard",
    tech: ["Next.js", "Mapbox", "FastAPI", "React"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kh268/urban-planner",
        icon: Github,
      },
      {
        label: "Demo",
        href: "https://www.figma.com/make/7EPh8E80Ela2YpQTDqVpPt/Environmental-Dashboard-Mockup?t=79OECReUxUjusudE-20&fullscreen=1",
        icon: ExternalLink,
      },
      {
        label: "Full Case Study",
        href: "https://www.notion.so/XANHinsights-327a00f7305b80cbb94ed6177235de1c?source=copy_link",
        icon: ExternalLink,
      },
    ],
    problem:
      "Urban planners often cannot identify which neighborhoods need green intervention first because heat, air-quality, and vegetation data live in separate expert-facing systems. The result is a gap between 'data exists' and 'data is usable': planners have to piece together NASA-style environmental sources manually, decisions become slow and fragmented, and prioritization can drift toward intuition or politics instead of evidence.",
    useCase:
      "The dashboard is built around three concrete planning workflows: finding the top-priority district to invest in first, opening a neighborhood profile to see heat, air, and vegetation together, and simulating an intervention to estimate how increasing NDVI could affect temperature and air quality. A second audience also shaped the product: non-experts who need to present clear, defensible findings to city officials without GIS expertise.",
    technicalImplementation:
      "I built the system as a full-stack geospatial product with Python and FastAPI on the backend and React with Mapbox on the frontend. The data pipeline processes district-level environmental indicators and centers the scoring model on three variables: NDVI, land-surface temperature, and aerosol optical depth. Instead of using a simple average, I chose a hybrid Entropy plus PCA scoring approach so correlated indicators would not overweight the final priority ranking. On the product side, I translated that model into two UX modes: an Analysis mode for exploring one layer across the city through a choropleth map, and a Hotspot Explorer for surfacing the top-priority districts as ranked, color-coded intervention targets. Clicking a district opens a right-side panel with the priority score breakdown, metric cards, a 12-month trend chart, key insights, and scenario-planning controls for estimating intervention impact.",
    results: [
      "Turned fragmented environmental data into a planner-facing translation layer that makes heat, air, and vegetation signals usable without deep GIS training.",
      "Created a Priority Zones workflow that helps a planner identify the highest-risk district in just a few clicks and explain why it ranked there.",
      "Shifted the output from passive visualization to actionable recommendations and impact estimates, helping close the 'so what' gap for planning decisions.",
    ],
  },
];

function ProjectSection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="space-y-2 border-t border-border/70 pt-6">
      <h3 className="text-xl text-primary">{title}</h3>
      <p className="text-base leading-relaxed text-foreground/75">{content}</p>
    </section>
  );
}

function isReportProject(project: Project): project is EcgProject {
  return "reportStyle" in project;
}

export function Projects() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  function hashToIndex(h: string): number {
    if (!h) return 0;
    const id = h.slice(1);
    const idx = projects.findIndex((p) => p.id === id);
    return idx !== -1 ? idx : 0;
  }

  const [activeTab, setActiveTab] = useState(() => hashToIndex(hash));

  useEffect(() => {
    setActiveTab(hashToIndex(hash));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash]);

  function handleTabChange(index: number) {
    setActiveTab(index);
    navigate(`/projects#${projects[index].id}`, { replace: true });
  }

  const project = projects[activeTab];

  return (
    <div className="w-full px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12">
          <h1 className="mb-6 text-5xl">Projects</h1>
          <div className="mb-6 h-1 w-20 rounded bg-primary"></div>
          <p className="max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Select a project below to read about the problem, use case, implementation, and
            results.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto">
          <div className="flex min-w-max border-b border-border">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleTabChange(i)}
                className={`relative px-5 py-3 text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeTab === i
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.title}
                {activeTab === i && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div key={project.id} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-accent/30 bg-accent/20 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="h-px w-24 bg-border" />
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/18 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          {isReportProject(project) ? (
            <ProjectDemo projectId={project.id} />
          ) : (
            <>
              <ProjectSection title="Problem" content={project.problem} />
              <ProjectSection title="Use Case" content={project.useCase} />
              <ProjectSection
                title="Technical Implementation"
                content={project.technicalImplementation}
              />
              <section className="space-y-4 border-t border-border/70 pt-6">
                <h3 className="text-xl text-primary">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3 text-base text-foreground/75">
                      <span className="mt-1 text-primary">-</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </section>
              {project.demoId && (
                <section className="space-y-4 border-t border-border/70 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-primary">Interactive Demo</h3>
                    <p className="max-w-3xl text-sm text-muted-foreground">
                      Live visual walkthrough of the project output and workflow.
                    </p>
                  </div>
                  <ProjectDemo projectId={project.demoId} />
                </section>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
