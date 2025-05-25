import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      onClick={scrollToNextSection}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.span
        className="text-sm font-medium mb-2 text-primary"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        Scroll Down
      </motion.span>
      <motion.div
        className="rounded-full border-2 border-primary p-1"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ChevronDown className="h-4 w-4 text-primary" />
      </motion.div>
    </motion.div>
  );
}
