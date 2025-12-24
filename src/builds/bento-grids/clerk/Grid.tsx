import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

function getRandomInt1to9() {
    return Math.floor(Math.random() * 9) + 1
}

const Grid = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [arrIndex, setArrIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)
    const [last, setLast] = useState(false)
    const [finalPulse, setFinalPulse] = useState(false)
    const [showDigits, setShowDigits] = useState(true);


    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const fadeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const [digit, setDigit] = useState(() =>
        Array.from({ length: 6 }, getRandomInt1to9)
    )

    const startAnimation = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (fadeOutRef.current) clearTimeout(fadeOutRef.current)

        setFadeOut(false)
        setArrIndex(0)
        setIsTransitioning(false)
        setFinalPulse(false);

        timerRef.current = setInterval(() => {
            setArrIndex(prev => {
                if (prev >= digit.length - 1) {
                    clearInterval(timerRef.current!)
                    setFadeOut(true)
                    setFinalPulse(true)

                    fadeOutRef.current = setTimeout(() => {
                        if (isHovering) {
                            setIsTransitioning(true)
                            setLast(l => !l)
                            setFadeOut(false)
                            setArrIndex(0)
                            startAnimation()
                        }
                    }, 300)

                    return prev
                }
                return prev + 1
            })
        }, 400)
    }, [digit.length, isHovering])

    const resetAnimation = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        if (fadeOutRef.current) clearTimeout(fadeOutRef.current)
        setArrIndex(0)
        setFadeOut(false)
        setIsTransitioning(false)
    }, [])

    useEffect(() => {
        if (isHovering) startAnimation()
        else resetAnimation()

        return resetAnimation
    }, [isHovering])

    const handleExitComplete = () => {
        setDigit(Array.from({ length: 6 }, getRandomInt1to9))
        setFadeOut(false)
        setFinalPulse(false)
        setArrIndex(0)
        setShowDigits(true)

        if (isHovering) {
            startAnimation()
        }
    }

    useEffect(() => {
        if (finalPulse) {
            const t = setTimeout(() => {
                setShowDigits(false)
            }, 200)

            return () => clearTimeout(t)
        }
    }, [finalPulse])

    return (
        <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            className="group relative p-5 h-60 flex flex-col justify-between rounded-xl 
                 bg-gray-800 border border-slate-800 
                 shadow-[0_20px_40px_rgba(0,0,0,0.35)] 
                 max-w-4xl mx-auto mb-80 mt-20"
        >
            <AnimatePresence mode="wait"
                onExitComplete={handleExitComplete}>
                {showDigits && <motion.div className="pointer-events-none relative flex items-center justify-center gap-3 w-full h-full"
                    key={digit.join("")}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 2,
                        transition: { duration: 0.35, ease: "easeInOut" }
                    }}>
                    {digit.map((dig, idx) => (
                        <div
                            key={idx}
                            className="relative w-10 h-10 rounded-lg 
                       bg-slate-950 border border-slate-800"
                        >
                            {arrIndex === idx && isHovering && !isTransitioning && (
                                <motion.div
                                    className="absolute inset-0 rounded-lg border border-blue-500/40 z-10"
                                    initial={{ opacity: 0, scale: 1.2 }}
                                    animate={{
                                        opacity: fadeOut ? 0 : 1,
                                        scale: fadeOut ? 1 : 1.05,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    style={{
                                        boxShadow: `
                    inset 0 0 16px rgba(59,130,246,0.25),
                    0 0 12px rgba(59,130,246,0.2),
                    0 0 24px rgba(59,130,246,0.15)
                  `,
                                    }}
                                >
                                    <svg
                                        viewBox="0 0 20 20"
                                        className="absolute inset-0 w-full h-full"
                                        strokeWidth="0.5"
                                    >
                                        <path
                                            d="M 3 19 h 14"
                                            className="stroke-blue-400/60"
                                        />
                                    </svg>
                                </motion.div>
                            )}

                            {/* Digit */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: isHovering
                                        ? fadeOut
                                            ? 0
                                            : idx <= arrIndex
                                                ? 1
                                                : 0
                                        : 0,
                                    scale: isHovering && fadeOut ? [1, 0.85, 0.4] : 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className={`relative z-50 flex items-center justify-center w-full h-full 
                          rounded-lg text-slate-100
                          ${arrIndex === idx && isHovering
                                        ? "bg-blue-500/15 border border-blue-500/40"
                                        : ""
                                    }`}
                            >
                                {dig}
                            </motion.span>
                        </div>
                    ))}
                </motion.div>}
            </AnimatePresence>


            <div>
                <h1 className="text-slate-200 text-lg font-medium tracking-tight">
                    Multifactor Authentication
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                    Each user's self-serve multifactor settings are enforced automatically
                    during sign-in.
                </p>
            </div>
        </motion.div>
    )
}

export default Grid
