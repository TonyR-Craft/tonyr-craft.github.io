import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { buttons } from "../../data/buttons";
import NavButton from "./NavButton";

interface Position {
  x: number;
  y: number;
}

const buttonSize = 56;

const generateRandomPosition = (containerWidth: number, containerHeight: number): Position => {
  const x = Math.random() * (containerWidth*0.75 - buttonSize * 2);
  const y = Math.random() * (containerHeight*0.75 - buttonSize * 2);
  return { x, y };
};

const logPosition = (index: number, x: number, y: number, containerWidth: number, containerHeight: number) => {
  if ( x > containerWidth - buttonSize || y > containerHeight - buttonSize) {
    console.warn(`Button ${index} out of bounds. Position: (${x}, ${y}), Container: (${containerWidth}, ${containerHeight})`);
  }
};

const Navigation = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePositions = () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const newPositions = buttons.map(() => generateRandomPosition(containerWidth, containerHeight));
    setPositions(newPositions);
    newPositions.forEach((pos, index) => logPosition(index, pos.x, pos.y, containerWidth, containerHeight));
  };

  useEffect(() => {
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updatePositions();
    }, 5000); // Change positions every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full fixed h-full" ref={containerRef}>
      {positions.length > 0 && buttons.map((btn, index) => {
        const initialPos = positions[index];
        const animatePos = hoveredIndex === index
          ? { x: initialPos.x, y: initialPos.y }
          : generateRandomPosition(window.innerWidth, window.innerHeight);

        return (
          <motion.div
            key={index}
            initial={{ x: initialPos.x, y: initialPos.y }}
            animate={{ x: animatePos.x, y: animatePos.y }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror"
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ position: "absolute" }}
          >
            <NavButton
              openInNewTab={btn.newTab}
              targetLink={btn.link}
              iconName={btn.icon}
              key={btn.label}
              {...btn}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Navigation;
