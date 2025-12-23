import { motion, stagger, useAnimate } from "motion/react"
import { useEffect } from "react"

const AnimatedText = () => {

    const text = "Life’s true richness lies not in possessions, but in the moments we share and the kindness we give. 🌿 Every challenge is a chance to grow, every setback a lesson in resilience. When we choose gratitude, even the smallest joys shine brighter. ✨ Keep moving forward—the journey itself is the reward."
    const [scope, animate] = useAnimate();

    useEffect(() => {
        startAnimating();
    }, [])

    const startAnimating = () => {
        animate(
            "span", {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
        }, {
            duration: 0.5,
            ease: "easeInOut",
            delay: stagger(0.05)
        }
        )
    }

    return <div ref={scope} className="text-white mt-10 max-w-[80vw] mx-auto px-2">
        {
            text.split(" ").map((t, idx) => <motion.span style={{
                opacity: 0,
                filter: 'blur(10px)',
                y: 10,
            }} className="inline-block text-justify" key={t + idx}>{t}&nbsp;</motion.span>)
        }
    </div>
}

export default AnimatedText