import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineering Student",
      description: "Đang theo học Công nghệ phần mềm tại ĐH Tài nguyên và Môi trường Hà Nội"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Có tư duy logic tốt và khả năng giải quyết vấn đề hiệu quả"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Mục tiêu rõ ràng: trở thành lập trình viên giỏi trong tương lai"
    }
  ];

  const interests = [
    "Lập trình Python",
    "Web Development", 
    "Database Design",
    "Software Engineering",
    "Nghiên cứu khoa học",
    "Công nghệ mới"
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Về tôi
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sinh viên năm 4 ngành Công nghệ phần mềm, đam mê học hỏi và phát triển trong lĩnh vực CNTT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-8">
            <Card className="bg-card-gradient border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Thông tin cá nhân</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Tôi là sinh viên năm 4 ngành Công nghệ phần mềm tại Đại học Tài nguyên và Môi trường Hà Nội.
                    Hiện có GPA 3.0/4.0 và đang tích cực học hỏi để phát triển kỹ năng lập trình.
                  </p>
                  <p className="leading-relaxed">
                    Mục tiêu ngắn hạn của tôi là tìm cơ hội thực tập trong môi trường chuyên nghiệp để rèn luyện 
                    kỹ năng và học hỏi từ những người có kinh nghiệm. Dài hạn là trở thành một lập trình viên giỏi.
                  </p>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Sở thích & Quan tâm:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary/50">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <div className="text-primary">
                        {highlight.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}