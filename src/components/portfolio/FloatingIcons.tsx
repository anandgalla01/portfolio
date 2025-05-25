import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Icon = {
  name: string;
  src: string;
  initialPosition: { x: number; y: number };
  speed: number;
  delay: number;
  direction: number;
};

export function FloatingIcons() {
  const [icons, setIcons] = useState<Icon[]>([
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      initialPosition: { x: 10, y: 5 },
      speed: 1.2,
      delay: 0,
      direction: 1,
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      initialPosition: { x: 35, y: 15 },
      speed: 1.5,
      delay: 0.2,
      direction: -1,
    },
    {
      name: "Angular",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      initialPosition: { x: 65, y: 5 },
      speed: 1.3,
      delay: 0.4,
      direction: 1,
    },
    {
      name: "AWS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      initialPosition: { x: 85, y: 20 },
      speed: 1.7,
      delay: 0.6,
      direction: -1,
    },
    {
      name: "Docker",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      initialPosition: { x: 20, y: 30 },
      speed: 1.4,
      delay: 0.8,
      direction: 1,
    },
    {
      name: "Git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      initialPosition: { x: 50, y: 25 },
      speed: 1.1,
      delay: 1.0,
      direction: -1,
    },
    {
      name: "Database",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      initialPosition: { x: 75, y: 35 },
      speed: 1.6,
      delay: 1.2,
      direction: 1,
    },
  ]);

  return (
    <div className="fixed top-0 left-0 w-full h-36 pointer-events-none z-0 overflow-hidden opacity-70">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 md:w-12 md:h-12"
          initial={{
            x: `${icon.initialPosition.x}%`,
            y: `${icon.initialPosition.y}px`,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: [
              `${icon.initialPosition.y}px`,
              `${icon.initialPosition.y + 15 * icon.direction}px`,
              `${icon.initialPosition.y}px`,
            ],
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: 8,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            times: [0, 0.1, 0.9, 1],
          }}
        >
          <img
            src={icon.src}
            alt={icon.name}
            className="w-full h-full object-contain"
            title={icon.name}
          />
        </motion.div>
      ))}
    </div>
  );
}
