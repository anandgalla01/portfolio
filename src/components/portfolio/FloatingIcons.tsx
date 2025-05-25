import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Icon = {
  name: string;
  src: string;
  initialPosition: { left: string; top: string };
  size: number;
  animation: "path1" | "path2" | "path3" | "path4";
  delay: number;
};

// Animation paths
const animations = {
  path1: {
    y: [0, -40, 0],
    x: [0, 30, 0],
    rotate: [0, 10, 0],
    scale: [1, 1.1, 1],
  },
  path2: {
    y: [0, 50, 0],
    x: [0, -20, 0],
    rotate: [0, -15, 0],
    scale: [1, 1.2, 1],
  },
  path3: {
    y: [0, -30, 0],
    x: [0, -40, 0],
    rotate: [0, 5, 0],
    scale: [1, 1.1, 1],
  },
  path4: {
    y: [0, 20, 0],
    x: [0, 25, 0],
    rotate: [0, -5, 0],
    scale: [1, 1.05, 1],
  },
};

export function FloatingIcons() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically position icons based on window size
  const getIconsConfig = () => {
    const baseIcons = [
      {
        name: "Java",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        size: 40,
        animation: "path1" as const,
        delay: 0,
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        size: 35,
        animation: "path2" as const,
        delay: 1.2,
      },
      {
        name: "Angular",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        size: 32,
        animation: "path3" as const,
        delay: 0.4,
      },
      {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        size: 36,
        animation: "path1" as const,
        delay: 1.8,
      },
      {
        name: "Git",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        size: 30,
        animation: "path2" as const,
        delay: 0.8,
      },
      {
        name: "PostgreSQL",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        size: 34,
        animation: "path3" as const,
        delay: 2.6,
      },
      {
        name: "Spring",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        size: 38,
        animation: "path4" as const,
        delay: 1.4,
      },
      {
        name: "NodeJS",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        size: 32,
        animation: "path1" as const,
        delay: 0.6,
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        size: 36,
        animation: "path2" as const,
        delay: 3.0,
      },
      {
        name: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        size: 42,
        animation: "path3" as const,
        delay: 2.0,
      },
      {
        name: "MongoDB",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        size: 33,
        animation: "path4" as const,
        delay: 1.0,
      },
    ];

    // Create a grid-like distribution
    const columns = windowWidth < 768 ? 3 : 6;
    const rows = 4;

    const colWidth = 100 / columns;
    const rowHeight = 100 / rows;

    return baseIcons.map((icon, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns) % rows;

      // Add some randomness to positions
      const randomX = Math.random() * 10 - 5;
      const randomY = Math.random() * 10 - 5;

      return {
        ...icon,
        initialPosition: {
          left: `${col * colWidth + colWidth / 2 + randomX}%`,
          top: `${row * rowHeight + rowHeight / 2 + randomY}%`,
        },
      };
    });
  };

  const icons = getIconsConfig();

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-60 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: icon.size,
            height: icon.size,
            left: icon.initialPosition.left,
            top: icon.initialPosition.top,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            ...animations[icon.animation],
          }}
          transition={{
            duration: 10,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
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
