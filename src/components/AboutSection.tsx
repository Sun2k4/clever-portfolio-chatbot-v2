import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Code, Lightbulb, Target } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Chuyên về React, Node.js, và các công nghệ web hiện đại"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Đam mê giải quyết vấn đề phức tạp với giải pháp sáng tạo"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Tập trung vào kết quả và trải nghiệm người dùng tối ưu"
    }
  ];

  const interests = [
    "AI & Machine Learning",
    "Web3 & Blockchain", 
    "Mobile Development",
    "Cloud Computing",
    "UI/UX Design",
    "Open Source"
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
            Tôi là một developer đam mê tạo ra những sản phẩm có ý nghĩa và tác động tích cực đến cuộc sống.
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
                    Với hơn 3 năm kinh nghiệm trong phát triển web, tôi đã tham gia vào nhiều dự án 
                    từ startup đến enterprise. Tôi tin rằng code tốt không chỉ hoạt động mà còn phải 
                    dễ đọc, dễ bảo trì và có thể mở rộng.
                  </p>
                  <p className="leading-relaxed">
                    Ngoài coding, tôi thích chia sẻ kiến thức qua blog, contributing vào open source 
                    và luôn học hỏi những công nghệ mới nhất trong ngành.
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