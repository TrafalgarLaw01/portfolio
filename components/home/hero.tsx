'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function Hero({ dict }: { dict: any }) {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    // Parallax effects
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image for Depth */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Image
                    src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=2832&auto=format&fit=crop"
                    alt="Abstract Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Background Gradient Overlay */}
            <div
                className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,1)_90%)]"
            />

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center flex flex-col items-center drop-shadow-2xl"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 select-none shadow-black drop-shadow-lg pr-4 pb-2"
                >
                    PONTUS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 text-xl md:text-2xl font-light tracking-[0.5em] text-gray-300 uppercase drop-shadow-md"
                >
                    {dict.subtitle}
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-xs tracking-widest uppercase opacity-70">{dict.scroll}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    )
}
