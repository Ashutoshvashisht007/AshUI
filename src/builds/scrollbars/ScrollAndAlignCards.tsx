import { useRef } from 'react'
import { motion, MotionValue, useScroll, useSpring, useTransform } from 'motion/react'

interface cardDataInterface {
    title: string;
    img: string;
    description: string;
    x: number;
    y: number;
    rotate: number;
}

const cardsData = [
    {
        title: "Fast Performance",
        img: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=70",
        description:
            "Optimized rendering and lightweight assets ensure smooth performance across all devices.",
        x: 1800,
        y: 2500,
        rotate: 35,
    },
    {
        title: "Clean UI Design",
        img: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=70",
        description:
            "Minimal and modern interface focused on clarity, usability, and visual balance.",
        x: -700,
        y: 2500,
        rotate: -30,
    },
    {
        title: "Secure & Reliable",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=70",
        description:
            "Built with best security practices to keep user data safe and systems reliable.",
        x: -4600,
        y: 2500,
        rotate: 28,
    },
    {
        title: "Scalable Architecture",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70",
        description:
            "Designed to scale seamlessly as traffic and feature requirements grow.",
        x: 2500,
        y: -500,
        rotate: -22,
    },
    {
        title: "Responsive Layout",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=70",
        description:
            "Adapts smoothly to different screen sizes, providing a consistent experience on mobile, tablet, and desktop.",
        x: 300,
        y: -500,
        rotate: 15,
    },
    {
        title: "Easy Customization",
        img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=70",
        description:
            "Well-structured components and styles make customization quick and developer-friendly.",
        x: -3110,
        y: 0,
        rotate: 0,
    }
];



const ScrollAndAlignCards = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    return (
        <div className='max-w-6xl mx-auto w-full mt-10'>
            <motion.div className='p-2 relaive'>
                <h2 className='font-semibold text-4xl'>Scroll and Align</h2>
                <motion.div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-30 mb-50'>
                    {
                        cardsData.map((data, idx) => (
                            <Card key={`${data.title}_${idx}`} progress={scrollYProgress} data={data} />
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

const Card = ({ progress, data }: { progress: MotionValue<number>, data: cardDataInterface }) => {
    const opacityRaw = useTransform(progress, [0, 1], [0.6, 1]);
    const xRaw = useTransform(progress, [0, 1], [data.x, 0]);
    const yRaw = useTransform(progress, [0, 1], [data.y, 0]);
    const rotateRaw = useTransform(progress, [0, 1], [data.rotate, 0]);
    const scale = useTransform(progress, [0, 1], [0.95, 1]);
    const x = useSpring(xRaw, {
        stiffness: 120,
        damping: 20,
        mass: 1,
    });

    const y = useSpring(yRaw, {
        stiffness: 120,
        damping: 20,
        mass: 1,
    });

    const rotate = useSpring(rotateRaw, {
        stiffness: 100,
        damping: 18,
    });

    const opacity = useSpring(opacityRaw, {
        stiffness: 80,
        damping: 20,
    });


    return (
        <motion.div className='bg-neutral-800 rounded-lg flex flex-col items-start justify-center cursor-pointer gap-3 px-2 py-1'
            style={{ x, y, rotate, scale, opacity }}
        >
            <img src={data.img} alt="img" className='w-full object-cover h-50 rounded-lg' />
            <span className='font-semibold text-xl text-neutral-300'>{data.title}</span>
            <p className='text-sm text-gray-400 tracking-tight'>{data.description}</p>
        </motion.div>
    )
}

export default ScrollAndAlignCards