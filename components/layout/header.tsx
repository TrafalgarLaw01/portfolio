'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Header({ dict, lang }: { dict: any, lang: string }) {
    const pathname = usePathname()

    const navItems = [
        { name: dict.home, path: `/${lang}` },
        { name: dict.work, path: `/${lang}/work` },
        { name: dict.about, path: `/${lang}/about` },
        { name: dict.services, path: `/${lang}/services` },
        { name: dict.contact, path: `/${lang}/contact` },
    ]

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12"
        >
            <Link href={`/${lang}`} className="relative z-50 group">
                <span className="text-xl font-bold tracking-tighter text-white">
                    PONTUS<span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]">.</span>
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full shadow-2xl">
                {navItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "relative text-sm font-medium transition-colors duration-300",
                                isActive ? "text-white" : "text-gray-400 hover:text-cyan-300"
                            )}
                        >
                            {item.name}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_12px_rgba(0,210,255,0.6)]"
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>

            <button className="md:hidden text-white">
                Menu
            </button>
        </motion.header>
    )
}
