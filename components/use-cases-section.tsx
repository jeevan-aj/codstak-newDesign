"use client"

import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, FileCode, GraduationCapIcon as Graduation, Lightbulb, Users } from "lucide-react"

export function UseCasesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const useCases = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Skill Development",
      description: "Sharpen your front-end skills with practical challenges that simulate real-world scenarios",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      icon: <Graduation className="h-10 w-10 text-primary" />,
      title: "Interview Preparation",
      description: "Practice common front-end interview questions and coding challenges to ace your next interview",
      tags: ["Algorithms", "Data Structures", "Problem Solving"],
    },
    {
      icon: <FileCode className="h-10 w-10 text-primary" />,
      title: "Portfolio Building",
      description:
        "Complete challenges and build a portfolio of projects to showcase your skills to potential employers",
      tags: ["Projects", "Portfolio", "Showcase"],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Learning",
      description: "Connect with other developers, share solutions, and learn from the community",
      tags: ["Collaboration", "Feedback", "Networking"],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Continuous Learning",
      description: "Stay up-to-date with the latest front-end technologies and best practices",
      tags: ["Frameworks", "Libraries", "Best Practices"],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Code Review",
      description: "Get feedback on your code and learn how to write clean, efficient, and maintainable code",
      tags: ["Code Quality", "Refactoring", "Optimization"],
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What can I use CodStak for?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            CodStak is designed to help you become a better front-end developer through practice and feedback
          </p>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="feature-card border bg-card h-full"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

