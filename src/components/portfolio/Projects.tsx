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
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Github,
  Code,
  Layers,
  BarChart,
  Activity,
  FileCode,
  Database,
  Settings,
  Server,
  Cpu,
  Cloud,
  Lock,
  Users,
  Globe,
  Zap,
  Wifi,
  MonitorSmartphone,
  LineChart,
} from "lucide-react";

type ProjectFeature = {
  text: string;
  icon: React.ReactNode;
};

type Project = {
  title: string;
  description: string;
  features: ProjectFeature[];
  technologies: string[];
  icon: React.ReactNode;
  demoLink?: string;
  codeLink?: string;
};

const projects: Project[] = [
  {
    title: "Microservices Architecture",
    description:
      "Designed and implemented a scalable microservices architecture for a healthcare management system",
    features: [
      {
        text: "Service discovery with Netflix Eureka",
        icon: <Server className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        text: "API gateway for request routing",
        icon: (
          <Settings className="h-4 w-4 text-green-600 dark:text-green-400" />
        ),
      },
      {
        text: "Circuit breaker patterns for fault tolerance",
        icon: <Activity className="h-4 w-4 text-red-600 dark:text-red-400" />,
      },
      {
        text: "Distributed logging and monitoring",
        icon: <Cpu className="h-4 w-4 text-purple-600 dark:text-purple-400" />,
      },
    ],
    technologies: [
      "Spring Boot",
      "Spring Cloud",
      "Docker",
      "Kubernetes",
      "AWS",
    ],
    icon: <Layers className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Cloud-Native Application",
    description:
      "Developed a cloud-native application for real-time data processing in the insurance domain",
    features: [
      {
        text: "Serverless functions with AWS Lambda",
        icon: <Cloud className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        text: "Data persistence with DynamoDB",
        icon: (
          <Database className="h-4 w-4 text-green-600 dark:text-green-400" />
        ),
      },
      {
        text: "Event-driven architecture with SNS/SQS",
        icon: <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />,
      },
      {
        text: "CI/CD pipeline with AWS CodePipeline",
        icon: (
          <Activity className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        ),
      },
    ],
    technologies: [
      "Java",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "CloudFormation",
    ],
    icon: <Code className="h-6 w-6 text-green-600 dark:text-green-400" />,
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Built a real-time analytics dashboard for monitoring financial transactions",
    features: [
      {
        text: "Interactive data visualization",
        icon: <BarChart className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        text: "Real-time data streaming",
        icon: <Wifi className="h-4 w-4 text-green-600 dark:text-green-400" />,
      },
      {
        text: "Customizable dashboard widgets",
        icon: (
          <MonitorSmartphone className="h-4 w-4 text-purple-600 dark:text-purple-400" />
        ),
      },
      {
        text: "Automated reporting system",
        icon: (
          <LineChart className="h-4 w-4 text-amber-600 dark:text-amber-400" />
        ),
      },
    ],
    technologies: ["Angular", "D3.js", "WebSockets", "Spring Boot", "MongoDB"],
    icon: <BarChart className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
  },
  {
    title: "Frontend State Management",
    description:
      "Implemented robust state management for a complex enterprise application",
    features: [
      {
        text: "Centralized state management",
        icon: <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      },
      {
        text: "Optimistic UI updates",
        icon: <Zap className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />,
      },
      {
        text: "Undo/redo functionality",
        icon: (
          <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
        ),
      },
      {
        text: "Persistent state across sessions",
        icon: <Lock className="h-4 w-4 text-red-600 dark:text-red-400" />,
      },
    ],
    technologies: ["Angular", "NgRx", "RxJS", "TypeScript", "Redux DevTools"],
    icon: <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
  },
];

export function Projects() {
  const getRandomTechBadgeColor = (index: number) => {
    const colors = [
      "badge-blue",
      "badge-green",
      "badge-red",
      "badge-yellow",
      "badge-purple",
      "badge-indigo",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/50 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Showcasing my technical expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover"
            >
              <Card className="h-full flex flex-col relative overflow-hidden group">
                {/* Colorful card accent */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform origin-left transition-transform group-hover:scale-x-100 scale-x-0 duration-300"></div>

                <CardHeader className="relative">
                  <div className="absolute top-6 right-6 p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <div>
                    <h4 className="font-medium mb-2 text-primary">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 flex-shrink-0">
                            {feature.icon}
                          </span>
                          <span className="text-muted-foreground">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-primary">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={cn(
                            getRandomTechBadgeColor(techIndex),
                            "transition-all hover:scale-105",
                          )}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.demoLink && (
                    <Button
                      variant="outline"
                      className="gap-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover/btn:animate-pulse" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button
                      variant="outline"
                      className="gap-1 group/btn"
                      asChild
                    >
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 text-indigo-600 dark:text-indigo-400 group-hover/btn:animate-pulse" />
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
