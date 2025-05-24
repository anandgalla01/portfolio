import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  achievements?: string[];
};

const educationData: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Arkansas State University",
    location: "USA",
    period: "2018 - 2020",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List all semesters",
      "Research Assistant - Cloud Computing Lab",
      "Graduate Teaching Assistant - Java Programming",
    ],
  },
  {
    degree:
      "Bachelor of Technology in Electronics and Communication Engineering",
    institution: "K L University",
    location: "India",
    period: "2014 - 2018",
    gpa: "3.7/4.0",
    achievements: [
      "University Merit Scholarship",
      "Best Student Project Award",
      "Technical Lead - College Programming Club",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
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
              Education
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Academic background and qualifications
            </p>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.institution} · {edu.location}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <Badge variant="outline">{edu.period}</Badge>
                    <span className="text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                </CardHeader>
                {edu.achievements && (
                  <CardContent>
                    <h4 className="font-medium mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
