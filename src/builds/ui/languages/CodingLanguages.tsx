import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const languages = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

const CodingLanguages = () => {
    return (
        <div className="min-h-screen bg-black flex items-start justify-center py-8 mt-10">
            <div className="grid grid-cols-3 border border-gray-800">
                {languages.map((lang) => (
                    <Card key={lang.name} {...lang} />
                ))}
            </div>
        </div>
    );
};

const Card = ({ name, icon: Icon, color }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-40 h-32 border border-gray-800 overflow-hidden flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dotted background */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `
            radial-gradient(${color} 0.6px, transparent 0.6px)
          `,
          backgroundSize: "10px 10px",
          opacity: isHovered ? 0.6 : 0.25,
          maskImage:
            "radial-gradient(circle at center, black 55%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 55%, transparent 75%)",
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at center, ${color}22, transparent 65%)`,
        }}
      />

      {/* Icon + text */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          animate={{
            color: isHovered ? color : "#ffffff",
            y: isHovered ? -6 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Icon size={46} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 14 : 8,
          }}
          transition={{ duration: 0.25 }}
          className="text-sm font-medium absolute"
        >
          {name}
        </motion.div>
      </div>
    </div>
  );
};



export default CodingLanguages;
