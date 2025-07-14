import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export function AIChatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Xin chào! Tôi là AI assistant của Nguyễn Tuấn Anh. Tôi có thể trả lời các câu hỏi về học vấn, kỹ năng, dự án nghiên cứu và thông tin liên hệ. Bạn muốn hỏi gì?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Portfolio information for AI context
  const portfolioContext = {
    name: "Nguyễn Tuấn Anh",
    skills: ["Python", "Java", "HTML/CSS", "JavaScript", "PHP", "MySQL", "VS Code", "Git"],
    education: {
      school: "ĐH Tài nguyên và Môi trường Hà Nội",
      major: "Công nghệ phần mềm",
      year: "2021 - nay",
      gpa: "3.0/4.0",
      grade: "Khá"
    },
    projects: [
      {
        name: "Website Quản Lý Nghiệp Vụ Giảng Viên",
        period: "09/2024 - 06/2025",
        description: "Đề tài nghiên cứu khoa học sinh viên",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        role: "Phân tích yêu cầu, lập trình, kiểm thử, viết báo cáo"
      }
    ],
    contact: {
      email: "tanh0411k4@gmail.com",
      phone: "0852226288",
      location: "Bắc Từ Liêm, Hà Nội",
      availability: "Đang tìm kiếm cơ hội thực tập"
    },
    goals: {
      shortTerm: "Tìm cơ hội thực tập trong môi trường chuyên nghiệp, rèn luyện kỹ năng",
      longTerm: "Trở thành lập trình viên giỏi trong lĩnh vực CNTT"
    }
  };

  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const message = userMessage.toLowerCase();

    // Basic keyword matching for demo
    if (message.includes("skill") || message.includes("kỹ năng") || message.includes("công nghệ")) {
      return `Tôi có kinh nghiệm với các công nghệ sau: ${portfolioContext.skills.join(", ")}. Tôi đang tập trung học về web development và database.`;
    }

    if (message.includes("học vấn") || message.includes("trường") || message.includes("đại học")) {
      return `Tôi đang học ${portfolioContext.education.major} tại ${portfolioContext.education.school} từ ${portfolioContext.education.year}. GPA hiện tại là ${portfolioContext.education.gpa}, xếp loại ${portfolioContext.education.grade}.`;
    }

    if (message.includes("project") || message.includes("dự án")) {
      const project = portfolioContext.projects[0];
      return `Tôi đang thực hiện dự án "${project.name}" (${project.period}). Đây là ${project.description} sử dụng công nghệ: ${project.technologies.join(", ")}. Vai trò của tôi: ${project.role}.`;
    }

    if (message.includes("contact") || message.includes("liên hệ") || message.includes("email")) {
      return `Bạn có thể liên hệ với tôi qua email: ${portfolioContext.contact.email} hoặc điện thoại: ${portfolioContext.contact.phone}. Tôi đang ở ${portfolioContext.contact.location} và ${portfolioContext.contact.availability}.`;
    }

    if (message.includes("mục tiêu") || message.includes("career") || message.includes("tương lai")) {
      return `Mục tiêu ngắn hạn: ${portfolioContext.goals.shortTerm}. Mục tiêu dài hạn: ${portfolioContext.goals.longTerm}.`;
    }

    if (message.includes("thực tập") || message.includes("internship")) {
      return `Tôi đang tích cực tìm kiếm cơ hội thực tập để rèn luyện kỹ năng và học hỏi từ môi trường chuyên nghiệp. Bạn có thông tin về cơ hội thực tập nào không?`;
    }

    if (message.includes("python") || message.includes("java")) {
      return "Tôi có kiến thức cơ bản về Python và Java. Đang tiếp tục học và rèn luyện để nâng cao kỹ năng lập trình.";
    }

    if (message.includes("html") || message.includes("css") || message.includes("web")) {
      return "Tôi có kiến thức về HTML, CSS, JavaScript và PHP. Đang áp dụng vào dự án Website Quản Lý Nghiệp Vụ Giảng Viên với MySQL database.";
    }

    if (message.includes("hello") || message.includes("hi") || message.includes("xin chào")) {
      return "Xin chào! Rất vui được gặp bạn. Tôi có thể giúp bạn tìm hiểu về học vấn, kỹ năng, dự án nghiên cứu của tôi. Bạn muốn hỏi về điều gì?";
    }

    // Default response
    return "Cảm ơn bạn đã hỏi! Tôi có thể trả lời về học vấn, kỹ năng, dự án nghiên cứu, mục tiêu nghề nghiệp hoặc thông tin liên hệ. Bạn có câu hỏi cụ thể nào không?";
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(currentMessage);
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể kết nối với AI service. Vui lòng thử lại sau.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-hero-gradient shadow-float hover:shadow-glow transition-all duration-300 z-40 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] bg-card-gradient border-border shadow-float z-50 flex flex-col">
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">
                  {isTyping ? "Đang gõ..." : "Online"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
              >
                <Settings size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>

          {/* API Key Input */}
          {showApiKeyInput && (
            <div className="p-4 border-b border-border bg-secondary/20">
              <div className="space-y-2">
                <label className="text-xs text-muted-foreground">
                  OpenAI API Key (tùy chọn - để trải nghiệm AI thực tế)
                </label>
                <Input
                  type="password"
                  placeholder="sk-..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="text-xs"
                />
                <p className="text-xs text-muted-foreground">
                  Hiện tại đang sử dụng AI demo với thông tin từ portfolio.
                </p>
              </div>
            </div>
          )}

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "ai" && (
                      <Bot size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    )}
                    {message.sender === "user" && (
                      <User size={16} className="text-primary-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-primary" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.1s"}}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: "0.2s"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Hỏi về kinh nghiệm, kỹ năng, dự án..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isTyping}
                size="sm"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}