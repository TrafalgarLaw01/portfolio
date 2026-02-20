'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CheckCircle2, ArrowRight } from 'lucide-react'

function ServiceCard({ title, description, tags, color, delay = 0 }: { title: string, description: string, tags: string[], color: string, delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay }}
            className="group relative p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors overflow-hidden"
        >
            <div className={cn("absolute top-0 right-0 w-64 h-64 bg-gradient-to-br opacity-5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity group-hover:opacity-10", color)} />

            <h3 className="text-3xl font-bold mb-4 relative z-10">{title}</h3>
            <p className="text-gray-400 mb-8 max-w-md relative z-10 leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-3 relative z-10">
                {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="w-6 h-6 text-white" />
            </div>
        </motion.div>
    )
}

function ProcessStep({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="flex gap-6 md:gap-10 items-start group"
        >
            <div className="text-xl md:text-2xl font-mono text-blue-500/50 group-hover:text-blue-400 transition-colors pt-1">
                {number}
            </div>
            <div className="space-y-2">
                <h4 className="text-xl font-bold group-hover:text-blue-200 transition-colors">{title}</h4>
                <p className="text-gray-400 leading-relaxed max-w-lg">{desc}</p>
            </div>
        </motion.div>
    )
}

export function ServicesClient({ dict }: { dict: any }) {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* Header Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
                >
                    {dict.title} <span className="text-gray-600">.</span>
                </motion.h1>
                <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
            </section>

            {/* Services Grid */}
            <section className="px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
                <ServiceCard
                    title={dict.branding.title}
                    description={dict.branding.desc}
                    tags={["Identity", "Strategy", "Guidelines", "Art Direction"]}
                    color="from-purple-500 to-blue-500"
                    delay={0.1}
                />
                <ServiceCard
                    title={dict.development.title}
                    description={dict.development.desc}
                    tags={["Next.js", "React", "WebGL", "Three.js", "Performance"]}
                    color="from-blue-500 to-cyan-500"
                    delay={0.2}
                />
                <ServiceCard
                    title={dict.design.title}
                    description={dict.design.desc}
                    tags={["UX/UI", "Prototyping", "Motion", "Interaction"]}
                    color="from-emerald-500 to-green-500"
                    delay={0.3}
                />
                <ServiceCard
                    title={dict.consulting.title}
                    description={dict.consulting.desc}
                    tags={["Audit", "SEO", "Scalability", "Architecture"]}
                    color="from-orange-500 to-red-500"
                    delay={0.4}
                />
            </section>

            {/* Process Section */}
            <section className="py-32 bg-zinc-900/30 border-t border-white/5">
                <div className="px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="sticky top-32 h-fit">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">{dict.method.title}</h2>
                        <p className="text-xl text-gray-400 max-w-md">
                            {dict.method.desc}
                        </p>

                        <div className="mt-12 p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 md:max-w-md">
                            <div className="flex items-center gap-4 mb-2">
                                <CheckCircle2 className="text-blue-400 w-6 h-6" />
                                <span className="font-bold text-blue-200">Guaranteed Results</span>
                            </div>
                            <p className="text-sm text-blue-200/60">
                                We don't just ship code; we deliver business value capable of scaling with your vision.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <ProcessStep
                            number="01"
                            title={dict.method.steps.discovery.title}
                            desc={dict.method.steps.discovery.desc}
                            delay={0.2}
                        />
                        <ProcessStep
                            number="02"
                            title={dict.method.steps.strategy.title}
                            desc={dict.method.steps.strategy.desc}
                            delay={0.3}
                        />
                        <ProcessStep
                            number="03"
                            title={dict.method.steps.execution.title}
                            desc={dict.method.steps.execution.desc}
                            delay={0.4}
                        />
                        <ProcessStep
                            number="04"
                            title={dict.method.steps.launch.title}
                            desc={dict.method.steps.launch.desc}
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
