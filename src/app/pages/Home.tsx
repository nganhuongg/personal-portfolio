import { Github, ExternalLink, Award, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroBackground from "../../../image/2.jpg";
import aboutImage from "../../../image/1.jpg";

function XLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2H21.5l-7.11 8.128L22.75 22h-6.547l-5.129-6.704L5.21 22H1.95l7.606-8.692L1.5 2h6.713l4.636 6.106L18.244 2Zm-1.14 18h1.804L7.228 3.894H5.292L17.104 20Z" />
    </svg>
  );
}

const featuredProjects = [
  {
    id: "teacher-allocation",
    title: "Teacher Allocation Optimizer",
    tech: "C++ • Graph Algorithms",
    description: "Min-Cost Max-Flow system for optimizing teacher assignment in mountainous regions.",
    github: "https://github.com/tony-buildd/Soda-hack",
  },
  {
    id: "eda-agent",
    title: "Automated EDA Agent",
    tech: "Python • System Thinking",
    description: "Autonomous data analysis system with statistical pipelines and auto-generated insights.",
    github: "https://github.com/nganhuongg/eda-agent",
  },
  {
    id: "ecg-classification",
    title: "ECG Classification System",
    tech: "Python • Machine Learning",
    description: "Class imbalance analysis and model evaluation for cardiovascular diagnostics.",
    github: "https://github.com/nganhuongg/ECG-classification",
  },
  {
    id: "environmental-dashboard",
    title: "Environmental Dashboard",
    tech: "TypeScript • Full-stack Development",
    description: "Interactive geospatial dashboard for exploring environmental metrics, spatial patterns, and urban data relationships.",
    github: "https://github.com/kh268/urban-planner",
  },
];

const experiences = [
  {
    role: "Mathematics Research Assistant",
    organization: "Minerva University",
    period: "Sep 2025 - Present",
    highlights: [
      "Mathematical modeling",
      "Fluid mechanics applications",
      "Simulation-based analysis",
    ],
  },
  {
    role: "Programming Student Consultant",
    organization: "YouthSF",
    period: "Sep 2025 - Present",
    highlights: [
      "Guided 20 children",
      "Robotics and circuits",
      "STEAM education",
    ],
  },
];

const achievements = [
  {
    title: "First Prize",
    event: "Phu Tho Province Olympiad",
    category: "Computer Science",
    language: "C++",
  },
  {
    title: "Silver Medal",
    event: "Vietnam Northern Summer Camp",
    category: "Computer Science",
    language: "C++",
  },
];

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
            <p>Minerva University</p>
            <p>Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white px-6 py-20">
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
                  I&apos;m drawn to algorithms and systems, how they are formed, how they evolve. I keep peeling back each layer of black boxes until they start to make sense.
                </p>
                <p>
                  There&apos;s something quiet and beautiful in structure, and in the uncertainty of probability. It&apos;s what keeps pulling me deeper into computer science, never enough, never finished.
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

export function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />

      {/* Featured Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Featured Projects</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background">
                <div className="space-y-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-sm text-primary">{project.tech}</p>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                    <Link
                      to={`/projects#${project.id}`}
                      className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Details
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Experience</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-full bg-accent mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl mb-1">{exp.role}</h3>
                  <p className="text-primary mb-1">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start">
                        <span className="text-accent mr-2">&bull;</span>
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

      {/* Achievements Section */}
      <section className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Achievements</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8 bg-background hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl">{achievement.title}</h3>
                    <p className="text-foreground/70">{achievement.event}</p>
                    <p className="text-sm text-primary">{achievement.category}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl mb-2">Get In Touch</h2>
            <div className="h-1 w-16 bg-primary rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:nganhuong.nguyenn@gmail.com"
              className="flex items-center gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground/80">nganhuong.nguyenn@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/nganhuongnguyenn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-foreground/80">linkedin.com/in/nganhuongnguyenn</p>
              </div>
            </a>

            <a
              href="https://x.com/nganhuonggg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-background rounded-lg hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <XLogo className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">X (Twitter)</p>
                <p className="text-foreground/80">@nganhuonggg</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
