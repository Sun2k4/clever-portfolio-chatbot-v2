import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Website Quản Lý Nghiệp Vụ Giảng Viên",
      description: "Đề tài nghiên cứu khoa học sinh viên nhằm hỗ trợ quản lý giảng viên, theo dõi giảng dạy, phân công công việc, đánh giá hiệu suất và hỗ trợ nghiên cứu khoa học.",
      image: "/api/placeholder/600/400",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "09/2024 - 06/2025",
      role: "Developer & Researcher"
    },
    {
      title: "Học tập cá nhân",
      description: "Các dự án nhỏ trong quá trình học tập để rèn luyện kỹ năng lập trình với Python, Java và các công nghệ web cơ bản.",
      image: "/api/placeholder/600/400", 
      technologies: ["Python", "Java", "HTML/CSS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "2021 - nay",
      role: "Student Developer"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Dự án nổi bật
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Các dự án tôi đã thực hiện trong quá trình học tập và nghiên cứu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center text-6xl font-bold text-muted-foreground">
                  📱
                </div>
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="bg-hero-gradient hover:shadow-glow"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github size={16} className="mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Xem thêm dự án trên GitHub
            <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}