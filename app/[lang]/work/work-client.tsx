'use client'

import { motion } from 'framer-motion'
import { BentoGrid } from '@/components/home/bento-grid'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { useState } from 'react'

const categories = ['All', 'Web', 'Mobile', 'Branding']

export function WorkClient({ dict, bentoDict, lang }: { dict: any, bentoDict: any, lang: string }) {
    const [filter, setFilter] = useState('All')

    return (
        <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1400px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-8"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                    {dict.title} <br /> <span className="text-gray-500">{dict.highlight}</span>
                </h1>

                <div className="flex flex-wrap gap-2">
                    {Object.entries(dict.filters).map(([key, label]) => (
                        <LiquidButton
                            key={key}
                            size="sm"
                            onClick={() => setFilter(key)}
                            className={`text-sm font-medium ${filter === key
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {label as string}
                        </LiquidButton>
                    ))}
                </div>
            </motion.div>

            {/* Reusing BentoGrid for now, but in reality this should be a mapped list of projects */}
            <BentoGrid dict={bentoDict} lang={lang} />
        </section>
    )
}
