import { Award, Trophy, Medal } from "lucide-react";
import { Card } from "../components/ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "First Prize",
    event: "Phu Tho Province Olympiad in Computer Science",
    date: "2024",
    category: "Competition",
    description: "Top performer in provincial-level computer science competition, demonstrating excellence in algorithmic problem solving and optimization.",
  },
  {
    icon: Medal,
    title: "Silver Medal",
    event: "Vietnam Northern Summer Camp - Computer Science",
    date: "2023",
    category: "Competition",
    description: "Recognized for outstanding performance in advanced algorithms and data structures at the regional camp.",
  },
];

export function Achievements() {
  return (
    <div className="w-full py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl mb-6">Achievements</h1>
          <div className="h-1 w-20 bg-primary rounded mb-6"></div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Recognition in competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="p-10 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-2xl">{achievement.title}</h2>
                        <span className="text-base text-muted-foreground whitespace-nowrap">
                          {achievement.date}
                        </span>
                      </div>
                      <p className="text-lg text-primary mb-3">{achievement.event}</p>
                      <span className="inline-block px-4 py-2 bg-accent/20 text-primary rounded-lg text-sm font-medium border border-accent/30 mb-4">
                        {achievement.category}
                      </span>
                      <p className="text-base text-foreground/70 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}