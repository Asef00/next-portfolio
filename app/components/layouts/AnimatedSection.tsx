'use client'

import { motion, useAnimation, useInView } from 'motion/react'
import { useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  id?: string
}

export default function AnimatedSection({
  children,
  id,
}: AnimatedSectionProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      x: 100, // slide to right when exiting
      transition: { duration: 0.6 },
    },
    visible: {
      opacity: 1,
      x: 0, // enter from left
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      id={id}
      className="w-full"
    >
      {children}
    </motion.section>
  )
}
