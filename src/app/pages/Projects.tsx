import { useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useLocation } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ProjectDemo } from "../components/ProjectDemo";

const projects = [
  {
    id: "teacher-allocation",
    title: "Teacher Allocation Optimization System",
    tech: ["C++", "Graph Algorithms", "Min-Cost Max-Flow"],
    description: "Developed an optimization engine to minimize teacher travel costs in mountainous regions while respecting availability constraints. Implemented using extended Bellman-Ford algorithm for shortest augmenting path.",
    highlights: [
      "Network flow modeling with graph theory",
      "40% reduction in travel costs vs greedy approach",
      "Handles 500+ allocation scenarios",
    ],
    github: "https://github.com/tony-buildd/Soda-hack",
    demo: "https://teacherallocation.vercel.app/",
  },
  {
    id: "eda-agent",
    title: "Automated EDA Agent",
    tech: ["Python", "Pandas", "Matplotlib", "LLMs"],
    description: "Autonomous exploratory data analysis system that generates comprehensive statistical reports and visualizations automatically from any dataset.",
    highlights: [
      "Automated statistical profiling",
      "Dynamic visualization generation",
      "Outlier detection and correlation analysis",
    ],
    github: "https://github.com/nganhuongg/eda-agent",
  },
  {
    id: "ecg-classification",
    title: "ECG Classification",
    tech: ["Python", "TensorFlow", "scikit-learn"],
    description: "Multi-label classification model for cardiovascular diagnostics with focus on class imbalance handling and robust evaluation metrics.",
    highlights: [
      "Handled severe class imbalance",
      "Comprehensive model evaluation framework",
      "Optimization for clinical accuracy",
    ],
    github: "https://github.com/nganhuongg/ECG-classification",
  },
  {
    id: "environmental-dashboard",
    title: "Environmental Data Dashboard",
    tech: ["Next.js", "Mapbox", "FastAPI", "React"],
    description: "Interactive geospatial visualization platform for environmental metrics including temperature, tree coverage, and urban development patterns.",
    highlights: [
      "Real-time map visualization",
      "Multi-layer data integration",
      "Statistical correlation analysis",
    ],
    github: "https://github.com/kh268/urban-planner",
    demo: "https://www.figma.com/make/7EPh8E80Ela2YpQTDqVpPt/Environmental-Dashboard-Mockup?t=79OECReUxUjusudE-20&fullscreen=1",
  },
];

export function Projects() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = hash.slice(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    // Wait one frame so layout is fully painted before scrolling to the anchor card.
    requestAnimationFrame(() => {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl mb-6">Projects</h1>
          <div className="h-1 w-20 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A collection of optimization systems, machine learning models, and data analysis tools
            built to solve real-world problems.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              id={project.id}
              key={index}
              className={`scroll-mt-24 p-10 transition-all ${
                hash === `#${project.id}`
                  ? "border-primary/60 shadow-lg ring-2 ring-primary/15"
                  : "hover:shadow-lg"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl mb-4">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-accent/20 text-primary rounded-lg text-sm font-medium border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h3 className="text-xl mb-4 text-primary">Key Highlights</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start text-base">
                        <span className="text-accent mr-3 mt-1">&bull;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <ProjectDemo projectId={project.id} />

                <div className="flex gap-4 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="h-11">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Button>
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="h-11">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </Button>
                    </a>
                  ) : null}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
