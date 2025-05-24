import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SkillCategory = {
  name: string;
  skills: string[];
  className?: string;
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    className: "bg-blue-500/10 dark:bg-blue-500/20",
  },
  {
    name: "Frameworks",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Angular",
      "React.js",
      "Node.js",
      "Bootstrap",
      "Material UI",
    ],
    className: "bg-green-500/10 dark:bg-green-500/20",
  },
  {
    name: "Databases",
    skills: ["MongoDB", "SQL Server", "PostgreSQL", "Redis", "MySQL"],
    className: "bg-yellow-500/10 dark:bg-yellow-500/20",
  },
  {
    name: "Cloud/DevOps",
    skills: [
      "AWS (EC2, S3, RDS, Lambda)",
      "Docker",
      "Jenkins",
      "Git",
      "CI/CD",
      "Azure",
    ],
    className: "bg-purple-500/10 dark:bg-purple-500/20",
  },
  {
    name: "Testing & Tools",
    skills: ["JUnit", "Log4j", "Maven", "Webpack", "Eclipse", "IntelliJ IDEA"],
    className: "bg-red-500/10 dark:bg-red-500/20",
  },
  {
    name: "Web Technologies",
    skills: [
      "RESTful APIs",
      "GraphQL",
      "SASS",
      "WebSockets",
      "Responsive Design",
    ],
    className: "bg-indigo-500/10 dark:bg-indigo-500/20",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
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
              Technical Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("h-full", category.className)}>
                <CardHeader className="pb-2">
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
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
