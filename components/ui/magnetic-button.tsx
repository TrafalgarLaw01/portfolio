'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current?.getBoundingClientRect() || { height: 0, width: 0, left: 0, top: 0 }
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX, y: middleY })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x / 4, y: position.y / 4 }} // Smoother divisor
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative z-10 w-fit touch-none"
        >
            {children}
        </motion.div>
    )
}
