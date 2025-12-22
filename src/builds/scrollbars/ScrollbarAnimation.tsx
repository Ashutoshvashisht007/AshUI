import { Shield, CreditCard, Activity } from "lucide-react";
import type { Feature } from "../../types/type";
import { useMotionValueEvent, useScroll, useTransform, motion, useMotionTemplate } from "motion/react";
import { useRef, useState } from "react";

const ScrollbarAnimation = () => {
  const features: Feature[] = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Industry-grade authentication with best security practices.",
      content: (
        <div className="w-full h-full overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=75"
            alt="Secure authentication"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Fast and reliable payment experience with modern APIs.",
      content: (
        <div className="h-full overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=75"
            alt="Online payments"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Track activity and performance with live analytics.",
      content: (
        <div className="h-full overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=75"
            alt="Analytics dashboard"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress  } = useScroll({ target: containerRef,
    offset: ["start end", "end start"]
   });

   const backgroundColors = ['#1F2933', '#3B82F6', '#F59E0B']
   const [color,setColor] = useState(backgroundColors[0]);

   useMotionValueEvent(scrollYProgress , "change", (latest)=> {
    const val = Math.floor(latest * backgroundColors.length)
    setColor(backgroundColors[val]);
   })
  
  return (
    <motion.div className='min-h-screen flex items-center justify-center overflow-hidden'
    animate={{
      backgroundColor: color
    }}
    transition={{
      duration: 0.3,
      ease: "easeInOut"
    }}
    ref={containerRef}>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {
          features.map((feature, idx) => (
            <Card key={`features-${idx}`} feature={feature}/>
          ))
        }
      </div>
    </motion.div>
  )
}

const Card = ({ feature}: { feature: Feature}) => {
  const Icon = feature.icon;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });


  const textY = useTransform(scrollYProgress, [0, 1], [150,-100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0,1,0]);
  const textBlur = useTransform(scrollYProgress, [0.5, 1], [0,10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1,0.8]);

  return <div ref={ref} className="grid grid-cols-2 gap-10 items-center px-4 py-40">
    <motion.div className="flex flex-col gap-3.5"
    style={{
      filter: useMotionTemplate`blur(${textBlur}px)`,
      scale: scale
    }}>
      <Icon className="w-6 h-6 text-blue-500" />
      <h3 className="text-4xl font-semibold">{feature.title}</h3>
      <p className="text-[16px] text-neutral-600">{feature.description}</p>
    </motion.div>
    <motion.div style={{
      y: textY,
      opacity: contentOpacity,
      scale: scale
    }}>
      {feature.content}
    </motion.div>
    </div>
}

export default ScrollbarAnimation
