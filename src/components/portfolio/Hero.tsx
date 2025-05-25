import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github } from "lucide-react";
import { Link } from "react-router-dom";

const codeAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-8"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Anand Galla
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Senior Java Full Stack Developer | Scalable Web Solutions |
                Cloud-Native Architectures
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/resume">
                <Button className="gap-1">
                  <Download className="h-4 w-4" />
                  View Resume
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline" className="gap-1">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button variant="secondary" className="gap-1">
                  <Github className="h-4 w-4" />
                  Projects
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="bg-muted rounded-xl overflow-hidden relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="px-4 py-8 h-full flex items-center justify-center">
              <motion.div
                className="bg-background shadow-lg rounded-xl p-4 relative z-10 font-mono text-sm overflow-hidden"
                variants={codeAnimation}
                initial="initial"
                animate="animate"
              >
                <pre className="text-xs md:text-sm overflow-x-auto">
                  <code className="language-java">
                    {`import java.util.stream.Stream;

@RestController
@RequestMapping("/api")
public class CloudController {

    @Autowired
    private MicroserviceClient client;

    @GetMapping("/data")
    public Flux<ResponseEntity> getData() {
        return client.fetchData()
            .filter(Objects::nonNull)
            .map(this::transform)
            .subscribeOn(Schedulers.boundedElastic());
    }

    private ResponseEntity transform(Data data) {
        // Scalable transformation logic
        return ResponseEntity.ok(data);
    }
}`}
                  </code>
                </pre>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
