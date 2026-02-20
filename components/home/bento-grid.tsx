'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { MagneticButton } from '@/components/ui/magnetic-button'

interface BentoItemProps {
    title: string
    subtitle?: string
    className?: string
    children?: React.ReactNode
    delay?: number
    image?: string
    href?: string
}

function BentoItem({ title, subtitle, className, children, delay = 0, image, href }: BentoItemProps) {
    const Content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all duration-500 h-full",
                className
            )}
        >
            {/* Background Image if provided */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
            )}

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-10 h-full p-8 flex flex-col">
                {children}
                <div className="mt-auto">
                    {subtitle && (
                        <p className="text-xs font-bold text-blue-400 mb-2 tracking-widest uppercase">
                            {subtitle}
                        </p>
                    )}
                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-100 transition-colors">
                        {title}
                    </h3>
                </div>
            </div>
        </motion.div>
    )

    if (href) {
        return (
            <Link href={href} className={cn("block h-full", className)}>
                {Content}
            </Link>
        )
    }

    return Content
}

export function BentoGrid({ dict, lang }: { dict: any, lang: string }) {
    return (
        <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto bg-black relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[400px]">

                {/* Large Feature - Selected Works (Takes up 8 columns) */}
                <BentoItem
                    title={dict.selectedWorks}
                    subtitle={dict.portfolio}
                    className="md:col-span-8 md:row-span-1"
                    delay={0.1}
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                    href={`/${lang}/work`}
                >
                    {/* Abstract geometric decoration instead of missing image */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <span className="text-xs text-white font-medium">{dict.comingSoon}</span>
                    </div>
                </BentoItem>

                <BentoItem
                    title={dict.aboutTitle}
                    subtitle={dict.aboutSubtitle}
                    className="md:col-span-4 md:row-span-2"
                    delay={0.2}
                    href={`/${lang}/about`}
                >
                    <div className="flex flex-col h-full relative z-10 justify-between">
                        <div className="relative w-full flex-1 flex items-center justify-center min-h-[200px]">
                            <div className="relative w-48 h-48 md:w-56 md:h-56">
                                <Image
                                    src="/images/memoji.png"
                                    alt="Henrico Memoji"
                                    fill
                                    className="object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 mt-4">
                            <p className="text-gray-100 text-2xl md:text-3xl leading-snug font-serif italic text-center">
                                "{dict.aboutIntro}"
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                                <p className="text-blue-400 text-sm font-bold tracking-widest uppercase text-center">
                                    {dict.aboutDetails}
                                </p>
                            </div>
                        </div>
                    </div>
                </BentoItem>

                {/* Medium Feature - Services (Takes up 4 columns) */}
                <BentoItem
                    title={dict.services}
                    subtitle={dict.expertise}
                    className="md:col-span-4"
                    delay={0.3}
                    href={`/${lang}/services`}
                >
                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> {dict.service1}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" /> {dict.service2}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" /> {dict.service3}
                        </li>
                    </ul>
                </BentoItem>

                {/* Small Feature - Contact (Takes up 4 columns) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-blue-900/20 to-purple-900/20 hover:border-blue-500/30 transition-all duration-500 flex items-center justify-center min-h-[400px]"
                >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-0" />
                    <MagneticButton>
                        <Link href={`/${lang}/contact`} className="relative z-10 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.5)] group-hover:scale-110 flex items-center gap-2">
                            {dict.contact} <span className="text-xl">&rarr;</span>
                        </Link>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}
