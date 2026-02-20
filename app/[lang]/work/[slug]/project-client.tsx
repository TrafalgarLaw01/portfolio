'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { BentoGrid } from '@/components/home/bento-grid' // Ensure this is not used if not needed, but keep imports clean

// Mock Data Store (Ideally this moves to a separate file or CMS)
const projects: Record<string, any> = {
    'nexus-fintech': {
        title: 'Nexus Fintech',
        subtitle: 'Next-Gen Financial Operating System',
        role: 'Lead Design',
        client: 'Nexus Corp',
        year: '2024',
        stack: 'Next.js, Three.js, WebGL',
        challenge: 'The traditional banking interface is cluttered, opaque, and disconnected. Nexus needed a design system that felt as fluid as liquid capital—providing real-time insights without cognitive overload.',
        solution: 'We architected a "Glass & Light" design language. By utilizing heavy usage of backdrop-blur and precise neon accents, we created a dashboard that feels like a physical HUD. The result is a 40% increase in user engagement and 2x faster trade execution.',
        heroImage: 'https://images.unsplash.com/photo-1642132652075-2d434316d823?q=80&w=2670&auto=format&fit=crop', // Abstract Blue/Dark
        gallery: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop', // Dashboard
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Abstract
            'https://images.unsplash.com/photo-1642132652809-8c763574d754?q=80&w=2670&auto=format&fit=crop'  // Mobile
        ],
        nextProject: {
            title: 'Lumina AI',
            slug: 'lumina-ai'
        }
    },
    // Fallback for demo
    'default': {
        title: 'Project Untitled',
        subtitle: 'Digital Experience',
        role: 'Full Stack',
        client: 'Unknown',
        year: '2023',
        stack: 'React, Node',
        challenge: 'Creating something out of nothing is always a challenge. We needed to define the undefinable.',
        solution: 'By applying first principles, we arrived at a solution that is both elegant and robust.',
        heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        ],
        nextProject: {
            title: 'Nexus Fintech',
            slug: 'nexus-fintech'
        }
    }
}

function StatsCard({ label, value, delay = 0 }: { label: string, value: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900 transition-colors"
        >
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-2">{label}</div>
            <div className="text-xl font-bold text-white">{value}</div>
        </motion.div>
    )
}

export function ProjectClient({ dict, slug, lang }: { dict: any, slug: string, lang: string }) {
    const project = projects[slug] || projects['default']
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <>
            {/* Full Bleed Hero */}
            <div className="relative h-screen w-full overflow-hidden" ref={ref}>
                <motion.div style={{ y }} className="absolute inset-0">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </motion.div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl md:text-9xl font-black tracking-tighter mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-2xl text-blue-400 font-light"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>
            </div>

            <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    <StatsCard label={dict.role} value={project.role} delay={0.1} />
                    <StatsCard label={dict.client} value={project.client} delay={0.2} />
                    <StatsCard label={dict.year} value={project.year} delay={0.3} />
                    <StatsCard label={dict.stack} value={project.stack} delay={0.4} />
                </div>

                {/* Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
                    <div className="md:col-span-4">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest sticky top-32">{dict.challenge}</h3>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-2xl md:text-4xl font-light leading-snug text-gray-200">
                            {project.challenge}
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {project.gallery.map((img: string, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={cn(
                                "relative aspect-video rounded-3xl overflow-hidden border border-white/5",
                                i === 0 ? "md:col-span-2 aspect-[21/9]" : ""
                            )}
                        >
                            <Image src={img} alt="Gallery" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>

                {/* Solution */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
                    <div className="md:col-span-4">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest sticky top-32">{dict.solution}</h3>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl leading-relaxed text-gray-400">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* Next Project */}
                <Link href={`/${lang}/work/${project.nextProject.slug}`}>
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
                    >
                        <div className="absolute inset-0 bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">{dict.next}</div>
                            <div className="text-5xl md:text-7xl font-black text-white group-hover:text-blue-500 transition-colors">
                                {project.nextProject.title}
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </section>
        </>
    )
}
