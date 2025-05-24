import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Server, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
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
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              5+ years of experience crafting robust and scalable software
              solutions
            </p>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <div className="mb-6">
                <div className="h-40 w-40 mx-auto md:mx-0 overflow-hidden rounded-full border-2 border-primary/20 shadow-md relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                  <div className="flex items-center justify-center h-full">
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <span className="text-4xl font-semibold text-primary">
                        AG
                      </span>
                      <span className="text-xs text-primary/70 mt-1">
                        Senior Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">Anand Galla</h3>
              <p className="text-muted-foreground">
                I'm a Senior Java Full Stack Developer with a passion for
                building innovative and efficient solutions. With over 5 years
                of experience in the Finance, Insurance, and Healthcare domains,
                I specialize in creating scalable applications using modern
                technologies.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">Microservices & Cloud</h4>
                  <p className="text-muted-foreground">
                    Expertise in building microservices architectures and
                    cloud-native applications using AWS & Azure services.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">
                    OOP & Clean Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Strong focus on Object-Oriented Programming principles,
                    design patterns, and clean, maintainable code.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-medium">
                    Security & Performance
                  </h4>
                  <p className="text-muted-foreground">
                    Implement robust security solutions using OAuth 2.0 and JWT,
                    with a focus on optimizing application performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
