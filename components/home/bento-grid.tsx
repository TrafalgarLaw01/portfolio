'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { GlassFilter } from '@/components/ui/liquid-glass-card'

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
                "group relative overflow-hidden h-full rounded-3xl border border-white/10",
                "bg-transparent text-white shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]",
                "transition-all duration-500 hover:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]",
                className
            )}
            style={{ backdropFilter: 'url("#container-glass")' }}
        >
            {/* Background Image if provided */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
            )}

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            <div className="relative z-10 h-full p-8 flex flex-col">
                {children}
                <div className="mt-auto">
                    {subtitle && (
                        <p className="text-xs font-bold text-cyan-400 mb-2 tracking-widest uppercase">
                            {subtitle}
                        </p>
                    )}
                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-cyan-50 transition-colors">
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
            <GlassFilter />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[400px]">

                {/* Large Feature - Selected Works */}
                <BentoItem
                    title={dict.selectedWorks}
                    subtitle={dict.portfolio}
                    className="md:col-span-8 md:row-span-1"
                    delay={0.1}
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                    href={`/${lang}/work`}
                >
                    <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
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
                                    className="object-contain drop-shadow-[0_0_25px_rgba(0,210,255,0.5)] transform hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 mt-4">
                            <p className="text-gray-100 text-2xl md:text-3xl leading-snug font-serif italic text-center">
                                &ldquo;{dict.aboutIntro}&rdquo;
                            </p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                                <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase text-center">
                                    {dict.aboutDetails}
                                </p>
                            </div>
                        </div>
                    </div>
                </BentoItem>

                {/* Services */}
                <BentoItem
                    title={dict.services}
                    subtitle={dict.expertise}
                    className="md:col-span-4"
                    delay={0.3}
                    href={`/${lang}/services`}
                >
                    <ul className="mt-6 space-y-3 text-gray-400">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.6)]" /> {dict.service1}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.6)]" /> {dict.service2}
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.6)]" /> {dict.service3}
                        </li>
                    </ul>
                </BentoItem>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={cn(
                        "md:col-span-4 group relative overflow-hidden rounded-3xl border border-white/10 flex items-center justify-center min-h-[400px]",
                        "bg-transparent text-white shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)]",
                        "transition-all duration-500 hover:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]"
                    )}
                    style={{ backdropFilter: 'url("#container-glass")' }}
                >
                    <div className="absolute inset-0 bg-black/20 z-0" />
                    <MagneticButton>
                        <LiquidButton size="xl" className="text-white font-bold relative z-10 border border-white/10">
                            <Link href={`/${lang}/contact`} className="flex items-center gap-2">
                                {dict.contact} <span className="text-xl">&rarr;</span>
                            </Link>
                        </LiquidButton>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    )
}
