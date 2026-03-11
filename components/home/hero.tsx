'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// Dynamic import with ssr: false to prevent Next.js hydration errors (Spline Skill: COMMON_PROBLEMS #10)
const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-transparent" />
})

// Detect if device can handle WebGL (Spline Skill: PERFORMANCE - Mobile Strategy)
function shouldLoadSpline(): boolean {
    if (typeof window === 'undefined') return false
    const isMobile = window.innerWidth < 768
    const isLowEnd = navigator.hardwareConcurrency <= 2
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
    const noWebGL = !gl
    return !isMobile && !isLowEnd && !noWebGL
}

const SPLINE_SCENE_URL = '/spline/scene-clean.splinecode'

export function Hero({ dict }: { dict: any }) {
    const containerRef = useRef<HTMLDivElement>(null)
    // Optimistic loading: Assume true to trigger Spline download instantly on client hydration
    const [canLoad, setCanLoad] = useState(true)
    const [splineLoaded, setSplineLoaded] = useState(false)
    const [splineFailed, setSplineFailed] = useState(false)
    // isReady forces text to wait slightly so it animates tightly coupled with the 3D scene
    const [isReady, setIsReady] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    })

    // Parallax effects
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    // Check device capability post-hydration (unmount if mobile/low end)
    useEffect(() => {
        const capable = shouldLoadSpline()
        if (!capable) {
            setCanLoad(false)
            setIsReady(true) // Start text immediately if no Spline
        }
    }, [])

    // Fast-fallback timeout
    // If Spline takes more than 1500ms to load, show text anyway to maintain agilidade
    useEffect(() => {
        if (!canLoad) return
        const id = setTimeout(() => {
            setIsReady(true)
            if (!splineLoaded) setSplineFailed(true)
        }, 3000)
        timeoutRef.current = id
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
    }, [canLoad, splineLoaded])

    function onSplineLoad() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setSplineLoaded(true)
        setIsReady(true)
    }

    const showSpline = canLoad && !splineFailed

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

            {/* Spline Wave — full section coverage, z-5 between gradient overlay and text */}
            {showSpline && (
                <div className="absolute inset-0 z-[5] pointer-events-none">
                    <div className="w-full h-full pointer-events-auto">
                        <Spline
                            scene={SPLINE_SCENE_URL}
                            onLoad={onSplineLoad}
                            style={{
                                width: '100%',
                                height: '100%',
                                opacity: splineLoaded ? 1 : 0,
                                transition: 'opacity 0.8s ease-out',
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center flex flex-col items-center drop-shadow-2xl w-full"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={isReady ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[15vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 select-none shadow-black drop-shadow-lg pr-4 pb-2"
                >
                    PONTUS
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-8 text-xl md:text-2xl font-light tracking-[0.5em] text-gray-400 uppercase drop-shadow-md"
                >
                    {dict.subtitle}
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-xs tracking-widest uppercase opacity-70">{dict.scroll}</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 drop-shadow-[0_0_6px_rgba(0,210,255,0.4)]" />
                </motion.div>
            </motion.div>
        </section>
    )
}
