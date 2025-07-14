import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Startup Co.",
      position: "Senior Frontend Developer",
      location: "Ho Chi Minh City",
      duration: "2022 - Hiện tại",
      description: "Phát triển và maintain các web applications sử dụng React, TypeScript. Lead team 4 developers, implement CI/CD pipeline và improve performance 40%.",
      technologies: ["React", "TypeScript", "Next.js", "AWS", "Docker"],
      type: "Full-time"
    },
    {
      company: "Digital Agency",
      position: "Full-Stack Developer", 
      location: "Ha Noi",
      duration: "2021 - 2022",
      description: "Xây dựng websites và web applications cho clients. Phối hợp với design team và project managers để deliver projects đúng timeline.",
      technologies: ["Vue.js", "Node.js", "MySQL", "PHP", "WordPress"],
      type: "Full-time"
    },
    {
      company: "Freelance",
      position: "Web Developer",
      location: "Remote",
      duration: "2020 - 2021", 
      description: "Freelance developer cho các dự án nhỏ và vừa. Xây dựng landing pages, e-commerce sites và web applications.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      type: "Freelance"
    }
  ];

  const education = [
    {
      school: "Đại học Bách Khoa Hà Nội",
      degree: "Cử nhân Khoa học Máy tính",
      duration: "2018 - 2022",
      description: "Chuyên ngành Công nghệ phần mềm. GPA: 3.6/4.0"
    },
    {
      school: "FreeCodeCamp",
      degree: "Full-Stack Web Development",
      duration: "2020",
      description: "Chứng chỉ Full-Stack Web Development với 300+ hours coding"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Kinh nghiệm & Học vấn
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hành trình phát triển và những kinh nghiệm tôi đã tích lũy được.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              Kinh nghiệm làm việc
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.position}</h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-secondary/50">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Học vấn & Chứng chỉ
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-primary font-semibold mb-3">{edu.school}</p>
                    
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}