import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "lucide-react";

// Define the experience item type
type ExperienceItem = {
  company: string;
  logo: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  accentColor: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Medline",
    logo: "M",
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
    accentColor: "#3b82f6", // blue-500
  },
  {
    company: "UWorld LLC",
    logo: "U",
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
    accentColor: "#8b5cf6", // violet-500
  },
  {
    company: "Keka HR",
    logo: "K",
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
    accentColor: "#10b981", // emerald-500
  },
  {
    company: "VinfoSoft Pvt",
    logo: "V",
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
    accentColor: "#f97316", // orange-500
  },
];

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
          {/* Career Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Career Path</h3>

            <div className="hidden lg:block relative">
              <div className="absolute left-3 top-8 bottom-8 w-0.5 bg-muted"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative mb-4 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "flex items-center w-full text-left p-3 rounded-lg transition-all",
                      activeIndex === index
                        ? "bg-muted/80 shadow-md"
                        : "hover:bg-muted/50",
                    )}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-semibold text-sm text-white"
                      style={{ backgroundColor: exp.accentColor }}
                    >
                      {exp.logo}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{exp.company}</h4>
                      <p className="text-xs text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    {activeIndex === index && (
                      <div className="w-1.5 h-1.5 rounded-full bg-primary ml-2"></div>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="flex overflow-x-auto gap-2 pb-2 lg:hidden">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "flex-shrink-0 px-4 py-2 rounded-full border transition-all whitespace-nowrap",
                    activeIndex === index
                      ? "border-primary bg-primary/10"
                      : "border-muted",
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="relative card-height">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  activeIndex === index
                    ? "opacity-100 z-10 translate-x-0"
                    : "opacity-0 z-0 translate-x-8",
                )}
                initial={false}
              >
                <div className="bg-card rounded-xl border shadow-xl p-1 h-full">
                  <div className="rounded-lg p-6 h-full flex flex-col">
                    {/* Header with position and company */}
                    <div
                      className="rounded-lg p-4 mb-6"
                      style={{ backgroundColor: `${exp.accentColor}15` }} // 15 is hex for 10% opacity
                    >
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <div className="flex flex-wrap items-center gap-x-3 text-muted-foreground mt-1">
                            <div className="font-medium text-foreground">
                              {exp.company}
                            </div>
                            <div className="flex items-center">
                              <MapPinIcon className="h-3.5 w-3.5 mr-1" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white"
                          style={{ backgroundColor: exp.accentColor }}
                        >
                          {exp.logo}
                        </div>
                      </div>
                    </div>

                    {/* Body content */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                      <div>
                        <h4
                          className="text-lg font-semibold mb-4 pb-1 border-b"
                          style={{ borderColor: exp.accentColor }}
                        >
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((item, i) => (
                            <motion.li
                              key={i}
                              className="flex gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div
                                style={{ color: exp.accentColor }}
                                className="mt-1 flex-shrink-0"
                              >
                                <CheckCircleIcon className="h-4 w-4" />
                              </div>
                              <span className="text-muted-foreground">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4
                          className="text-lg font-semibold mb-4 pb-1 border-b"
                          style={{ borderColor: exp.accentColor }}
                        >
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: `${exp.accentColor}15`,
                                color: exp.accentColor,
                                border: `1px solid ${exp.accentColor}30`,
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Navigation buttons for mobile */}
                    <div className="flex justify-between mt-6 pt-4 border-t lg:hidden">
                      <button
                        onClick={() =>
                          setActiveIndex(Math.max(0, activeIndex - 1))
                        }
                        disabled={activeIndex === 0}
                        className="p-2 rounded-full border disabled:opacity-30"
                      >
                        <ArrowRightIcon className="h-4 w-4 rotate-180" />
                      </button>
                      <div className="flex space-x-1">
                        {experiences.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                              "w-2 h-2 rounded-full",
                              activeIndex === i ? "bg-primary" : "bg-muted",
                            )}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          setActiveIndex(
                            Math.min(experiences.length - 1, activeIndex + 1),
                          )
                        }
                        disabled={activeIndex === experiences.length - 1}
                        className="p-2 rounded-full border disabled:opacity-30"
                      >
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
