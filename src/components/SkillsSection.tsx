import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Ngôn ngữ lập trình",
      skills: [
        { name: "Python", level: 60 },
        { name: "Java", level: 55 },
        { name: "HTML/CSS", level: 70 },
        { name: "JavaScript", level: 50 }
      ]
    },
    {
      title: "Database & Tools", 
      skills: [
        { name: "MySQL", level: 65 },
        { name: "PHP", level: 60 },
        { name: "VS Code", level: 80 },
        { name: "Git", level: 50 }
      ]
    },
    {
      title: "Kỹ năng mềm",
      skills: [
        { name: "Làm việc nhóm", level: 85 },
        { name: "Quản lý thời gian", level: 80 },
        { name: "Tư duy logic", level: 75 },
        { name: "Thích nghi", level: 90 }
      ]
    }
  ];

  const technologies = [
    "Python", "Java", "HTML", "CSS", "JavaScript", "PHP", "MySQL", 
    "VS Code", "Git", "Word", "Excel", "PowerPoint", "Phân tích yêu cầu",
    "Kiểm thử phần mềm", "Viết báo cáo", "Nghiên cứu khoa học"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Kỹ năng & Công nghệ
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Các công nghệ và kỹ năng tôi sử dụng để tạo ra những sản phẩm chất lượng cao.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <Card className="bg-card-gradient border-border shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Công nghệ đã sử dụng</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}