import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-3 text-tertiary">CV & Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my professional experience, skills, and projects.
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
      </div>

      <Tabs defaultValue="portfolio" className="mb-8">
        <TabsList className="mb-6">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Personal Website",
                description: "A dark-themed personal website with sidebar navigation and interactive elements",
                tags: ["Next.js", "React", "Three.js", "Tailwind CSS"],
                image: "/placeholder.svg?width=600&height=400",
                github: "#",
                demo: "#",
              },
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with product management and payment integration",
                tags: ["Next.js", "Stripe", "Prisma", "TypeScript"],
                image: "/placeholder.svg?width=600&height=400",
                github: "#",
                demo: "#",
              },
              {
                title: "AI Content Generator",
                description: "Web application that uses AI to generate content for various use cases",
                tags: ["React", "OpenAI API", "Node.js", "Express"],
                image: "/placeholder.svg?width=600&height=400",
                github: "#",
                demo: "#",
              },
              {
                title: "Data Visualization Dashboard",
                description: "Interactive dashboard for visualizing complex datasets with real-time updates",
                tags: ["D3.js", "React", "WebSockets", "Material UI"],
                image: "/placeholder.svg?width=600&height=400",
                github: "#",
                demo: "#",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-tertiary transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.demo}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="experience" className="space-y-8">
          {[
            {
              role: "Senior Frontend Developer",
              company: "Tech Innovations Inc.",
              period: "2021 - Present",
              description:
                "Led the development of multiple web applications using React and Next.js. Implemented CI/CD pipelines and mentored junior developers.",
              achievements: [
                "Reduced page load time by 40% through code optimization",
                "Implemented a component library used across 5 different projects",
                "Led a team of 5 developers to deliver a major feature on time",
              ],
            },
            {
              role: "Web Developer",
              company: "Creative Digital Agency",
              period: "2018 - 2021",
              description:
                "Developed responsive websites and interactive features for various clients in the retail and finance sectors.",
              achievements: [
                "Built 20+ client websites with a focus on accessibility and performance",
                "Implemented e-commerce solutions resulting in 25% increase in online sales",
                "Created reusable development workflows that reduced project setup time by 60%",
              ],
            },
            {
              role: "Junior Developer",
              company: "StartUp Lab",
              period: "2016 - 2018",
              description: "Worked on frontend development for a SaaS product targeting small businesses.",
              achievements: [
                "Contributed to the UI overhaul that improved user engagement metrics",
                "Developed a custom analytics dashboard using D3.js",
                "Participated in user testing sessions to gather feedback for product improvement",
              ],
            },
          ].map((job, index) => (
            <div key={index} className="border-l-2 border-tertiary pl-6 relative">
              <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-xl font-bold">{job.role}</h3>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="font-medium">{job.company}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{job.period}</span>
              </div>
              <p className="mb-4 text-muted-foreground">{job.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="education" className="space-y-8">
          {[
            {
              degree: "Master of Science in Computer Science",
              institution: "Tech University",
              period: "2014 - 2016",
              description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
              courses: ["Advanced Web Development", "UI/UX Design Principles", "Data Visualization"],
            },
            {
              degree: "Bachelor of Science in Information Technology",
              institution: "State University",
              period: "2010 - 2014",
              description: "Focused on software development and system design. Participated in multiple hackathons.",
              courses: ["Programming Fundamentals", "Database Systems", "Software Engineering"],
            },
            {
              degree: "Web Development Bootcamp",
              institution: "Coding Academy",
              period: "Summer 2013",
              description: "Intensive 12-week program covering full-stack web development.",
              courses: ["JavaScript Frameworks", "API Development", "Responsive Design"],
            },
          ].map((edu, index) => (
            <div key={index} className="border-l-2 border-tertiary pl-6 relative">
              <div className="absolute w-3 h-3 bg-tertiary rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="font-medium">{edu.institution}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{edu.period}</span>
              </div>
              <p className="mb-2 text-muted-foreground">{edu.description}</p>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <Badge key={i} variant="outline">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Frontend",
                skills: [
                  "React",
                  "Next.js",
                  "Vue.js",
                  "HTML5/CSS3",
                  "JavaScript/TypeScript",
                  "Tailwind CSS",
                  "Responsive Design",
                  "UI/UX Principles",
                ],
              },
              {
                category: "Backend",
                skills: [
                  "Node.js",
                  "Express",
                  "RESTful APIs",
                  "GraphQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Prisma",
                  "Serverless Functions",
                ],
              },
              {
                category: "Tools & Technologies",
                skills: [
                  "Git/GitHub",
                  "Docker",
                  "CI/CD",
                  "Jest/Testing Library",
                  "Webpack",
                  "AWS",
                  "Vercel",
                  "Figma/Adobe XD",
                ],
              },
              {
                category: "Other Skills",
                skills: [
                  "Technical Writing",
                  "Agile/Scrum",
                  "Accessibility",
                  "Performance Optimization",
                  "WebGL/Three.js",
                  "SEO",
                  "Analytics",
                ],
              },
              {
                category: "Languages",
                skills: ["JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS", "Bash"],
              },
              {
                category: "Soft Skills",
                skills: [
                  "Problem Solving",
                  "Team Collaboration",
                  "Communication",
                  "Time Management",
                  "Adaptability",
                  "Mentoring",
                  "Client Relations",
                ],
              },
            ].map((skillSet, index) => (
              <Card key={index} className="border-2 hover:border-tertiary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{skillSet.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

