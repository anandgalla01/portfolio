import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/portfolio/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
                  <p className="text-muted-foreground mt-2">
                    Download my resume or view it online
                  </p>
                </div>
                <div className="flex gap-4">
                  <Link to="/">
                    <Button variant="outline" className="gap-2">
                      <ArrowLeft className="h-4 w-4" />
                      Back to Portfolio
                    </Button>
                  </Link>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-card rounded-lg shadow-sm border p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Resume Header */}
              <div className="border-b pb-6 mb-6">
                <h2 className="text-2xl font-bold">Anand Galla</h2>
                <p className="text-muted-foreground mt-1">
                  Senior Java Full Stack Developer
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4">
                  <p className="text-sm">Email: anandgalla01@gmail.com</p>
                  <p className="text-sm">Phone: +1 870-713-9318</p>
                  <p className="text-sm">
                    LinkedIn: linkedin.com/in/anandgalla
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Professional Summary
                </h3>
                <p className="text-sm text-muted-foreground">
                  Senior Java Full Stack Developer with 5+ years of experience
                  designing and implementing scalable, secure, and efficient web
                  applications across Finance, Insurance, and Healthcare
                  domains. Expertise in Java, Spring Boot, Angular, and cloud
                  technologies with a strong foundation in OOP principles,
                  RESTful API design, and microservices architecture.
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  Professional Experience
                </h3>

                <div className="space-y-6">
                  {/* Medline */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">
                        Senior Java Full Stack Developer
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        Mar 2022 - Present
                      </div>
                    </div>
                    <p className="text-sm font-medium">Medline, USA</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Designed and implemented microservices architecture for
                        healthcare applications using Spring Boot and Spring
                        Cloud, improving system scalability by 40%
                      </li>
                      <li>
                        Developed RESTful APIs and GraphQL endpoints following
                        best practices and OpenAPI specifications
                      </li>
                      <li>
                        Implemented OAuth 2.0 and JWT for secure authentication
                        and authorization across services
                      </li>
                      <li>
                        Containerized applications using Docker and orchestrated
                        with Kubernetes on AWS
                      </li>
                      <li>
                        Mentored junior developers and conducted code reviews to
                        maintain high code quality
                      </li>
                    </ul>
                  </div>

                  {/* UWorld */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">Java Full Stack Developer</h4>
                      <div className="text-sm text-muted-foreground">
                        Jul 2020 - Feb 2022
                      </div>
                    </div>
                    <p className="text-sm font-medium">UWorld LLC, India</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Developed responsive web applications for educational
                        platforms using Angular and Material Design
                      </li>
                      <li>
                        Built backend services with Spring Boot, JPA/Hibernate,
                        and PostgreSQL
                      </li>
                      <li>
                        Optimized database queries and application performance,
                        reducing page load times by 30%
                      </li>
                      <li>
                        Implemented CI/CD pipelines using Jenkins for automated
                        testing and deployment
                      </li>
                    </ul>
                  </div>

                  {/* Other experiences in shortened format */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">Full Stack Developer</h4>
                      <div className="text-sm text-muted-foreground">
                        Jun 2019 - Jun 2020
                      </div>
                    </div>
                    <p className="text-sm font-medium">Keka HR, India</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Built HR management system features using Java and
                        React.js
                      </li>
                      <li>
                        Designed RESTful APIs for various HR modules and
                        integrated third-party services
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">Software Engineer</h4>
                      <div className="text-sm text-muted-foreground">
                        May 2018 - May 2019
                      </div>
                    </div>
                    <p className="text-sm font-medium">VinfoSoft Pvt, India</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
                      <li>
                        Developed web applications using Java, Spring, and
                        JavaScript
                      </li>
                      <li>
                        Created database schemas and implemented CRUD operations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Languages:</h4>
                    <p className="text-sm text-muted-foreground">
                      Java, JavaScript (ES6+), TypeScript, HTML5, CSS3
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Frameworks:</h4>
                    <p className="text-sm text-muted-foreground">
                      Spring Boot, Spring MVC, Hibernate, Angular, React.js,
                      Node.js
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Databases:</h4>
                    <p className="text-sm text-muted-foreground">
                      MongoDB, SQL Server, PostgreSQL, Redis, MySQL
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Cloud/DevOps:</h4>
                    <p className="text-sm text-muted-foreground">
                      AWS (EC2, S3, RDS, Lambda), Docker, Jenkins, Git, CI/CD,
                      Azure
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Testing & Tools:</h4>
                    <p className="text-sm text-muted-foreground">
                      JUnit, Log4j, Maven, Webpack, Eclipse, IntelliJ IDEA
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Web Technologies:</h4>
                    <p className="text-sm text-muted-foreground">
                      RESTful APIs, GraphQL, SASS, WebSockets, Responsive Design
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">
                        Master of Science in Computer Science
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        2018 - 2020
                      </div>
                    </div>
                    <p className="text-sm">Arkansas State University, USA</p>
                    <p className="text-sm text-muted-foreground">
                      GPA: 3.8/4.0
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium">
                        Bachelor of Technology in Electronics and Communication
                        Engineering
                      </h4>
                      <div className="text-sm text-muted-foreground">
                        2014 - 2018
                      </div>
                    </div>
                    <p className="text-sm">K L University, India</p>
                    <p className="text-sm text-muted-foreground">
                      GPA: 3.7/4.0
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
