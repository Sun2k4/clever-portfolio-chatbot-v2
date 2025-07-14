import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      company: "ĐH Tài nguyên và Môi trường Hà Nội",
      position: "Nghiên cứu sinh viên",
      location: "Hà Nội",
      duration: "09/2024 - 06/2025",
      description: "Thực hiện đề tài nghiên cứu khoa học về Website Quản Lý Nghiệp Vụ Giảng Viên. Phân tích yêu cầu, lập trình, kiểm thử và viết báo cáo nghiên cứu.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      type: "Research"
    }
  ];

  const education = [
    {
      school: "ĐH Tài nguyên và Môi trường Hà Nội",
      degree: "Cử nhân Công nghệ phần mềm",
      duration: "2021 - nay",
      description: "Đang theo học năm 4. GPA: 3.0/4.0. Xếp loại học lực: Khá"
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