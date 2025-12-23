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

    const dots = Array.from({ length: 150 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 50;
        const radius = 20 + Math.random() * 70;
        return {
            id: i,
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            delay: Math.random() * 0.25,
            size: 0.8 + Math.random() * 1.2,
        };
    });

    return (
        <div
            className="w-40 h-32 border border-gray-800 relative overflow-hidden flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {dots.map((dot) => (
                    <motion.div
                        key={dot.id}
                        className="absolute rounded-full"
                        style={{
                            width: dot.size,
                            height: dot.size,
                            backgroundColor: isHovered ? color : "transparent",
                        }}
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={
                            isHovered
                                ? { x: dot.x, y: dot.y, opacity: 0.8 }
                                : { x: 0, y: 0, opacity: 0 }
                        }
                        transition={{
                            duration: 1,
                            delay: dot.delay,
                            ease: "easeOut",
                        }}
                    />
                ))}
            </div>

            {/* Icon */}
            <div className={`relative z-10 flex flex-col items-center justify-center`}>
                <motion.div
                    animate={{ color: isHovered ? color : "#ffffff", y: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Icon size={48} />
                </motion.div>
                <AnimatePresence>
                    <motion.div
                        className="text-lg font-medium absolute"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 30 : 50,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {name}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CodingLanguages;
