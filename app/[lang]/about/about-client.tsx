'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Smooth Curve: Starts at (20,20), control at (70,10) for rightward arch, ends at (100,80) */}
            <path
                d="M 20 20 Q 70 10 100 80"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeDasharray="6,4"
                strokeLinecap="round"
            />
            {/* Arrowhead: Pointing down-right at the end of the curve */}
            <path
                d="M 92 72 L 100 80 L 108 72"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export function AboutClient({ dict }: { dict: any }) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 flex items-center justify-center py-20 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 text-center md:text-left">

                {/* Visual Section (Memoji) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-12 lg:col-span-5 flex flex-col items-center relative"
                >
                    {/* Handwritten Greeting with Arrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10, rotate: -10 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="absolute -top-12 md:top-10 md:-left-48 md:right-auto z-20 hidden md:block" // Moved to left side
                    >
                        <div className="relative">
                            <span className="font-handwriting text-gray-400 text-sm md:text-base whitespace-nowrap absolute -top-10 left-0 rotate-[-15deg]">
                                {dict.me.greeting}
                            </span>
                            {/* Arrow pointing towards the memoji from the left */}
                            <ArrowIcon className="text-gray-600 w-32 h-32 opacity-70 translate-y-2 translate-x-32" />
                        </div>
                    </motion.div>

                    {/* Memoji with Glow */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full animate-pulse" />
                        <Image
                            src="/images/memoji.png"
                            alt="Henrico Memoji"
                            fill
                            className="object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] z-10"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-12 lg:col-span-7 space-y-8"
                >
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl text-gray-400 font-medium">
                            {dict.me.headline}
                        </p>
                        <h1 className="text-5xl md:text-7xl leading-[1.1] font-serif tracking-tight">
                            {dict.me.highlight.split(' ').map((word: string, i: number) => (
                                <span key={i} className={i === 5 ? "relative inline-block" : ""}>
                                    {word}{' '}
                                    {/* Circle effect on "capa" if needed, simplified for now to highlight color */}
                                </span>
                            ))}
                        </h1>
                        <p className="text-lg md:text-xl text-blue-400/80 italic font-serif">
                            {dict.me.sub}
                        </p>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/20 to-transparent my-8" />

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            {dict.me.role}
                        </h2>

                        <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <p>
                                {dict.me.current} <span className="text-white font-bold">{dict.me.company}</span>
                            </p>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            {dict.me.bio}
                        </p>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
