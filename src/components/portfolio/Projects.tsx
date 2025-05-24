import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  demoLink?: string;
  codeLink?: string;
};

const projects: Project[] = [
  {
    title: "Microservices Architecture",
    description:
      "Designed and implemented a scalable microservices architecture for a healthcare management system",
    features: [
      "Service discovery with Netflix Eureka",
      "API gateway for request routing",
      "Circuit breaker patterns for fault tolerance",
      "Distributed logging and monitoring",
    ],
    technologies: [
      "Spring Boot",
      "Spring Cloud",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Cloud-Native Application",
    description:
      "Developed a cloud-native application for real-time data processing in the insurance domain",
    features: [
      "Serverless functions with AWS Lambda",
      "Data persistence with DynamoDB",
      "Event-driven architecture with SNS/SQS",
      "CI/CD pipeline with AWS CodePipeline",
    ],
    technologies: [
      "Java",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "CloudFormation",
    ],
    image: "/placeholder.svg",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Built a real-time analytics dashboard for monitoring financial transactions",
    features: [
      "Interactive data visualization",
      "Real-time data streaming",
      "Customizable dashboard widgets",
      "Automated reporting system",
    ],
    technologies: ["Angular", "D3.js", "WebSockets", "Spring Boot", "MongoDB"],
    image: "/placeholder.svg",
  },
  {
    title: "Frontend State Management",
    description:
      "Implemented robust state management for a complex enterprise application",
    features: [
      "Centralized state management",
      "Optimistic UI updates",
      "Undo/redo functionality",
      "Persistent state across sessions",
    ],
    technologies: ["Angular", "NgRx", "RxJS", "TypeScript", "Redux DevTools"],
    image: "/placeholder.svg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Showcasing my technical expertise and problem-solving skills
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-muted-foreground">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.demoLink && (
                    <Button variant="outline" className="gap-1" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button variant="outline" className="gap-1" asChild>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
