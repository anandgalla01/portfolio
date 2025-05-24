import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Medline",
    location: "USA",
    position: "Senior Java Full Stack Developer",
    period: "Mar 2022 - Present",
    responsibilities: [
      "Designed and implemented microservices architecture for scalable healthcare applications",
      "Led the development of RESTful APIs and GraphQL endpoints for internal and external clients",
      "Implemented security solutions using OAuth 2.0 and JWT for sensitive healthcare data",
      "Mentored junior developers and conducted code reviews to maintain high code quality",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "AWS",
      "Docker",
      "Microservices",
    ],
  },
  {
    company: "UWorld LLC",
    location: "India",
    position: "Java Full Stack Developer",
    period: "Jul 2020 - Feb 2022",
    responsibilities: [
      "Developed and maintained web applications for educational platforms",
      "Created responsive UIs using Angular and Material Design",
      "Implemented backend services with Spring Boot and JPA/Hibernate",
      "Optimized database queries and application performance",
    ],
    technologies: ["Java", "Spring MVC", "Hibernate", "Angular", "PostgreSQL"],
  },
  {
    company: "Keka HR",
    location: "India",
    position: "Full Stack Developer",
    period: "Jun 2019 - Jun 2020",
    responsibilities: [
      "Built HR management system features using Java and React.js",
      "Designed and implemented RESTful APIs for various HR modules",
      "Integrated third-party services for payroll and benefits management",
      "Participated in Agile development processes with daily stand-ups and sprint planning",
    ],
    technologies: ["Java", "React.js", "MySQL", "REST APIs", "Jenkins"],
  },
  {
    company: "VinfoSoft Pvt",
    location: "India",
    position: "Software Engineer",
    period: "May 2018 - May 2019",
    responsibilities: [
      "Developed web applications using Java, Spring, and JavaScript",
      "Created database schemas and implemented CRUD operations",
      "Fixed bugs and improved existing code base",
      "Assisted in system testing and deployment",
    ],
    technologies: ["Java", "JavaScript", "Spring", "SQL Server", "Git"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
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
              Work Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              5+ years of professional experience in software development
            </p>
          </div>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-base">
                        {exp.company} · {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted-foreground">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
