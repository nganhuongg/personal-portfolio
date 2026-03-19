import { Card } from "../components/ui/card";

const experiences = [
  {
    role: "Mathematics Research Assistant",
    organization: "Minerva University",
    location: "San Francisco, CA",
    period: "Sep 2025 - Present",
    type: "Research",
    description: "Conducting research in mathematical modeling and optimization theory with applications to real-world systems.",
    responsibilities: [
      "Mathematical modeling of complex optimization problems",
      "Linearization techniques for non-linear systems",
      "Simulation-based analysis and validation",
      "Documentation of research methodologies",
    ],
  },
  {
    role: "Programming Student Consultant",
    organization: "YouthSF",
    location: "San Francisco, CA",
    period: "Sep 2025 - Present",
    type: "Education",
    description: "Teaching programming fundamentals and robotics to primary students, fostering computational thinking and problem-solving skills.",
    responsibilities: [
      "Guided 20+ students in programming and robotics",
      "Organized activities with circuits and embedded systems",
      "Developed a STEAM learning application for remote underserved students",
      "Integrated AI-assistant Agent to support students navigating resources",
    ],
  },
  {
    role: "Computer Science Olympiad Competitor",
    organization: "Phu Tho Province",
    location: "Vietnam",
    period: "2023 - 2024",
    type: "Competition",
    description: "Competed in provincial and regional-level computer science competitions, specializing in algorithm design and optimization.",
    responsibilities: [
      "Advanced algorithm implementation in C++",
      "Graph theory and dynamic programming",
      "Competitive problem solving under time constraints",
      "First Prize at Provincial Olympiad",
    ],
  },
];

export function Experience() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl mb-6">Experience</h1>
          <div className="h-1 w-20 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Research, education, and competitive programming experience focused on
            optimization, algorithms, and mathematical modeling.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-10 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
              <div className="pl-8 space-y-6">
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-3xl mb-2">{exp.role}</h2>
                      <p className="text-xl text-primary">{exp.organization}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base text-muted-foreground">{exp.period}</p>
                      <p className="text-base text-foreground/70">{exp.location}</p>
                    </div>
                  </div>
                  <span className="inline-block px-4 py-2 bg-accent/20 text-primary rounded-lg text-sm font-medium border border-accent/30">
                    {exp.type}
                  </span>
                </div>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h3 className="text-xl mb-4 text-primary">Key Responsibilities</h3>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-foreground/70 flex items-start text-base">
                        <span className="text-accent mr-3 mt-1">&bull;</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
