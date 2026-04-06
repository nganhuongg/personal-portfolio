import { useState } from "react";
import {
  Github,
  ExternalLink,
  Award,
  Mail,
  Linkedin,
  ChevronDown,
  Code,
  Database,
  Brain,
  Globe,
  Download,
} from "lucide-react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBackground from "../../../image/2.jpg";
import aboutImage from "../../../image/1.jpg";
import resumePdf from "../../../Resume/resume.pdf";

function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.547l-5.129-6.704L5.21 22H1.95l7.606-8.692L1.5 2h6.713l4.636 6.106L18.244 2Zm-1.14 18h1.804L7.228 3.894H5.292L17.104 20Z" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

type FeaturedProject = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  github?: string;
  demo?: string;
  comingSoon?: boolean;
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "teacher-allocation",
    title: "TeachMap",
    // Tags displayed as #hashtags — gives a quick skill-scan at a glance
    tags: ["C++", "Graph Algorithms", "Min-Cost Max-Flow", "Optimization"],
    description:
      "Distance-aware teacher allocation system for remote schools, built with min-cost max-flow to replace spreadsheet-and-phone-call staffing decisions with a formal optimization model.",
    github: "https://github.com/tony-buildd/Soda-hack",
  },
  {
    id: "eda-agent",
    title: "Risk-Driven EDA Agent",
    tags: ["Python", "Pandas", "Pydantic", "LLMs", "pytest"],
    description:
      "Trustworthy EDA agent built around signals-only context, deterministic claim checking, and a two-gate self-correction loop for grounded business reports.",
    github: "https://github.com/nganhuongg/eda-agent",
  },
  {
    id: "ecg-classification",
    title: "ECG Classification System",
    tags: ["Python", "TensorFlow", "scikit-learn", "Machine Learning"],
    description:
      "Multi-label classification model for cardiovascular diagnostics with focused handling of severe class imbalance and robust evaluation metrics.",
    github: "https://github.com/nganhuongg/ECG-classification",
  },
  {
    id: "environmental-dashboard",
    title: "Environmental Dashboard",
    tags: ["Next.js", "Mapbox", "FastAPI", "React", "TypeScript"],
    description:
      "Planner-facing geospatial dashboard that ranks priority intervention zones using NDVI, land-surface temperature, and air-quality signals, then supports neighborhood analysis and scenario planning.",
    github: "https://github.com/kh268/urban-planner",
  },
  {
    id: "virtual-education-lab",
    title: "Virtual Education Lab",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "LLM APIs"],
    description:
      "AI-powered learning platform integrating LLM-based tutoring to guide student problem-solving through interactive workflows, with rule-based prompt orchestration that generates multi-level hints instead of direct answers.",
    comingSoon: true,
  },
];

const experiences = [
  {
    role: "Mathematics Research Assistant",
    organization: "Minerva University",
    location: "San Francisco, CA",
    period: "Sep 2025 - Present",
    highlights: [
      "Mathematical modeling and fluid mechanics applications",
      "Linearization techniques for non-linear systems",
      "Simulation-based analysis and research documentation",
    ],
  },
  {
    role: "Programming Student Consultant",
    organization: "YouthSF",
    location: "San Francisco, CA",
    period: "Sep 2025 - Present",
    highlights: [
      "Guided 20+ children in programming and robotics",
      "Developed a STEAM learning application for remote students",
      "Integrated an AI assistant to help students navigate resources",
    ],
  },
  {
    role: "Computer Science Olympiad Competitor",
    organization: "Phu Tho Province",
    location: "Vietnam",
    period: "2022 - 2025",
    highlights: [
      "Advanced algorithm implementation in C++",
      "Graph theory, dynamic programming, and network flow",
      "First Prize at Provincial Olympiad (2024)",
    ],
  },
];

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python (Proficient)", "C++ (Proficient)", "JavaScript / TypeScript", "SQL"],
  },
  {
    icon: Database,
    title: "Libraries",
    skills: [
      "scikit-learn",
      "pandas",
      "seaborn",
      "matplotlib",
      "tensorflow",
      "scipy"
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      "Logistic Regression",
      "Model Evaluation",
      "Agentic Workflow",
      "LLM-based Agents",
      "Data Engineering"
    ],
  },
  {
    icon: Globe,
    title: "Frameworks",
    skills: ["React & Next.js", "FastAPI", "REST APIs", "Flask", "Mapbox & Data Visualization", "PyTorch", "Pydantic"],
  },
];

const achievements = [
  {
    title: "First Prize",
    event: "Phu Tho Province Olympiad in Computer Science",
    date: "2024",
    description:
      "Top performer in the provincial-level competition, demonstrating excellence in algorithmic problem solving and optimization under time constraints.",
    // These are the specific techniques that came up in this competition
    algorithms: [
      "Graph Algorithms (BFS / DFS / Dijkstra)",
      "Dynamic Programming",
      "Binary Search",
      "Greedy Algorithms",
    ],
  },
  {
    title: "Silver Medal",
    event: "Vietnam Northern Summer Camp — Computer Science",
    date: "2023",
    description:
      "Recognized for outstanding performance in advanced data structures and algorithms at the regional training camp.",
    algorithms: [
      "Segment Trees",
      "Binary Search",
      "Sliding Window",
      "Network Flow",
    ],
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative left-1/2 min-h-[92vh] w-screen -translate-x-1/2 overflow-hidden bg-[#F1F5F2] md:min-h-screen">
      <ImageWithFallback
        src={heroBackground}
        alt="Portrait banner for Ngan Huong Nguyen"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/18 md:bg-black/16" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/18 to-black/10" />

      <div className="relative flex min-h-[92vh] w-full items-end px-4 pb-4 pt-0 md:min-h-screen md:px-12 md:pb-8 md:pt-0 lg:px-16">
        <div className="max-w-5xl text-white">
          <h1 className="font-['Satoshi','Inter',sans-serif] text-5xl font-bold tracking-[-0.04em] md:text-7xl">
            Ngan Huong Nguyen
          </h1>
          <div className="mt-4 space-y-1 text-sm font-medium uppercase tracking-[0.2em] text-white/88 md:text-base">
            <p>Minerva University, San Francisco</p>
            <p>Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection() {
  return (
    // id="resume" so the nav anchor can scroll here; scroll-mt-16 offsets the sticky nav
    <section id="resume" className="py-16 px-6 bg-white scroll-mt-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl mb-2">Resume</h2>
          <div className="h-1 w-16 bg-primary rounded mb-4"></div>
        </div>

        {/* Download bar */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-muted-foreground text-sm">Last updated: March 2026</p>
            <Button asChild className="bg-primary hover:bg-primary-dark">
              <a href={resumePdf} download="Ngan-Huong-Nguyen-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </Card>

      </div>
    </section>
  );
}

function AboutSection() {
  return (
    // id="about" lets the nav anchor link scroll here
    <section id="about" className="bg-white px-6 py-20 scroll-mt-16">
      <div className="mx-auto max-w-[1100px] rounded-[28px] border border-[#E5E7EB] bg-white p-8 md:p-10">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-['Satoshi','Inter',sans-serif] text-5xl font-semibold tracking-[-0.02em] text-primary md:text-6xl">
                About
              </p>
              <div className="max-w-2xl space-y-4 text-lg leading-8 text-foreground/80">
                <p>Hi, I&apos;m Huong.</p>
                <p>
                  I love figuring things out, not just how they work, but why they behave the way they do.
                </p>
                <p>
                  I&apos;m drawn to algorithms and systems, how they are formed, how they evolve. I keep
                  peeling back each layer of black boxes until they start to make sense.
                </p>
                <p>
                  There&apos;s something quiet and beautiful in structure, and in the uncertainty of
                  probability. It&apos;s what keeps pulling me deeper into computer science, never enough,
                  never finished.
                </p>
                <p>Still early, still learning, still exploring.</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -left-5 top-6 rounded-full border border-[#DCE7DF] bg-[#F7FBF8] px-4 py-2 text-sm text-primary shadow-sm">
              curiosity-driven
            </div>
            <div className="absolute -right-3 bottom-8 h-16 w-16 rounded-[20px] bg-[#E6F4EA]" />
            <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[#F7FBF8] p-3">
              <ImageWithFallback
                src={aboutImage}
                alt="Playful developer illustration"
                className="h-full w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Plain project card — always fully visible, square corners, no toggle.
function ProjectCard({ project }: { project: (typeof featuredProjects)[0] }) {
  return (
    <div className="border border-border rounded-none bg-card p-6 hover:shadow-md transition-shadow">
      <div className="space-y-3">
        {project.comingSoon ? (
          <h3 className="text-xl font-bold">{project.title}</h3>
        ) : (
          <Link
            to={`/projects#${project.id}`}
            className="text-xl font-bold hover:underline underline-offset-4"
          >
            {project.title}
          </Link>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-none font-medium border border-primary/20"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p className="text-foreground/70 leading-relaxed">{project.description}</p>
        <div className="flex gap-4 pt-1 flex-wrap">
          {project.comingSoon ? (
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Coming soon
            </span>
          ) : (
            <>
              <a
                href={project.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <Link
            to={`/projects#${project.id}`}
            className="text-sm text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Full Details →
          </Link>
            </>
          )}
          {project.demo && !project.comingSoon && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// A single collapsible achievement card.
// Collapsed: award icon + title + event name.
// Expanded: description + algorithm/technique tags.
function AchievementToggleCard({
  achievement,
  isExpanded,
  onToggle,
}: {
  achievement: (typeof achievements)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden transition-shadow hover:shadow-md">
      <button
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-accent/5 transition-colors"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-xl">{achievement.title}</h3>
            <p className="text-primary text-sm mt-1">{achievement.event}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-sm text-muted-foreground">{achievement.date}</span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      {/* Revealed on expand: description + technique tags */}
      {isExpanded && (
        <div className="px-6 pb-6 space-y-4 border-t border-border/50">
          <p className="text-foreground/70 leading-relaxed pt-4">{achievement.description}</p>
          <div>
            <p className="text-sm font-medium text-foreground/80 mb-3">
              Techniques & Algorithms used:
            </p>
            <div className="flex flex-wrap gap-2">
              {achievement.algorithms.map((algo) => (
                <span
                  key={algo}
                  className="text-xs px-2.5 py-1 bg-accent/20 text-primary rounded-full border border-accent/30"
                >
                  {algo}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function Home() {
  // Track which achievements are expanded.
  const [expandedAchievements, setExpandedAchievements] = useState<Set<number>>(new Set());

  function toggleAchievement(index: number) {
    setExpandedAchievements((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ResumeSection />

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      {/* id="projects" makes the nav anchor link scroll here. scroll-mt-16 adds
          offset so the sticky nav doesn't cover the section heading. */}
      <section id="projects" className="py-16 px-6 scroll-mt-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl mb-2">Projects</h2>
            <div className="h-1 w-16 bg-primary rounded mb-4"></div>
            <p className="text-muted-foreground">
              Click a project to expand its summary. For full implementation detail,{" "}
              use the{" "}
              <Link to="/projects" className="text-primary hover:underline">
                Full Details →
              </Link>{" "}
              link inside each card.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ────────────────────────────────────────────────────── */}
      <section id="experience" className="py-16 px-6 bg-card scroll-mt-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Experience</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-6">
                {/* Timeline dot and connecting line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/40 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl mb-1">{exp.role}</h3>
                  <p className="text-primary mb-0.5">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start text-sm">
                        <span className="text-accent mr-2 mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────────────────────────────────── */}
      <section id="skills" className="py-16 px-6 scroll-mt-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Skills</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1.5 bg-accent/15 text-foreground/80 rounded-lg border border-accent/25"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Achievements ──────────────────────────────────────────────────── */}
      <section id="achievements" className="py-16 px-6 bg-card scroll-mt-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl mb-2">Achievements</h2>
            <div className="h-1 w-16 bg-primary rounded mb-4"></div>
            <p className="text-muted-foreground">
              Click an achievement to reveal the specific algorithms and techniques involved.
            </p>
          </div>

          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <AchievementToggleCard
                key={index}
                achievement={achievement}
                isExpanded={expandedAchievements.has(index)}
                onToggle={() => toggleAchievement(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 px-6 scroll-mt-16">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Get In Touch</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <a
              href="mailto:nganhuong.nguyenn@gmail.com"
              className="group block text-center"
            >
              <div className="mb-4 flex justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground/80">nganhuong.nguyenn@gmail.com</p>
              </div>
            </a>

            <div className="mx-auto h-px w-16 bg-border md:h-16 md:w-px"></div>

            <a
              href="https://linkedin.com/in/nganhuongnguyenn"
              target="_blank"
              rel="noopener noreferrer"
              className="group block text-center"
            >
              <div className="mb-4 flex justify-center">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="text-foreground/80">linkedin.com/in/nganhuongnguyenn</p>
              </div>
            </a>

            <div className="mx-auto h-px w-16 bg-border md:h-16 md:w-px"></div>

            <a
              href="https://x.com/nganhuonggg"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-sm text-center"
            >
              <div className="mb-4 flex justify-center">
                <XLogo className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">X (Twitter)</p>
                <p className="text-foreground/80">@nganhuonggg</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
