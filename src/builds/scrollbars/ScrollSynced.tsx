import { useRef, useEffect, useState } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Snowfall from 'react-snowfall';

interface Feature {
    id: number,
    title: string,
    description: string,
    color: string,
    image: string,
}

const features = [
  {
    id: 1,
    title: "Lightning Fast",
    description: "Experience blazing speed with our optimized architecture. Built for performance from the ground up.",
    color: "from-violet-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
  },
  {
    id: 2,
    title: "Seamless Integration",
    description: "Connect with your favorite tools effortlessly. One platform, infinite possibilities.",
    color: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    id: 3,
    title: "AI-Powered",
    description: "Harness the power of artificial intelligence to automate and accelerate your workflow.",
    color: "from-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  },
  {
    id: 4,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance. Your data is protected with military-grade security.",
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
  },
  {
    id: 5,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with your team. See changes as they happen, anywhere in the world.",
    color: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  }
];

const FeatureCard = ({ feature, index } : {feature: Feature, index: number}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0.8, 1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 1, 1, 1, 0.8]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0, 0, 0, 1, 5]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, filter: useMotionTemplate`blur(${blur}px` }}
      className="min-h-screen flex items-center justify-center px-4 md:px-8"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <motion.div style={{ y }} className="space-y-6">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-semibold text-white/60 tracking-wider uppercase">
                Feature {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {feature.title}
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              {feature.description}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        <div className="relative h-[400px] md:h-[500px]">
          <motion.div
            className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className={`absolute inset-0 bg-linear-to-br ${feature.color} mix-blend-multiply opacity-40`} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ScrollSynced() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * features.length),
        features.length - 1
      );
      setActiveIndex(index);
    });
  }, [scrollYProgress]);


  return (
    <div ref={containerRef} className="relative bg-black">

         <div className="fixed inset-0 z-0 pointer-events-none">
        <Snowfall
          snowflakeCount={120}
          radius={[0.5, 2.5]}
          speed={[0.5, 1.5]}
          wind={[-0.2, 0.2]}
        />
      </div>
      <motion.div
        className="fixed inset-0 -z-10 transition-colors duration-1000"
      />
      
      <div className="fixed top-8 right-8 z-50 flex flex-col gap-2">
        {features.map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'bg-white scale-125' : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      <div className="pt-20 pb-20">
        <div className="text-center mb-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Built for the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto"
          >
            Discover features that transform the way you work
          </motion.p>
        </div>

        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} index={index} />
        ))}

        <div className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/70 max-w-xl mx-auto">
              Join thousands of teams already building the future
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-white/90 transition-colors"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}