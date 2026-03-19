import { Card } from "../components/ui/card";
import { Code, Database, Brain, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript/TypeScript", "SQL"],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: [
      "Multiple Regression",
      "Logistic Regression",
      "Model Evaluation",
      "Class Imbalance Handling",
    ],
  },
  {
    icon: Database,
    title: "Algorithms & Optimization",
    skills: [
      "Graph Algorithms",
      "Network Flow (MCMF)",
      "Dynamic Programming",
      "Gradient-free Algorithms",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      "React & Next.js",
      "FastAPI",
      "REST APIs",
      "Mapbox & Visualization",
    ],
  },
];

export function Skills() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl mb-6">Technical Skills</h1>
          <div className="h-1 w-20 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Core competencies in optimization algorithms, machine learning, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-10 hover:shadow-lg transition-shadow">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl">{category.title}</h2>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-foreground/80 flex items-start text-base">
                        <span className="text-accent mr-3 mt-1">&bull;</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
