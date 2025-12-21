import { ArrowLeft, ArrowRight, ChartBarIncreasing, Home, Settings, User } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../../lib/cn';
import { motion } from "motion/react";

const Sidebar_Motion = () => {

    const [isOpen, setIsOpen] = useState(false);

    const sidebarContent = [
        {
            title: "Home",
            icon: Home
        },
        {
            title: "Analytics",
            icon: ChartBarIncreasing
        },
        {
            title: "User",
            icon: User
        },
        {
            title: "Settings",
            icon: Settings
        }
    ]

    const SidebarVariant = {
        open: {
            width: "12rem",
        },
        close: {
            width: "3rem",
        }
    }

    const ParentVariant = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            }
        },
        close: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    }

    const ChildVariant = {
        open: {
            opacity: 1,
            y: 0,
        },
        close: {
            opacity: 0,
            y: -6,
        }
    }

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "close"}
        >
            <motion.nav className={cn(
                'flex flex-col bg-neutral-200 text-black rounded-lg overflow-hidden',
                isOpen ? 'w-48 p-3' : 'w-12 p-2'
            )}
                variants={SidebarVariant}
            >
                <div className='flex items-center justify-between w-full'>
                    <h2 className={`${!isOpen && "sr-only"} font-medium`}>Dashboard</h2>
                    <button
                        onClick={() => setIsOpen((v) => !v)}
                        className="bg-white p-1 rounded-full cursor-pointer"
                    >
                        {isOpen ? <ArrowLeft /> : <ArrowRight />}
                    </button>

                </div>

                {/* Items */}
                <motion.ul className={`flex flex-col gap-4 mt-6`} variants={ParentVariant}>
                    {sidebarContent.map(({ title, icon: Icon }) => (
                        <motion.li
                            variants={ChildVariant}
                            key={title}
                            className="flex items-center gap-3"
                        >
                            <Icon />
                            {isOpen && <motion.span variants={ChildVariant}>{title}</motion.span>}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>
        </motion.div>
    )
}

export default Sidebar_Motion